import React, { useState } from 'react';
import LogMealHeader from './logMealHeader';
import { MealLogProps } from '@/app/lib/types';
import BottomPaddingNoText from '../bottomPaddingNoText';

export default function StepTwo({ formData, setFormData, onNext, onPrevious }: MealLogProps) {
  const [mealDescription, setMealDescription] = useState('');

  const handleNextClick = () => {
    if (mealDescription) {
        if (setFormData && formData) {
      setFormData({ ...formData, mealDescription });
        }
      if (onNext) onNext();
    } else {
      alert('Please enter a description of your meal');
    }
  };

  return (
    <div className="container ">
        <main className="">
      <LogMealHeader />

      <div className="p-6">
        <h2 className="text-2xl font-semibold font-sans-serif mb-2">What did you have for this meal?</h2>
        <p className="text-gray-500 mb-8 italic font-light ">Enter your response below</p>
        <textarea
          value={mealDescription}
          onChange={(e) => setMealDescription(e.target.value)}
          placeholder="[ I had a ... ]"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          rows={4}
        ></textarea>
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

      <BottomPaddingNoText />

    </div>
  );
}
