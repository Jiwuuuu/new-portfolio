"use client"

import type * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  number?: string
  children: React.ReactNode
  color?: string
}

export function NavLink({ number, children, className, href = "#", color = "FFBE3A", ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative flex h-[30px] w-[116px] cursor-pointer items-center justify-between",
        "rounded-md border border-black bg-black px-2.5 py-2",
        "text-white transition-all duration-200",
        className,
      )}
      style={
        {
          "--hover-color": `#${color}`,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className="text-sm font-normal leading-[14px]">{children}</span>
      <span className="relative flex overflow-hidden text-[10px] font-normal leading-[10px]">
        <ArrowRight className="absolute h-3 w-3 -translate-x-full opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
        <span className="flex transition-all duration-700 ease-out group-hover:translate-x-full">
          [{number?.padStart(2, "0")}]
        </span>
      </span>
      <style jsx>{`
        a:hover {
          background-color: var(--hover-color);
          color: black;
          transform: translate(-0.25rem, -0.25rem);
          box-shadow: 0.25rem 0.25rem black;
        }
        a:active {
          transform: translate(0);
          box-shadow: none;
        }
      `}</style>
    </a>
  )
}

