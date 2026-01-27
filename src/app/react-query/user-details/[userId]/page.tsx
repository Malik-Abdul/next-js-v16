import UserDetailsClient from "@/components/reactQueryInsights/RQParts/UserDetailsClient";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return <UserDetailsClient userId={userId} />;
}
