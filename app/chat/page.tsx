'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import BottomPadding from '@/components/meal-logging/bottomPadding';

export default function Chat() {
  const router = useRouter();

  // retrieve the formData from context or props and pass it to the cohere API to get the response.
  // placeholder for the response text
  const cohereResponse = `Avocados are a wonderful source of healthy fats and nutrients, and milk provides protein and calcium. It's great that you're incorporating nutritious foods into your diet and feeling happy about your choices!

Including a variety of whole foods in your meals is a fantastic way to nourish your mind and body. Why not try adding some berries or a handful of nuts to your breakfast? These foods can provide an extra boost of antioxidants and healthy fats, giving you a natural energy lift and supporting your overall health.

Remember, small steps and consistent choices add up to make a big difference. Keep exploring and discovering new, delicious ways to fuel your wonderful self!`;

  const handleBackClick = () => {
    router.push('/app/home');
  };

  return (
    <div className="flex flex-col lg:min-h-[100vh]">

        <div className="mb-6 min-w-full">
            <div className="text-white bg-primary py-2 flex-row">
            <button
            onClick={() => router.push("/home")}
            className="text-sm py-2 px-4">
            Back
            </button>

            <div className="text-xl font-semibold text-center mb-4">Log a Meal</div>
            </div>
        </div>
     
        <div className="flex justify-center">
      <div className="flex-1 overflow-y-auto px-4 max-w-[50rem]">
        <div className="text-bold p-4 rounded-lg px-4 text-3xl font-semibold">
          Yay, logged your meal! 😋
        </div>

        <div className="mt-4 bg-white p-6 rounded-lg shadow space-y-4 border border-black">
          <div className="text-xl font-bold">Great job, Glen!</div>
          <p className="text-gray-700 whitespace-pre-line">{cohereResponse}</p>
        </div>
        <div className="flex justify-center mt-12">
        <button className="px-4 py-2min-w-[20rem] text-md bg-primary shadow-lg  text-white py-3 rounded-full"
        onClick={() => router.push("/home")}>
          Back to Home
        </button>
        </div>
        </div>
        </div>
        
      <BottomPadding />
    </div>
  );
};

