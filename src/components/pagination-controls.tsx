import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DividerHorizontalIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationProps = {
  previousPath: string;
  nextPath: string;
};
function PaginationControls({ previousPath, nextPath }: PaginationProps) {
  const btnStyles =
    "text-white px-5 py-3 bg-white/5 rounded-md flex items-center gap-x-2 opacity-75 hover:opacity-100 transition text-sm";
  return (
    <section className="w-full flex items-center justify-between">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}

export default PaginationControls;
