import { SidebarItem } from '../types'
import { 
  LayoutDashboard, 
  Activity, 
  Settings,
} from 'lucide-react'


export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Members', icon: Activity },
  { name: 'Managers', icon: Settings },
]

