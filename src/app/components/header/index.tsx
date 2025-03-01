"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./index.css";

export default function Header() {  

  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
      day: "2-digit",  
      month: "long",   
      year: "numeric"  
    });
    
    setDate(formattedDate);
  }, []);

  return(
    <header>
      <nav className="header">
        <Link href="/" className="logo">
          <Image src="/logo.jpg" 
                alt="logo" 
                width={200}
                height={50}
          />
        </Link>
        <div className="slogan">
          <p>Ferramenta de aprendizagem de cálculo</p>
        </div>
        <div className="date">
          <p>{date}</p>
        </div>
      </nav>
    </header>
  );
} 