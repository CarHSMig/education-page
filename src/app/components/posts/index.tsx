"use client";

import "./index.css";
import PostTitle from "../post-title";
import Signature from "../signature";
import PostContent from "../post-content";

export interface PostTitleInterface {
  title: string;
  signature_name: string;
  signature_date: string;
  signature_hour: string;
  content: string;
}

export default function Posts(props: PostTitleInterface) {
  return(
    <div>
      <PostTitle title={props.title}/>
      <Signature signature_name={props.signature_name} signature_date={props.signature_date} signature_hour={props.signature_hour}/>
      <PostContent content={props.content}/>
    </div>
  );
} 