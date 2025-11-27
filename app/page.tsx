// app/page.tsx
import { AboutSection } from '@/components/about'
import ContactForm from '@/components/contact'
import DashboardLayout from '@/components/dashboard'
import { ProjectsSection } from '@/components/project'
import { SkillsSection } from '@/components/skill'
import React from 'react'


const Page = () => {
  return (
    <DashboardLayout>
      <AboutSection  />
      <SkillsSection />
     <ProjectsSection/>
     <ContactForm/>
    </DashboardLayout>
  )
}

export default Page
