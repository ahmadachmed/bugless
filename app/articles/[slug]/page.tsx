export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
    const articles = await res.json();
    const article = articles.find((article: { slug: string }) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <p>Author: {article.author}</p>
      <p>Date: {article.date}</p>
      <div>
        <p>{article.content}</p>
      </div>
    </div>
  );
}
