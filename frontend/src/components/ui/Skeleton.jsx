import * as React from "react";
import { cn } from "../../utils/cn";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-zinc-800", className)}
      {...props}
    />
  );
}

export { Skeleton };