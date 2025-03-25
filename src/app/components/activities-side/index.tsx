"use client";

import "./index.css";
import Button from "./buttons";
import { useState } from "react";

const operations = ["+", "-", "*", "/"];

export default function ActivitiesSidebar() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const generateChallenge = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setOperation(operations[Math.floor(Math.random() * operations.length)]);
    setMessage("");
    setUserInput("");
  };

  const checkAnswer = () => {
    let correctAnswer;
    switch (operation) {
      case "+": correctAnswer = num1 + num2; break;
      case "-": correctAnswer = num1 - num2; break;
      case "*": correctAnswer = num1 * num2; break;
      case "/": correctAnswer = num1 / num2; break;
    }

    if (parseFloat(userInput) === correctAnswer) {
      setScore(score + 1);
      setMessage("✅ Correto!");
    } else {
      setMessage("❌ Errado! Tente novamente.");
    }
  };

  const resetChallenge = () => {
    setScore(0);
    setMessage("");
    setUserInput("");
    generateChallenge();
  };

  return (
    <div className="container">
      {/* Cabeçalho */}
      <div className="header">
        <h1>Você tem {score} pontos</h1>
        <Button 
          text="Sortear Desafio"
          onClick={generateChallenge}
          color="#5D5FEF"
          width="200px"
        />
      </div>

      {/* Desafio Matemático */}
      <div className="challenge">
        <p>Quanto é:</p>
        <div className="operation-box">
          <span className="number">{num1}</span>
          <span className="operator">{operation}</span>
          <span className="number">{num2}</span>
        </div>
      </div>

      <div className="input-container">
        <input
          placeholder="Sua Resposta"
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>

      <Button 
        text="Validar"
        onClick={checkAnswer}
        color="#04D361"
        width="250px"
      />

      <Button 
        text="Novo Jogo"
        onClick={resetChallenge}
        color="#D34C6C"
        width="250px"
      />

      {message && <p className="message">{message}</p>}
    </div>
  );
}
