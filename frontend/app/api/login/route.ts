import { APIURLs } from "@/app/lib/constants/API.URLs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const loginData = await req.json();

  const response = {
    error: false,
    message: {},
    data: null,
  };

  await fetch(APIURLs.Login, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) return res.json();

      return null;
    })
    .then(async (data) => {
      if (data) {
        response.data = data.userInfo;
        const StoreCookie = await cookies();
        StoreCookie.set("token", data.token);
      } else {
        response.error = true;
      }
    })
    .catch((e) => {});

  if (response.error) return Response.error();

  return Response.json({ userInfo: response.data });
}
