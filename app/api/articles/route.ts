import { NextResponse } from "next/server";

const articles = [
  {
    id: 1,
    title: "QA Fundamental",
    slug: "qa-fundamental",
    date: "June 3, 2024",
    author: "John Doe",
    content: "Learn the basic of software testing and quality assurance.",
    description: "Learn the basic of software testing and quality assurance.",
    category: "Fundamental",
    imageUrl: "https://images.unsplash.com/photo-1570215170761-f056128eda48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "QA Experts",
    slug: "qa-experts",
    date: "June 4, 2024",
    author: "John F Kennedy",
    content: "You can find the best QA experts here.",
    description: "Description For the QA Experts",
    category: "Experts",
    imageUrl: "https://images.unsplash.com/photo-1570215170761-f056128eda48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export async function GET() {
  return NextResponse.json(articles);
}

export async function POST(req: NextResponse) {
  try {
    const body = await req.json();
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const newArticle = { id: articles.length + 1, ...body };
    articles.push(newArticle);
    return NextResponse.json(newArticle, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
