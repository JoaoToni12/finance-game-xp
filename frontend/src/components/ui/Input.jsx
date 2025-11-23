import * as React from "react";

import { cn } from "../../utils/cn";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        // Base Styling
        "flex h-10 w-full min-w-0 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-base text-white shadow-sm transition-all placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50",
        
        // Focus State (Amarelo XP)
        "focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 focus:outline-none",
        
        // Error State (Vermelho)
        "aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500/50",
        
        // File input special styles (keep to handle file uploads correctly)
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-300",
        
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };