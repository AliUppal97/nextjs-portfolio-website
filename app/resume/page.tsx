import type { Metadata } from "next"
import { ResumeClient } from "./ResumeClient"

export const metadata: Metadata = {
  title: "Resume | Muhammad Uzair",
  description: "Download my resume or view my professional experience, education, and skills online.",
  openGraph: {
    title: "Resume | Muhammad Uzair",
    description: "Download my resume or view my professional experience, education, and skills online.",
    type: "profile",
  },
}

export default function ResumePage() {
  return <ResumeClient />
}
