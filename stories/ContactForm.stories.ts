import type { Meta, StoryObj } from "@storybook/react"
import { ContactForm } from "@/components/contact-form"

const meta = {
  title: "Components/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMockSubmission: Story = {
  parameters: {
    mockData: [
      {
        url: "/api/contact",
        method: "POST",
        status: 200,
        response: {
          success: true,
          message: "Thank you for your message!",
        },
      },
    ],
  },
}
