"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { SessionProvider, signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/home" });
  };

  const handleSignUpRedirect = () => {
    router.push("/signup");
  };

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    // handle the login logic, e.g., validate input and perform login.
  };

  return (
    <SessionProvider>
      <div className="bg-primary">
        <div className="flex flex-col items-center justify-center h-screen bg-blue-900 p-4">
          <img src="/login-logo.png" alt="Logo" className="mb-8" />

          <form
            onSubmit={handleLoginSubmit}
            className="rounded-lg p-6 w-full max-w-xs flex-col flex gap-y-4"
          >
            <div className="flex-col flex gap-y-1">
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
            <button
              type="submit"
              className="w-full bg-white border border-black shadow-lg py-2 rounded-full mb-1 hover:bg-accent-2 active:bg-primary hover:text-white"
            >
              Login
            </button>
            <p className="text-center text-white text-sm mb-4">
              Don't have an account?{" "}
              <button
                onClick={handleSignUpRedirect}
                className="underline hover:text-accent-1"
              >
                Sign Up
              </button>
            </p>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center bg-black py-2 rounded-full text-white"
            >
              <FaGoogle className="mr-2 text-md" />
              or login with Google
            </button>
          </form>
        </div>
      </div>
    </SessionProvider>
  );
}
