import { useRouter } from "next/router";
import React, { useRef } from "react";

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
  // useRef hook to store form
  const ref = useRef<HTMLFormElement>(null);
  // useRouter hook to redirect
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

      // Send data to API
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // Store email in localStorage
          localStorage.setItem("email", data.email);
          // Redirect to dashboard
          router.push("/dashboard");
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
    </div>
  );
}
