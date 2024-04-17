"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All events",
    path: "/events/all",
  },
];

function Header() {
  const activePathName = usePathname();

  return (
    <header className="flex items-center justify-between sm:px-9 px-3 py-3 border-b border-white/10 h-14">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-sm">
          {routes.map((rout) => (
            <li
              key={rout.name}
              className={cn(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white": activePathName === rout.path,
                  "text-white/50": activePathName !== rout.path,
                }
              )}
            >
              <Link href={rout.path}> {rout.name}</Link>
              {activePathName === rout.path && (
                <motion.div
                  layoutId="active-link"
                  className="bg-accent h-1 w-full absolute -bottom-3.5"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
