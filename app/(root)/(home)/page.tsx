import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Welcome to DevFlow</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
