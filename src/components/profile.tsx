import useSWR from "swr";
import React from "react";
import Image from "next/image";

/**
 * Props for the Profile component
 */
type Props = {
  email: string | null;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile({ email }: Props) {
  const { data, error } = useSWR(`/api/${email}`, fetcher);
  //SWR will fetch the data from the API route and store it in the data variable
  const user = data?.user;

  if (error) return <div>failed to load</div>;
  //If error is true, we return a message

  if (!user) return <div>loading...</div>;
  //if not user is returned, we return a loading message
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 m-4">
      <h3 className="font-bold mb-4 text-center">Profile</h3>
      <div className="">
        <p><strong>Name:</strong> {`${user.firstName} ${user.lastName}`}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <div>
          <Image
            alt="User"
            src={user.image ? user.image : "https://placehold.co/600x400g"}
            unoptimized
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
