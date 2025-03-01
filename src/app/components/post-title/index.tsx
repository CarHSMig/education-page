"use client";

import { Lexend } from "next/font/google";
import "./index.css";

const lexend = Lexend({ subsets: ["latin"] });

export interface PostTitleInterface {
  title: string;
}

export default function PostTitle(props: PostTitleInterface ) {  
  return(
    <div className={`${lexend.className} title`}>
      <h1>{props.title}</h1>
    </div>
  );
} 