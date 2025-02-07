import { LucideProps } from 'lucide-react'

export interface DashboardProps {
  user: {
    name: string
    role: 'manager' | 'admin'
  }
}

export interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export interface StatCardProps {
  title: string
  value: string
  icon: React.FC<LucideProps>
  color: string
}

interface ChartCardProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
    status: number;
  }>;
  dataKey: string;
  color: string;
}

export interface SidebarItem {
  name: string
  icon: React.FC<LucideProps>
}

export interface BarChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  color: string; // Pass color dynamically
}

export interface FilterCardProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  type: string
  status: string
}

