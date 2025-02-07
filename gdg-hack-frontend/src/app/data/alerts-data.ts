export interface AlertsType {
    id: string;
    machine_name: string;
    machine_type:string;
    data_points: null;
    anomalie: string;
    alert_time :Date;
  }

export const alertsData: AlertsType[] = [
    { id: '001', machine_name: "Machine 001", anomalie: "Crash", data_points:null ,alert_time: new Date(Date.now() - 1 * 60 * 60 * 1000), machine_type: 'tamping Presses' }, // 1 hour ago
    
]  