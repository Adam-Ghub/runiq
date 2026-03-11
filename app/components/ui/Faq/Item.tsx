"use client"
import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';

interface ItemProps {
  question: string;
  answer: string;
}

export default function Item({ question, answer }: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const answerId = `answer-region-${id}`;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex items-center justify-between p-6 text-left hover:cursor-pointer transition-colors"
      >
        <span className="text-lg font-bold text-black pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-500 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={answerId}
        role="region"
        aria-hidden={!isOpen}
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-gray-500 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
