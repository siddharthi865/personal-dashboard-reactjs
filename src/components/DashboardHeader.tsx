import Icon from "./Icon";

interface DashboardHeaderProps {
  notificationCount: number;
  onClearNotifications: () => void;
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

function getDateLabel() {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

export default function DashboardHeader({
  notificationCount,
  onClearNotifications,
}: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-indigo-600">{getDateLabel()}</p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {getGreeting()}, Jordan.
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          Here is a quick look at your productivity and upcoming work.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onClearNotifications}
          aria-label={
            notificationCount > 0
              ? `Clear ${notificationCount} notifications`
              : "No new notifications"
          }
          className="relative grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <Icon name="bell" className="size-5" />

          {notificationCount > 0 && (
            <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold leading-4 text-white">
              {notificationCount}
            </span>
          )}
        </button>

        <a
          href="#profile"
          aria-label="Open profile"
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-1.5 pr-4 shadow-sm transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
            JL
          </span>

          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold text-slate-900">
              Jordan Lee
            </span>
            <span className="block text-xs text-slate-500">
              Frontend Developer
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
