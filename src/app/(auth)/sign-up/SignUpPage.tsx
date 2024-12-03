import { SignUpCard } from "@/features/auth/components/sign-up-card";

export const SignUpPage = () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUpCard />;
};
