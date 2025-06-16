"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex space-x-4 items-center">
        <Link href="/">AirDoc</Link>
        <Link href="/docs">Docs</Link>
      </div>
      <ModeToggle />
    </header>
  )
}