import React, { useState } from 'react';
import { feelingsData } from "@/app/lib/data";
import { MealLogProps } from '@/app/lib/types';
import LogMealHeader from './logMealHeader';

export default function StepThree({ formData, setFormData, onNext, onPrevious }: MealLogProps) {
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);

  const toggleFeeling = (feeling: string) => {
    setSelectedFeelings((prevSelectedFeelings) =>
      prevSelectedFeelings.includes(feeling)
        ? prevSelectedFeelings.filter((f) => f !== feeling)
        : [...prevSelectedFeelings, feeling]
    );
  };

  const handleNextClick = () => {
    if (setFormData && formData) {
    setFormData({ ...formData, mealFeeling: selectedFeelings });
    }
    if (onNext) onNext();
  };

  return (
    <div className="container">

      <main className="">
      <LogMealHeader />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">How did the meal make you feel?</h2>
        <p className="text-gray-500 mb-8 italic font-light">Choose as many as you want</p>
        
        <div className="flex-wrap flex gap-3">
          {feelingsData.map((feeling) => (
            <button
              key={feeling}
              className={`p-2 w-fit border border-black py-1 px-3 rounded-full ${selectedFeelings.includes(feeling) ? 'bg-yellow-vivid text-black' : 'bg-gray-200 text-black'}`}
              onClick={() => toggleFeeling(feeling)}
              type="button"
            >
              {selectedFeelings.includes(feeling) ? `- ${feeling}` : `+ ${feeling}`}
            </button>
          ))}
        </div>
        </div>
      </main>
      

      <footer className="fixed bottom-0 left-0 w-full flex justify-between">
        <button
          onClick={onPrevious}
          className="bg-white text-black border w-1/2 border-black p-3 flex-1"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="w-1/2 bg-yellow-muted text-black p-3 border border-black"
        >
          Next
        </button>
      </footer>

    </div>
  );
}
