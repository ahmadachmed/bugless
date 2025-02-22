/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPageBySlug, getPageContent, notion } from "@/app/lib/notion";
import Article from "@/components/Article";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client/dist/notion-renderer";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Page({ params }: { params: { slug: string } }) {
  const {slug} = params 
  const post = await getPageBySlug(slug);
  if (!post) {
    return <div>Article not found</div>;
  }

  const content = await getPageContent(post.id);
  const notionRenderer = new NotionRenderer({
    client: notion,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  console.log("article: ", post);

  return (
    <Article
      title={(post.properties.title as any)?.title?.[0]?.plain_text || "Untitled"}
      imageUrl={(post.cover as any)?.external?.url || (post.cover as any)?.file?.url || "/next.svg"}
      author={(post.properties.Author as any)?.people?.[0]?.name || "unknown"}
      date={(post.properties.Created as any)?.created_time || "no date"}
      category={(post.properties.Tags as any)?.multi_select?.[0]?.name || "Uncategorized"}
      description={(post.properties.Description as any)?.rich_text?.[0]?.plain_text || ""}
      content={html}
    />
  );
}
