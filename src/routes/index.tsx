import { Hero } from '#/components/homepage/Hero'
import { Navbar } from '#/components/shared/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
    </div>
  )
}

// const [isScrolled, setIsScrolled] = useState(false);
