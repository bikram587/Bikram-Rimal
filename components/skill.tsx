import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "shadcn/ui",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
    "API Development",
    "UI/UX Design",
  ]

  return (
    <section id="skills" className="w-full py-16">
      <div className="container">
        <Card className="border bg-background/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Skills</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
