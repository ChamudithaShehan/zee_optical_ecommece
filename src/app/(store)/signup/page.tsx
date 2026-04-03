import SignUp from "@/views/auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account - LuxeShade",
  description: "Join LuxeShade and start customizing your sunglasses today.",
};

export default function SignUpPage() {
  return <SignUp />;
}
