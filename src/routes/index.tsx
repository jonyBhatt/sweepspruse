import { Hero } from '#/components/homepage/Hero'
import { HowItWorks } from '#/components/homepage/HowitWorks'
import { Navbar } from '#/components/shared/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  )
}

// const [isScrolled, setIsScrolled] = useState(false);
