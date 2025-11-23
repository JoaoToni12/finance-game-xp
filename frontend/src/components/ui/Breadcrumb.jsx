import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "../../utils/cn";

function Breadcrumb({ ...props }) {
  return <nav aria-label="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-all text-sm text-zinc-500 sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn("hover:text-white transition-colors cursor-pointer", className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-white", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5 text-zinc-600", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">Mais</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};