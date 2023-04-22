import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">
              <Link href="/">My App</Link>
            </h1>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </div>
    </>
  );
}
