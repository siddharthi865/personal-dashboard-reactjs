import { useState } from "react";

import {
  dashboardStats,
  initialTodos,
  scheduleItems,
  userProfile,
  weeklyActivity,
} from "./data/dashboard";
import DashboardHeader from "./components/DashboardHeader";
import ActivityChart from "./components/ActivityChart";
import UpcomingCard from "./components/UpcomingCard";
import ProfileCard from "./components/ProfileCard";
import TodoList from "./components/TodoList";
import StatCard from "./components/StatCard";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <div id="overview" className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="lg:pl-72">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <DashboardHeader
            notificationCount={notificationCount}
            onClearNotifications={() => setNotificationCount(0)}
          />

          <section
            aria-label="Dashboard summary"
            className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {dashboardStats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </section>

          <div className="mt-6 grid items-start gap-6 xl:grid-cols-3">
            <div className="space-y-6 xl:col-span-2">
              <ActivityChart data={weeklyActivity} />

              <TodoList initialItems={initialTodos} />
            </div>

            <div className="space-y-6">
              <ProfileCard profile={userProfile} />

              <UpcomingCard items={scheduleItems} />
            </div>
          </div>

          <footer className="mt-8 border-t border-slate-200 py-5 text-center text-xs text-slate-400">
            Personal Dashboard · Built with React and TypeScript
          </footer>
        </div>
      </main>
    </div>
  );
}
