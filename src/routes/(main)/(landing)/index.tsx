import { Hero } from '#/components/homepage/Hero'
import { HowItWorks } from '#/components/homepage/HowitWorks'
import { ServicesSection } from '#/components/homepage/Services'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/(landing)/')({ component: Home })

function Home() {
  return (
    <div className="">
      <Hero />
      <HowItWorks />
      <ServicesSection />
    </div>
  )
}

// const [isScrolled, setIsScrolled] = useState(false);
