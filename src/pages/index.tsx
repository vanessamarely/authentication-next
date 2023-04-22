import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Welcome!! </h1>
      <div className="rounded-lg bg-gray-100 p-6 shadow-md mt-4">
        <Link href="/dashboard/">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
