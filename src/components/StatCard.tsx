import type { DashboardStat, StatTone } from "../types/dashboard";
import Icon from "./Icon";

interface StatCardProps {
  stat: DashboardStat;
}

const toneStyles: Record<
  StatTone,
  {
    icon: string;
    change: string;
  }
> = {
  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    change: "text-indigo-600",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    change: "text-emerald-600",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600",
    change: "text-amber-600",
  },
  rose: {
    icon: "bg-rose-50 text-rose-600",
    change: "text-rose-600",
  },
};

export default function StatCard({ stat }: StatCardProps) {
  const styles = toneStyles[stat.tone];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            {stat.value}
          </p>
        </div>

        <span
          className={`grid size-11 place-items-center rounded-xl ${styles.icon}`}
        >
          <Icon name={stat.icon} className="size-5" />
        </span>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        <span className={`font-semibold ${styles.change}`}>{stat.change}</span>{" "}
        {stat.changeLabel}
      </p>
    </article>
  );
}
