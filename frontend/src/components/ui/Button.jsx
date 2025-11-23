import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Amarelo XP (Principal)
        default:
          "bg-yellow-500 text-black shadow hover:bg-yellow-400",
        // Vermelho (Perigo/Erro)
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-500",
        // Borda Fina (Neutro)
        outline:
          "border border-zinc-800 bg-transparent shadow-sm hover:bg-zinc-800 hover:text-white text-zinc-300",
        // Cinza Escuro (Botões secundários)
        secondary:
          "bg-zinc-800 text-white shadow-sm hover:bg-zinc-700",
        // Fantasma (Só texto/ícone, fundo transparente)
        ghost:
          "hover:bg-zinc-800 hover:text-white text-zinc-400",
        // Link (Texto amarelo sublinhado)
        link: "text-yellow-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-xl",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
// ... resto do código acima ...

Button.displayName = "Button";

// Adicione esta linha logo acima do export:
// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };