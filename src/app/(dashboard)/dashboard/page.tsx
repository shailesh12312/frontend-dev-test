import React, { Suspense } from 'react'
import DashboardTable from '../_components/DashboardTable';

export default function Page() {
  return (
    <Suspense fallback="">
      <DashboardTable/>
    </Suspense>
  )
}
