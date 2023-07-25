import React from "react";
import QuestionSection from "./Components/QuestionSection";

function QuizAppMainPage() {
  const mcqQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      answer: "Mars",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Cu", "Pt"],
      answer: "Au",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["France", "Germany", "Brazil", "Spain"],
      answer: "France",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Heart", "Brain", "Skin"],
      answer: "Skin",
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which year did World War II end?",
      options: ["1943", "1945", "1948", "1951"],
      answer: "1945",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
      answer: "Mount Everest",
    },
    {
      question: "Which scientist proposed the theory of general relativity?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      answer: "Albert Einstein",
    },
  ];

  return (
    <div>
      <QuestionSection mcqQuestions={mcqQuestions} />
    </div>
  );
}

export default QuizAppMainPage;
