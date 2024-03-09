"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/Navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">All Courses</HoveredLink>
          </div>
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
          </div>
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
          </div>
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">Song Writing</HoveredLink>
          </div>
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
export default Navbar;
