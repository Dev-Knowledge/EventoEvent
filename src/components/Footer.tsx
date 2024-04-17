"use client";
import Link from "next/link";

const routes = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

function Footer() {
  return (
    <footer className="flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 mt-auto">
      <small className="text-xs">
        &copy; 2050 Abdelmounim. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((rout) => (
          <li key={rout.name}>
            <Link href={rout.path}>{rout.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
