import { prisma } from "@repo/db/prisma"

export default function Home() {
  return (
    <div style={{ color: "red", backgroundColor: "white", padding: "50px", fontSize: "2rem" }}>
      Hello World! The deployment works!
    </div>
  );
}
