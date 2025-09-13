import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "backdrop-blur-md bg-gradient-to-r from-primary/80 to-primary/60 text-primary-foreground hover:from-primary hover:to-primary/80 border border-primary/30 hover:border-primary/60 hover:shadow-neon",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "backdrop-blur-md bg-gradient-to-r from-glass/40 to-glass/20 border border-glass-border hover:border-primary/50 text-foreground hover:text-primary hover:shadow-neon/50",
        secondary:
          "backdrop-blur-md bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground hover:from-secondary hover:to-secondary/80 border border-secondary/30 hover:border-secondary/60 hover:shadow-neon-secondary",
        ghost: "hover:bg-glass/30 hover:text-foreground backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        glass: "backdrop-blur-md bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/60 text-foreground hover:text-primary hover:shadow-neon transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
