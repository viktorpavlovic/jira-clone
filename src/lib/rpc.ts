import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";

export const client = hc<AppType>(
  process.env.NEXT_PUBLIC_APP_URL ||
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
);
