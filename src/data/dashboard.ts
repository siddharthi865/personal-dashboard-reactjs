import type {
  ActivityPoint,
  DashboardStat,
  ScheduleItem,
  Todo,
  UserProfile,
} from "../types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    id: "tasks",
    label: "Tasks completed",
    value: "18",
    change: "+12%",
    changeLabel: "from last week",
    icon: "check",
    tone: "emerald",
  },
  {
    id: "focus",
    label: "Focus time",
    value: "24.5h",
    change: "+2.4h",
    changeLabel: "from last week",
    icon: "clock",
    tone: "indigo",
  },
  {
    id: "goal",
    label: "Weekly goal",
    value: "76%",
    change: "+8%",
    changeLabel: "progress",
    icon: "target",
    tone: "amber",
  },
  {
    id: "events",
    label: "Events",
    value: "6",
    change: "3",
    changeLabel: "still upcoming",
    icon: "calendar",
    tone: "rose",
  },
];

export const weeklyActivity: ActivityPoint[] = [
  { day: "Mon", focusHours: 2.8 },
  { day: "Tue", focusHours: 4.2 },
  { day: "Wed", focusHours: 3.6 },
  { day: "Thu", focusHours: 5.1 },
  { day: "Fri", focusHours: 4.7 },
  { day: "Sat", focusHours: 2.4 },
  { day: "Sun", focusHours: 1.7 },
];

export const initialTodos: Todo[] = [
  {
    id: "todo-1",
    title: "Review dashboard wireframes",
    completed: true,
  },
  {
    id: "todo-2",
    title: "Prepare weekly project update",
    completed: false,
  },
  {
    id: "todo-3",
    title: "Finish React component exercise",
    completed: false,
  },
  {
    id: "todo-4",
    title: "Plan tomorrow's priorities",
    completed: false,
  },
];

export const userProfile: UserProfile = {
  name: "Jordan Lee",
  role: "Frontend Developer",
  email: "jordan@example.com",
  location: "Bengaluru, India",
  initials: "JL",
  weeklyGoal: 30,
  completedGoal: 23,
};

export const scheduleItems: ScheduleItem[] = [
  {
    id: "schedule-1",
    title: "Product stand-up",
    day: "Tue",
    time: "10:00 AM",
    duration: "30 min",
  },
  {
    id: "schedule-2",
    title: "Design review",
    day: "Wed",
    time: "2:30 PM",
    duration: "45 min",
  },
  {
    id: "schedule-3",
    title: "Weekly planning",
    day: "Fri",
    time: "4:00 PM",
    duration: "1 hour",
  },
];
