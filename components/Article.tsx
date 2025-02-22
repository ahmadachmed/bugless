import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";

interface ArticleProps {
    imageUrl: string;
    title: string;
    author: string;
    date: string;
    category: string;
    description: string;
    content: string;
}

export function Article(props: ArticleProps) {
  const { title, imageUrl, author, date, category, description, content } =
    props;

  return (
    <div className="flex flex-col items-start space-y-4 pr-8">
      <div className="flex items-center justify-center space-x-2">
        <Avatar src={imageUrl} alt={title} size="md" />
        <div>
          <p className="text-slate-500">{author}</p>
          <p className="text-slate-500">
            {date} / {category}
          </p>
        </div>
      </div>
      <div className=" antialiased">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-md text-gray-400">{description}</p>
      </div>
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default Article;
