import SignIn from "@/views/auth/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - LuxeShade",
  description: "Sign in to your LuxeShade account to manage your orders and designs.",
};

export default function SignInPage() {
  return <SignIn />;
}
