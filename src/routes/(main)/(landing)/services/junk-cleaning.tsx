import JunkRemovalComponent from '#/components/homepage/servicepage-components/JunkRemoveComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/(landing)/services/junk-cleaning',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <JunkRemovalComponent />
  </div>
}
