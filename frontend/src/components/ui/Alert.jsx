import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../utils/cn";

const alertVariants = cva(
  "relative w-full rounded-2xl border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[20px_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-1 items-start [&>svg]:w-5 [&>svg]:h-5 [&>svg]:translate-y-[-2px]",
  {
    variants: {
      variant: {
        // Padrão (Cinza/Neutro)
        default: "bg-zinc-900 border-zinc-800 text-zinc-200 [&>svg]:text-white",
        
        // Destructive (Erro/Vermelho)
        destructive:
          "border-red-900/50 bg-red-900/10 text-red-400 [&>svg]:text-red-500",
          
        // Warning (Amarelo XP) - Adicionei este extra para você!
        warning:
          "border-yellow-500/30 bg-yellow-500/10 text-yellow-500 [&>svg]:text-yellow-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("col-start-2 font-bold tracking-tight text-base mb-1", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("col-start-2 text-sm text-zinc-400 leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };