"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StepOne from "@/components/meal-logging/stepOne";
import StepTwo from "@/components/meal-logging/stepTwo";
import StepThree from "@/components/meal-logging/stepThree";
import StepFour from "@/components/meal-logging/stepFour";
import { FormData } from "@/app/lib/types";

export default function LogMealPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    mealType: "",
    mealDescription: "",
    mealFeeling: [],
    additionalNotes: "",
  });

  const router = useRouter();

  // Navigate back to the previous page or home page on cancel
  const handleCancel = () => {
    router.push("/home"); // Change this to the desired path
  };

  // Final submission handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | undefined) => {
    if (event) {
      event.preventDefault();
    }
    
    // Perform the form submission logic, e.g., sending data to the backend
    try {
      console.log("sending request");
      const response = await fetch('http://localhost:3001/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form.');
      }
      const jsonBody = await response.json();
      console.log({jsonBody})
    } catch (error) {
      console.error('Error submitting form.');
    }
    
    handleCancel(); // Assuming we navigate away after submitting the form
  };

  // Step transition handlers
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Render the current step based on the state
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onCancel={handleCancel}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onPrevious={prevStep}
            onCancel={handleCancel}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onPrevious={prevStep}
            onCancel={handleCancel}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            setFormData={setFormData}
            onPrevious={prevStep}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-screen">
      <form>{renderStep()}</form>
    </div>
  );
}
