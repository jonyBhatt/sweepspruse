import GrassMowingComponent from '#/components/homepage/servicepage-components/GrassCleaningComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/(landing)/services/grass-cleaning',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <GrassMowingComponent />
  </div>
}
