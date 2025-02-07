'use client'

import React, { useState, useEffect } from 'react'
import axios from '../../lib/axios'
import { STAT_CARDS, CHART_CARDS } from '../../constants/index'
import { ChartBar, CheckCircle } from 'lucide-react'
import { ChartPie } from '@/app/components/ChartPie'

export default function DashboardClient() {
  const [productionData, setProductionData] = useState([])
  const [energyUsageData, setEnergyUsageData] = useState([])
  const [taskData, setTaskData] = useState([])
  const [averageProductionRate, setAverageProductionRate] = useState(0)
  const [completedTasksCount, setCompletedTasksCount] = useState(0)
  const [userTasks, setUserTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const flag = true
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productionResponse, energyUsageResponse, taskResponse] = await Promise.all([
          axios.get('/api/productions?per_page=20'),
          axios.get('/api/energy-usage'),
          axios.get('/api/tasks')
        ])

        const productionData = productionResponse.data.data.map((item: { output_quantity: number; target_quantity: number }) => ({
          ...item,
          productionRate: (item.output_quantity / item.target_quantity) * 100
        }))

        const totalTargetQuantity = productionData.reduce((sum: number, item: { target_quantity: number }) => sum + item.target_quantity, 0)
        const totalOutputQuantity = productionData.reduce((sum: number, item: { output_quantity: number }) => sum + item.output_quantity, 0)
        const avgProductionRate = (totalOutputQuantity / totalTargetQuantity) * 100

        const energyUsageData = energyUsageResponse.data.data.map((item: { machine_name: string; energy_consumed: number }) => ({
          name: item.machine_name,
          value: item.energy_consumed
        }))

        const taskData = taskResponse.data.data
        interface Task {
          status: string;
          user_id: string;
          task_description: string;
        }

        const completedTasks = taskData.filter((task: Task) => task.status === 'completed')
        const userId = localStorage.getItem('user') // Assuming user ID is stored in localStorage
        const userTasks = taskData
          .filter((task: Task) => task.user_id === userId)
          .slice(0, 5)
          .map((task: Task) => task.task_description)

        setProductionData(productionData)
        setEnergyUsageData(energyUsageData)
        setTaskData(taskData)
        setAverageProductionRate(avgProductionRate)
        setCompletedTasksCount(completedTasks.length)
        setUserTasks(userTasks)
        setLoading(false)
      } catch (err:any) {
        setError(err.message)
        setLoading(false)
      }
    }
    

    fetchData()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>
  }


  const updatedChartCards = CHART_CARDS.map(card => {
    if (card.title === 'Production Output') {
      return {
        ...card,
        data: productionData
      }
    }
    return card
  })

  return (
    <div className="p-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {updatedChartCards.map((card, index) => {
          if (card.title === 'Production Output') {
            return (
              <ChartBar
              />
            )
          }
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <ChartPie
        />
      </div>
    </div>
  )
}