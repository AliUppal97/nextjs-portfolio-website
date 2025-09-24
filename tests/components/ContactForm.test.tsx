import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContactForm } from "@/components/contact-form"
import jest from "jest" // Import jest to declare the variable

// Mock the toast hook
jest.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}))

// Mock fetch
global.fetch = jest.fn()

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders all form fields", () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
  })

  it("validates required fields", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const submitButton = screen.getByRole("button", { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
      expect(screen.getByText(/subject must be at least 5 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument()
    })
  })

  it("submits form with valid data", async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: "Message sent!" }),
    } as Response)

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/subject/i), "Test Subject")
    await user.type(screen.getByLabelText(/message/i), "This is a test message")

    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
          email: "john@example.com",
          subject: "Test Subject",
          message: "This is a test message",
        }),
      })
    })
  })

  it("displays success message after successful submission", async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: "Message sent!" }),
    } as Response)

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/subject/i), "Test Subject")
    await user.type(screen.getByLabelText(/message/i), "This is a test message")

    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument()
    })
  })

  it("displays error message on submission failure", async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Server error" }),
    } as Response)

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/subject/i), "Test Subject")
    await user.type(screen.getByLabelText(/message/i), "This is a test message")

    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument()
    })
  })
})
