import React, { useState } from 'react';
import { feelingsData } from "@/app/lib/data";
import { MealLogProps } from '@/app/lib/types';

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
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <button className="text-gray-600" onClick={onPrevious}>Cancel</button>
        <h1 className="text-lg font-semibold">Log a Meal</h1>
        <div /> 
      </header>

      <main className="mt-10">
        <h2 className="text-xl font-semibold mb-4">How did the meal make you feel?</h2>
        <p className="text-gray-500 mb-8">Choose as many as you want</p>
        
        <div className="grid grid-cols-2 gap-4">
          {feelingsData.map((feeling) => (
            <button
              key={feeling}
              className={`p-2 rounded-lg ${selectedFeelings.includes(feeling) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => toggleFeeling(feeling)}
              type="button"
            >
              {selectedFeelings.includes(feeling) ? `- ${feeling}` : `+ ${feeling}`}
            </button>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full flex justify-between p-4 bg-white">
        <button
          onClick={onPrevious}
          className="bg-gray-300 text-black p-3 rounded-lg flex-1 mr-2"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="bg-blue-500 text-white p-3 rounded-lg flex-1 ml-2"
        >
          Next
        </button>
      </footer>
    </div>
  );
}
