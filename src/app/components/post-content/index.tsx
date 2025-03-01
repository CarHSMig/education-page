"use client";

import "./index.css";

export interface PostContentInterface {
  content: string;
}

export default function PostContent(props: PostContentInterface) {  
  const [firstPart, secondPart] = props.content.split("\n");

  return (
    <div className="post">
      <p className="content">{firstPart}</p>
      <p className="content">{secondPart}</p>
    </div>
  );
}
