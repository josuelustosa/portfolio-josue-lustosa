import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** Centers content and applies the page's horizontal padding. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-8 sm:px-12", className)}
      {...props}
    />
  );
}
