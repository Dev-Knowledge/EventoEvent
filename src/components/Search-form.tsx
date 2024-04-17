"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Searchform() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const handleOnsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }
    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleOnsubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}

export default Searchform;
