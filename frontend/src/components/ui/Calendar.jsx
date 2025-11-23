import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../utils/cn";
import { buttonVariants } from "./Button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-zinc-900 border border-zinc-800 rounded-2xl w-fit", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-bold text-white",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border-zinc-700 text-zinc-400 hover:text-white"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-zinc-500 rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-zinc-800 rounded-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 text-zinc-300 hover:bg-zinc-800 hover:text-white"
        ),
        day_range_start:
          "day-range-start",
        day_range_end:
          "day-range-end",
        // A mágica acontece aqui: Dia selecionado fica Amarelo XP
        day_selected:
          "bg-yellow-500 text-black hover:bg-yellow-400 hover:text-black focus:bg-yellow-500 focus:text-black font-bold",
        day_today: "bg-zinc-800 text-white font-bold",
        day_outside:
          "day-outside text-zinc-700 opacity-50 aria-selected:bg-zinc-800/50 aria-selected:text-zinc-500",
        day_disabled: "text-zinc-700 opacity-50",
        day_range_middle:
          "aria-selected:bg-zinc-800 aria-selected:text-zinc-300",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

export { Calendar };