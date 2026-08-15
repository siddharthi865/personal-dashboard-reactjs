export type IconName =
  | "dashboard"
  | "check"
  | "chart"
  | "calendar"
  | "bell"
  | "clock"
  | "plus"
  | "trash"
  | "target"
  | "user"
  | "mail"
  | "location";

export type StatTone = "indigo" | "emerald" | "amber" | "rose";

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: IconName;
  tone: StatTone;
}

export interface ActivityPoint {
  day: string;
  focusHours: number;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface UserProfile {
  name: string;
  role: string;
  email: string;
  location: string;
  initials: string;
  weeklyGoal: number;
  completedGoal: number;
}

export interface ScheduleItem {
  id: string;
  title: string;
  day: string;
  time: string;
  duration: string;
}
