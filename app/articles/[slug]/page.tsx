const articles = [
  {
    title: "QA Fundamental",
    slug: "qa-fundamental",
    date: "June 3, 2024",
    author: "John Doe",
    content: "Learn the basic of software testing and quality assurance.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = articles.find((article) => article.slug === slug);

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
