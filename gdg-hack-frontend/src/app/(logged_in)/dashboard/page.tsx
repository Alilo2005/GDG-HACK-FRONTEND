// page.tsx
import React from 'react'
import { DashboardProps } from '../../../types/index'
import DashboardClient from '../../../components/DashboardClient'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Dashboard({ user }: DashboardProps) {
  return (<DashboardClient  />)
}