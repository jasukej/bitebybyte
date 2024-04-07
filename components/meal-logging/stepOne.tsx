import React, { useState } from 'react';
import LogMealHeader from './logMealHeader';
import { MealLogProps } from '@/app/lib/types';

export default function StepOne({ formData, setFormData, onPrevious, onNext }: MealLogProps) {
  const [selectedMeal, setSelectedMeal] = useState('');

  const handleNextClick = () => {
    if (selectedMeal) {
      // Updating formData with the selectedMeal when moving to the next step
      setFormData({ ...formData, mealType: selectedMeal });
      if (onNext) onNext();
    } else {
      // Handle the case where no option is selected
      alert('Please select a meal');
    }
  };

  const handleSelectMeal = (meal: string) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="container mx-auto p-4">
      <main className="mt-10">
        <LogMealHeader />
        <h2 className="text-xl font-semibold mb-4">Which meal are you having?</h2>
        <p className="text-gray-500 mb-8">Choose one</p>
        
        <div className="space-y-4">
          {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((meal) => (
            <label key={meal} className="flex items-center border gap-4">
              <input
                type="radio"
                name="meal"
                value={meal}
                checked={selectedMeal === meal}
                onChange={() => handleSelectMeal(meal)}
                className="w-6 h-6"
              />
              <span className="text-lg">{meal}</span>
            </label>
          ))}
        </div>
      </main>
      
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-primary">
        <button
          onClick={handleNextClick}
          className="w-full bg-yellow-muted text-white p-3 rounded-lg"
        >
          Next
        </button>
      </footer>
    </div>
  );
}
