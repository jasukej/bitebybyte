import React, { useState } from 'react';
import LogMealHeader from './logMealHeader';
import { MealLogProps } from '@/app/lib/types';

export default function StepTwo({ formData, setFormData, onNext, onPrevious }: MealLogProps) {
  const [mealDescription, setMealDescription] = useState('');

  const handleNextClick = () => {
    if (mealDescription) {
      setFormData({ ...formData, mealDescription });
      if (onNext) onNext();
    } else {
      alert('Please enter a description of your meal');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <LogMealHeader />

      <main className="mt-10">
        <h2 className="text-xl font-semibold mb-4">What did you have for this meal?</h2>
        <p className="text-gray-500 mb-8">Enter your response below</p>
        <textarea
          value={mealDescription}
          onChange={(e) => setMealDescription(e.target.value)}
          placeholder="[ I had a ... ]"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          rows={4}
        ></textarea>
      </main>

      <footer className="fixed bottom-0 left-0 w-full flex justify-between p-4 bg-white">
        <button
          onClick={onPrevious}
          className="bg-white text-black border border-black p-3 flex-1 mr-2"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="bg-yellow-muted text-white p-3 border border-black flex-1 ml-2"
        >
          Next
        </button>
      </footer>
    </div>
  );
}
