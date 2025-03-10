"use client";

import "./index.css";

export interface SignatureInterface {
  signature_name: string;
  signature_date: string;
  signature_hour: string;
}

export default function Signature(props: SignatureInterface) {  
  return (
    <div className="signature-container">
      <p className="signature-item">{props.signature_name}</p> 
      <p className="signature-item">{props.signature_date}</p> 
      <p className="signature-item">{props.signature_hour}</p>
    </div>
  );
}
