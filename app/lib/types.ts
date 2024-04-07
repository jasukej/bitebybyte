export type MealLogProps = {
    formData?: FormData;
    setFormData?: React.Dispatch<React.SetStateAction<FormData>>;
    onNext?: () => void;
    onPrevious?: () => void;
    onCancel: () => void;
    onSubmit?: (event?: React.FormEvent<HTMLFormElement>) => void; 
  };

export type FormData = {
    mealType: string;
    mealDescription: string;
    mealFeeling: string[];
    additionalNotes: string;
};
  