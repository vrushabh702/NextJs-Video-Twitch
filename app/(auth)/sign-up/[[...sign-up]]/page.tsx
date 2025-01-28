import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return <SignUp signInFallbackRedirectUrl="http://localhost:3000/sign-up" />
}
