import React, { useState } from 'react';
import LogMealHeader from './logMealHeader';
import { MealLogProps } from '@/app/lib/types';


export default function StepFour({ formData, setFormData, onPrevious, onSubmit }: MealLogProps) {
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Call the onSubmit function which should handle the form submission
  const handleLogMealClick = () => {
    setFormData({ ...formData, additionalNotes });
    if (onSubmit) onSubmit();
  };

  return (
    <div className="container">
      <main className="">
      <LogMealHeader />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Care to elaborate?</h2>
        <p className="text-gray-500 mb-8 italic font-light">Write a response (optional)</p>
        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="The meal was super filling, but I feel anxious..."
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          rows={4}
        ></textarea>
        </div>
        
        <button onClick={handleLogMealClick}
          className="bg-primary text-center text-white px-6 mx-6 py-2 rounded-full
          w-fit border"
        >
          
          Log my meal
        </button>
        
      </main>

      <footer className="fixed bottom-0 left-0 w-full  bg-primary">
        <button
          onClick={onPrevious}
          className="w-full bg-white text-black p-3 border border-black"
        >
          Previous
        </button>
      </footer>
    </div>
  );
}
