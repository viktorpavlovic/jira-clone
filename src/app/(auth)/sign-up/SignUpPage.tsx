import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

export const SignUpPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUpCard />;
};
