"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const skills = [
    "React", "Next.js", "TypeScript", "TailwindCSS",
    "Node.js", "Express", "MongoDB", "PostgreSQL",
    "UI/UX Design", "shadcn/ui", "Git", "REST APIs"
  ]

  return (
    <section id="about" className="w-full py-16 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — ABOUT TEXT + SKILLS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Hi! I’m a passionate full-stack developer who enjoys building modern,
            responsive, and user-friendly applications.  
            I love working with clean UI, scalable architecture, and beautiful design.
          </p>

          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* RIGHT — PHOTO */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <Image
              src="/bikram.jpg"       // change this to your image path
              width={400}
              height={100}
              alt="My Photo"
              className="object-fit  rounded-md"
            />
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
