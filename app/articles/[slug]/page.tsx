import Avatar from "@/components/Avatar";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
  const articles = await res.json();
  const article = articles.find(
    (article: { slug: string }) => article.slug === slug
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex flex-col items-start space-y-4 pr-8">
      <div className="flex items-center justify-center space-x-2">
        <Avatar src={article.imageUrl} alt={article.title} size="md" />
        <div>
          <p className="text-slate-500">{article.author}</p>
          <p className="text-slate-500">
            {article.date} / {article.category}
          </p>
        </div>
      </div>
      <div className=" antialiased">
        <h1 className="text-2xl font-semibold">{article.title}</h1>
        <p className="text-md text-gray-400">{article.description}</p>
      </div>
      <div>
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={800}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div>
        <p>{article.content}</p>
      </div>
    </div>
  );
}
