import { useSession } from "next-auth/react";

export default function Admin() {
  const { data: session } = useSession();


  if (!session) {
    return <div>Access Denied</div>;
  }

  return <div>Admin</div>;
}
