import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  // Replace these with your actual projects
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js, TailwindCSS, and shadcn/ui.",
      tech: ["Next.js", "TailwindCSS", "shadcn/ui"],
      link: "https://yourportfolio.com",
    },
    {
      title: "Task Manager App",
      description: "A full-stack task management application with user authentication and CRUD operations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/username/task-manager",
    },
    {
      title: "E-commerce Store",
      description: "An online store built with Stripe integration and a clean UI design.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Stripe API"],
      link: "https://github.com/username/ecommerce-store",
    },
  ]

  return (
    <section id="projects" className="w-full py-16 bg-background">
      <div className="container space-y-12">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="border bg-background/60 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-2 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter>
                <Button asChild size="sm" variant="outline">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Projects
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
