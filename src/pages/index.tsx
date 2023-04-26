import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <h1> Welcome!! </h1>
      <div className="rounded-lg bg-gray-100 p-6 shadow-md mt-4">
        {session && session.user ? (
          <Link href="/dashboard/">Go to Dashboard</Link>
        ) : (
          <p>You need to sign in to access to Dashboard</p>
        )}
        
      </div>
    </div>
  );
}
