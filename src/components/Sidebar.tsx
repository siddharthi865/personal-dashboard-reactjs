import type { IconName } from "../types/dashboard";
import Icon from "./Icon";

interface NavigationItem {
  label: string;
  href: string;
  icon: IconName;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Overview",
    href: "#overview",
    icon: "dashboard",
  },
  {
    label: "Activity",
    href: "#activity",
    icon: "chart",
  },
  {
    label: "Tasks",
    href: "#tasks",
    icon: "check",
  },
  {
    label: "Schedule",
    href: "#schedule",
    icon: "calendar",
  },
  {
    label: "Profile",
    href: "#profile",
    icon: "user",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-slate-100 px-7">
        <a
          href="#overview"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
            <Icon name="dashboard" className="size-5" />
          </span>

          <div>
            <p className="text-base font-bold text-slate-950">Dashly</p>
            <p className="text-xs text-slate-500">Personal workspace</p>
          </div>
        </a>
      </div>

      <nav aria-label="Dashboard navigation" className="flex-1 px-4 py-6">
        <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Workspace
        </p>

        <ul className="mt-3 space-y-1">
          {navigationItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  index === 0
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                <Icon name={item.icon} className="size-5" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="m-4 rounded-2xl bg-slate-950 p-5 text-white">
        <div className="grid size-9 place-items-center rounded-lg bg-white/10">
          <Icon name="target" className="size-5" />
        </div>

        <p className="mt-4 text-sm font-semibold">Stay consistent</p>

        <p className="mt-1 text-xs leading-5 text-slate-300">
          You are making steady progress toward your weekly focus goal.
        </p>

        <a
          href="#profile"
          className="mt-4 inline-flex text-xs font-semibold text-indigo-300 hover:text-indigo-200"
        >
          View progress →
        </a>
      </div>
    </aside>
  );
}
