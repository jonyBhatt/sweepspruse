import HomeCleaningComponent from '#/components/homepage/servicepage-components/HomeCleaningComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/(landing)/services/home-cleaning',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <HomeCleaningComponent />
  </div>
}
