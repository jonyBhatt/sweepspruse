import SnowClearingPage from '#/components/homepage/servicepage-components/SnowCleaningComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/(landing)/services/snow-cleaning',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SnowClearingPage />
  </div>
}
