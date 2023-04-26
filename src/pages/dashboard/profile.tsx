import Profile from "@/components/profile";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function ProfilePage({}: Props) {
  // Get session
  const { data: session, status } = useSession();
  // Check if session is loading
  const loading = status === "loading";

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Profile email={(session?.user?.email as string) || ""} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
