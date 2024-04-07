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
    <div className="container mx-auto p-4">
      <LogMealHeader />

      <main className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Care to elaborate?</h2>
        <p className="text-gray-500 mb-8">Write a response (optional)</p>
        <textarea
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="The meal was super filling, but I feel anxious..."
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          rows={4}
        ></textarea>
      </main>

      <footer className="fixed bottom-0 left-0 w-full flex justify-between p-4 bg-white">
        <button
          onClick={onPrevious}
          className="bg-gray-300 text-black p-3 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={handleLogMealClick}
          className="bg-primary text-center text-white p-3 rounded-lg"
        >
          Log my meal
        </button>
      </footer>
    </div>
  );
}
