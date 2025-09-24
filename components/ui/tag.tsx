import type React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const tagVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant }), className)} {...props} />
}

export { Tag, tagVariants }
