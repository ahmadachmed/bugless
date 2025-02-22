/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { getPages } from "../lib/notion";

export default async function Home() {
  const resp = await getPages();
  const articles = resp.results as any;
  if (!articles) {
    return <div>No articles found</div>;
  }
  // console.log(articles);
  return (
    <section className="px-10">
      <div className="flex flex-col space-y-3">
        <h1>
          Hey there, welcome to Bugless! 🚀 Let&apos;s Debugging the world
        </h1>
        <p>
          This is where QA folks hang out! We talk about everything
          testing—manual, automation, bug hunting, CI/CD, and all the fun (and
          frustrating) stuff in between.
        </p>
      </div>
      <div className="flex mt-10 justify-between items-center">
        <h2 className="">Latest Articles</h2>
        <button className="text-blue-800 px-4 py-2 hover:bg-[#1E2028] rounded-md">
          View All
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {articles.map((article: any) => (
          <Link
            key={article.id}
            href={`/articles/${article.properties.Slug?.formula?.string}`}
            passHref
          >
            <div className="rounded-md space-y-2 cursor-pointer">
              <Image
                src={article.cover?.external?.url || article.cover?.file?.url}
                alt={article.properties.title?.title?.[0]?.plain_text}
                width={500}
                height={128}
                className="w-full h-auto object-cover rounded-md mb-3 image-hover"
              />
              <p className="text-xs text-slate-500">
                {article.properties.Created?.created_time}
              </p>
              <div className="flex space-x-2">
                {article.properties.Tags?.multi_select?.map((tag: any) => (
                  <p
                    key={tag.id}
                    className="px-2 py-1 bg-[#1E2028] text-blue-800 rounded-lg w-fit"
                  >
                    {tag.name}
                  </p>
                ))}
              </div>
              <div className="space-y-1">
                <h3>{article.properties.title?.title?.[0]?.plain_text}</h3>
                <p className="text-xs text-slate-400">
                  {article.properties.Description?.rich_text?.[0]?.plain_text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
