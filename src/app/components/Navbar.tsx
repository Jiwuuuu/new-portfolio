import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { navigationItems } from "@/lib/constant";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between  font-mono">
      <h1 className="font-switzer">DREI</h1>
      <div>
        <ul>
          <div className="flex flex-col gap-4 font-switzer">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                number={item.number}
                color={item.color}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
