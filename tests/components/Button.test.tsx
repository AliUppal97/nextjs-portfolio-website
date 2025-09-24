"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "@/components/ui/button"
import jest from "jest" // Import jest to fix the undeclared variable error

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("handles click events", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("applies variant styles correctly", () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-destructive")
  })

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    )
    expect(screen.getByRole("link")).toBeInTheDocument()
  })
})
