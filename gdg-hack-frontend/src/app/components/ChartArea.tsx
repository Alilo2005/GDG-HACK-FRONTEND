"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const defaultChartData = [
  { month: "January", revenue: 186, users: 80 },
  { month: "February", revenue: 305, users: 200 },
  { month: "March", revenue: 237, users: 120 },
  { month: "April", revenue: 73, users: 190 },
  { month: "May", revenue: 209, users: 130 },
  { month: "June", revenue: 214, users: 140 },
  { month: "January", revenue: 186, users: 80 },
  { month: "February", revenue: 305, users: 200 },
  { month: "March", revenue: 237, users: 120 },
  { month: "April", revenue: 73, users: 190 },
  { month: "May", revenue: 209, users: 130 },
  { month: "June", revenue: 214, users: 140 },
  { month: "January", revenue: 186, users: 80 },
  { month: "February", revenue: 305, users: 200 },
  { month: "March", revenue: 237, users: 120 },
  { month: "April", revenue: 73, users: 190 },
  { month: "May", revenue: 209, users: 130 },
  { month: "June", revenue: 214, users: 140 },
  { month: "January", revenue: 186, users: 80 },
  { month: "February", revenue: 305, users: 200 },
  { month: "March", revenue: 237, users: 120 },
  { month: "April", revenue: 73, users: 190 },
  { month: "May", revenue: 209, users: 130 },
  { month: "June", revenue: 214, users: 140 },
  { month: "January", revenue: 186, users: 80 },
  { month: "February", revenue: 305, users: 200 },
  { month: "March", revenue: 237, users: 120 },
  { month: "April", revenue: 73, users: 190 },
  { month: "May", revenue: 209, users: 130 },
  { month: "June", revenue: 214, users: 140 },
]

interface ChartProps {
  data?: { [key: string]: any }[] // Accepts dynamic datasets
  xAxisKey?: string // Allows dynamic X axis
  yAxisKeys?: string[] // Allows multiple Y axes
  title?: string
}

export function ChartArea({
  data = defaultChartData,
  xAxisKey = "month",
  yAxisKeys = ["revenue", "users"],
  title = "Area Chart - Customizable"
}: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Compare multiple datasets dynamically</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* Dynamic X-Axis */}
            <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} tickMargin={8} />
            {/* Dynamic Y-Axis */}
            <YAxis />
            <Tooltip />
            <Legend />
            
            {/* Render Areas dynamically based on provided Y-axis keys */}
            {yAxisKeys.map((key, index) => (
              <Area
                key={key}
                dataKey={key}
                type="monotone"
                fillOpacity={0.4}
                stroke={`hsl(${index * 60}, 70%, 50%)`} // Dynamic colors
                fill={`hsl(${index * 60}, 70%, 50%)`}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4" />
          <span>Trending data comparison</span>
        </div>
      </CardFooter>
    </Card>
  )
}
