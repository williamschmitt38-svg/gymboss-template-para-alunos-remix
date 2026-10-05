import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'gymboss-template-para-aen178bv',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_HdVL7slykqWyXr04HVFY7K9lSt6th805',
  authRequired: false,
  auth: { mode: 'managed' },
})
