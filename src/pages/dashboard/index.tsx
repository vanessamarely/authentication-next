import Profile from "@/components/profile";
import Link from "next/link";
import React, { useState } from "react";
// Import useSession hook
import { useSession } from "next-auth/react";

export default function Dashboard() {
  // useState hook to show profile
  const [showProfile, setShowProfile] = useState<boolean>(false);
  // Get session
  const { data: session } = useSession();
  // Get email from session
  const email = session?.user && session.user.email || "";
  // Function to handle show profile
  const handleShowProfile = async () => {
    // Set profile data
    setShowProfile(true);
  };
  console.log(session);

  return (
    <div className="rounded-lg bg-gray-100 p-4 shadow-md">
      <h1 className="p-4 text-4xl font-bold p-4">
        Welcome to my Dashboard!! {email}
      </h1>
      <p className="p-4">
        If you are a registered user, please login. If you are not a registered
        user, please register.
      </p>

      {session && session.user ? (
        <button
          type="button"
          onClick={handleShowProfile}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-4 m-4"
        >
          Show Profile
        </button>
      ) : (
        <div className="m-4">
          <Link
            href="/dashboard/login"
            className="rounded-lg bg-blue-100 p-4 mr-2"
          >
            Login
          </Link>
          <Link href="/dashboard/register" className="font-bold p-4 mr-2">
            Register
          </Link>
        </div>
      )}

      {showProfile && <Profile email={email} />}
    </div>
  );
}
