"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart,
  Home,
  FolderKanban,
  User,
  Menu,
} from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { title: "Overview", href: "/", icon: Home },
    { title: "Projects", href: "/project", icon: FolderKanban },
    { title: "About Me", href: "/about", icon: User },
    
  ]

  return (
    <div className="flex min-h-screen bg-muted/10">

      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 border-r bg-background/70 backdrop-blur-xl">
        <div className="p-6 font-bold text-xl tracking-tight">
          Portfolio<span className="text-primary">.Dash</span>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition"
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MOBILE SIDEBAR */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="m-4 md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <nav className="flex flex-col gap-3 mt-10">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition"
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b bg-background/60 backdrop-blur-xl">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/me.jpg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
