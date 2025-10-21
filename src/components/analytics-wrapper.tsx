"use client"

import dynamic from "next/dynamic"

const Analytics = dynamic(() => import("@/components/analytics").then(mod => ({ default: mod.Analytics })), {
  ssr: false,
})

export function AnalyticsWrapper() {
  return <Analytics />
}
