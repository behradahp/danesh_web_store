import { cookies } from "next/headers";

export async function GET(req: Request) {
  const StoreCookie = await cookies();
  StoreCookie.delete("token");

  return Response.json({ message: "success" });
}
