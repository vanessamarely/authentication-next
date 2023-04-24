import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";

/**
 * @object Data
 * @property {string} email
 * @property {string} password
 */
type Data = {
  email: string;
  password: string;
};

export default function Login() {
  const [providers, setProviders] = useState<any>(null);
  // useRef hook to store form
  const ref = useRef<HTMLFormElement>(null);
  // useRouter hook to redirect
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    event.preventDefault();
    // Get form data
    const form = ref.current;

    // Check if form exists
    if (form) {
      // Get form data
      const formData = new FormData(form);
      // Convert form data to object
      const data = Object.fromEntries(formData.entries());
      // Sign in user
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true, // Redirect to dashboard
        callbackUrl: "/dashboard", // Redirect to dashboard
      });
    }
  };

  return (
    <div>
      <h1 className="mb-4">Login</h1>
      <form
        className="rounded-lg bg-gray-100 p-4 shadow-md"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <div className="p-2 mb-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg bg-blue-100 p-2 ml-2"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="p-2 mb-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-lg bg-blue-100 p-2 ml-2"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button className="rounded-lg bg-blue-400 p-2 mr-2">Login</button>
      </form>

      <button
        className="rounded-lg bg-blue-400 p-2 m-2 mt-4"
        onClick={() => signIn(providers.auth0.id)}
      >
        auth0
      </button>
    </div>
  );
}
