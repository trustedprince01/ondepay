import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqimage from "../assets/faq.png";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="bg-[#ccc]/5 px-5 rounded-sm border-b border-purple-800/30">
      <button
        className="w-full py-4 flex justify-between items-center text-left hover:text-purple-300 transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="py-4 text-gray-400">{answer}</div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is OndePay?",
      answer:
        "OndePay is a platform that provides virtual US cards for online transactions, making it easy and secure to shop, pay bills, and manage finances globally.",
    },
    {
      question: "How secure is OndePay?",
      answer:
        "We prioritize security with industry-standard encryption and our own advanced security protocols, ensuring your virtual card transactions are protected.",
    },
    {
      question: "Can I send money to anyone?",
      answer:
        "Currently, OndePay focuses on virtual card issuance. You can use your OndePay card for online purchases and payments, but direct money transfers are not yet supported.",
    },
    {
      question: "Do I need a bank account to use OndePay?",
      answer:
        "No, you do not need a traditional bank account. You can fund your OndePay virtual card using various payment methods like credit/debit cards or bank transfers.",
    },
    {
      question: "How do I get started?",
      answer:
        "Download the app, create an account, complete the identity verification process, and generate your virtual US card to begin using OndePay.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="  bg-[#160B19] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-purple-300 mb-4 text-xl">
              Frequently Asked Question
            </h2>
            <h1 className="text-3xl font-semibold mb-8 text-white/30">
              What would you like to know about OndePay?
            </h1>
            <img src={faqimage} className="w-[7rem] mt-[3rem]" alt="" />
          </div>

          <div className="relative z-10">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
