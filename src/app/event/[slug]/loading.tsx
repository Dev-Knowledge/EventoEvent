import Skeleton from "@/components/skeleton";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 py-28">
      <Skeleton className="h-4 w-[550px]" />
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-4 w-[430px]" />
    </div>
  );
}

export default Loading;
