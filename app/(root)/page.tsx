import Image from "next/image";
import Link from "next/link";

type Article = {
  title: string;
  slug: string;
  imageUrl: string;
  date: string;
  category: string;
  description: string;
};

export default async function Home() {
  const articles: Article[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`)
    .then(res => res.json())
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
      {articles.map((article) => (
          <Link
            key={article.title}
            href={`/articles/${article.slug}`}
            passHref
          >
            <div className="rounded-md space-y-2 cursor-pointer">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={500}
                height={128}
                className="w-full h-auto object-cover rounded-md mb-3 image-hover"
              />
              <p className="text-xs text-slate-500">{article.date}</p>
              <p className="px-2 py-1 bg-[#1E2028] text-blue-800 rounded-lg w-fit">
                {article.category}
              </p>
              <div className="space-y-1">
                <h3>{article.title}</h3>
                <p className="text-xs text-slate-400">
                  {article.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
