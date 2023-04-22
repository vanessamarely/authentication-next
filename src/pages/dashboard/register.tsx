import { useRouter } from "next/router";
import React from "react";

export default function Registration() {
  // useRouter hook to redirect
  const router = useRouter();
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    event.preventDefault();
    // Get form data
    const form = event.currentTarget;
    // new FromData object is created
    const formData = new FormData(form);
    // Convert form data to object
    const data = Object.fromEntries(formData.entries());

    //localStorage to clear the email
    localStorage.clear();

    // Send data to API
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        router.push("/dashboard/login");
      });
  };

  return (
    <div>
      <h1 className="mb-4">Register</h1>
      <form
        className="rounded-lg bg-gray-100 p-4 shadow-md"
        onSubmit={handleSubmit}
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
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="rounded-lg bg-blue-100 p-2 ml-2"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button className="rounded-lg bg-blue-400 p-2 mr-2">Register</button>
      </form>
    </div>
  );
}
