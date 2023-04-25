import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export default function Header({}: Props) {
  const { data: session } = useSession();
  return (
    <header className="bg-gray-800 flex">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">
          <Link href="/">My App</Link>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {session && session.user ? (
          <button
            className="rounded-lg bg-blue-400 p-2 mr-2 hover:bg-blue-700 text-white"
            onClick={() => signOut()}
            type="button"
          >
            Sign out
          </button>
        ) : (
          <button
            className="rounded-lg bg-blue-400 p-2 mr-2 hover:bg-blue-700 text-white"
            onClick={() => signIn()}
            type="button"
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}
