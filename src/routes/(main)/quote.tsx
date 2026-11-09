import { QuoteWizard } from '#/features/quote/components/QuoteWizard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/quote')({
  component: QuotePage,
})

function QuotePage() {
  return (
    <div>
      <QuoteWizard />
    </div>
  )
}
