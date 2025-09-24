import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  animated?: boolean
  variant?: "default" | "minimal" | "nextjs"
}

export function Logo({ 
  className, 
  size = "md", 
  showText = true, 
  animated = true,
  variant = "nextjs"
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-11 w-11", 
    lg: "h-16 w-16"
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  }

  const svgSizeClasses = {
    sm: "h-5 w-5",
    md: "h-7 w-7",
    lg: "h-10 w-10"
  }

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className={cn(
          "relative flex items-center justify-center rounded-lg bg-card shadow-lg border",
          sizeClasses[size]
        )}>
          <svg
            className={cn(svgSizeClasses[size])}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Simple U */}
            <path
              d="M12 8V20C12 24 16 28 20 28C24 28 28 24 28 20V8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-foreground"
            />
          </svg>
        </div>
        
        {showText && (
          <span className={cn(
            "font-bold tracking-tight text-foreground",
            textSizeClasses[size]
          )}>
            Muhammad Uzair
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <span className={cn(
        "relative flex items-center justify-center rounded-lg bg-card shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border",
        sizeClasses[size]
      )}>
        <svg
          className={cn(svgSizeClasses[size])}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Clear, visible U using project colors */}
          <path
            d="M12 8V20C12 24 16 28 20 28C24 28 28 24 28 20V8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-primary"
          />
          
          {/* Next.js style accent lines using muted colors */}
          <path
            d="M30 12L34 12M30 16L34 16M30 20L34 20M30 24L34 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-muted-foreground"
          />
          
          {/* Next.js style corner accent */}
          <path
            d="M32 8L34 8L34 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          />
        </svg>
        
        {/* Subtle glow effect using project colors */}
        {animated && (
          <div className="absolute inset-0 rounded-lg bg-primary/5 animate-pulse" />
        )}
      </span>
      
      {showText && (
        <span className={cn(
          "font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary",
          textSizeClasses[size]
        )}>
          Muhammad Uzair
        </span>
      )}
    </div>
  )
}