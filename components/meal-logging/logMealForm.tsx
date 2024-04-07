'use client';

import React, { useState } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import { MealLogProps, FormData } from "@/app/lib/types";

type ExtendedMealLogProps = MealLogProps & {
    isOpen: boolean;
    onClose: () => void;
  };

const LogMealForm = ({ isOpen, onClose }: ExtendedMealLogProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    mealType: "",
    mealDescription: "",
    mealFeeling: [],
    additionalNotes: "",
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submitting form data to the server/API
    console.log(formData);
    onClose();
  };

  const handleCancel = () => {
    onClose();
    // Call onClose when the user cancels
  };

  const renderStep = () => {
    if (!isOpen) return null;
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
            onSubmit={() => handleSubmit}
            onCancel={handleCancel}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit} style={{ display: isOpen ? "block" : "none" }}
    >
      {renderStep()}
    </form>
  );
};

export default LogMealForm;
