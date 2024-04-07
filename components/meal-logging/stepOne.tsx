import React, { useState } from "react";
import LogMealHeader from "./logMealHeader";
import { MealLogProps } from "@/app/lib/types";
import BottomPaddingNoText from '../bottomPaddingNoText';

export default function StepOne({
  formData,
  setFormData,
  onPrevious,
  onNext,
}: MealLogProps) {
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleNextClick = () => {
    if (selectedMeal) {
      // Updating formData with the selectedMeal when moving to the next step
      if (setFormData && formData) {
        setFormData({ ...formData, mealType: selectedMeal });
      }
      if (onNext) onNext();
    } else {
      // Handle the case where no option is selected
      alert("Please select a meal");
    }
  };

  const handleSelectMeal = (meal: string) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="container">
      <main className="">
        <LogMealHeader />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Which meal are you having? 🥘
          </h2>
          <p className="text-gray-500 mb-8 italic font-light">Choose one</p>

          <div className="space-y-4">
            {["Breakfast", "Lunch", "Dinner", "Snack"].map((meal) => (
              <label
                key={meal}
                className="flex items-center border gap-4 px-4 py-4 rounded-md bg-white shadow-lg "
              >
                <input
                  type="radio"
                  name="meal"
                  value={meal}
                  checked={selectedMeal === meal}
                  onChange={() => handleSelectMeal(meal)}
                  className="w-6 h-6 !text-primary form-radio focus:ring-primary!"
                />
                <span className="text-lg">{meal}</span>
              </label>
            ))}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full  bg-primary">
        <button
          onClick={handleNextClick}
          className="w-full bg-yellow-muted text-black p-3 border border-black"
        >
          Next
        </button>
      </footer>

      <BottomPaddingNoText />
    </div>
  );
}
