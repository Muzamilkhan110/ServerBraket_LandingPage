"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqsData = [
  {
    question: "What is ServerBracket?",
    answer: "ServerBracket is a modern web hosting panel that simplifies server management with an intuitive UI and powerful automation tools.",
  },
  {
    question: "Is ServerBracket free to use?",
    answer: "We offer multiple pricing plans. The basic plan is free, while Pro and Enterprise plans include advanced features.",
  },
  {
    question: "Which technologies does ServerBracket support?",
    answer: "ServerBracket supports multiple technologies, including Node.js, Python, PHP, React.js, Next.js, and various databases.",
  },
  {
    question: "How secure is ServerBracket?",
    answer: "ServerBracket ensures high security with built-in SSL support, firewalls, and automated security patches.",
  },
  {
    question: "Can I manage multiple servers?",
    answer: "Yes! The Business and Enterprise plans allow you to manage multiple servers efficiently with advanced monitoring tools.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-custom m-auto py-16 font-grotesk">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md shadow-sky-900 transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm md:text-lg font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"}`}
            >
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
