"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

import { useSession, signIn } from "next-auth/react";
import { SessionProvider } from 'next-auth/react';

export default function SignUpPage() {
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    router.push('/home'); 
    return null; 
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/home' });
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <SessionProvider>
    <div className="bg-primary">
      <div className="flex flex-col items-center justify-center h-screen bg-blue-900 p-4">
        <img src="/login-logo.png" alt="Logo" className="mb-8" />

        <div className="rounded-lg p-6 w-full max-w-xs flex-col flex gap-y-4">
          <div className="flex-col flex gap-y-1">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 border rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded-xl"
            />
          </div>
          <div>
            <button className="w-full bg-white border border-black shadow-lg py-2 rounded-full mb-1 hover:bg-accent-2 active:bg-primary hover:text-white">
              Sign Up
            </button>
            <p className="text-center text-white text-sm mb-4">
              Already have an account?{" "}
              <button onClick={handleLoginRedirect} className="underline hover:text-accent-1">
                Login
              </button>
            </p>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-black py-2 rounded-full text-white"
          >
            <span className="mr-2 text-md">
              <FaGoogle />
            </span>{" "}
            or login with Google
          </button>
        </div>
      </div>
    </div>
    </SessionProvider>
  );
}
