import type { ScheduleItem } from "../types/dashboard";
import Icon from "./Icon";

interface UpcomingCardProps {
  items: ScheduleItem[];
}

export default function UpcomingCard({ items }: UpcomingCardProps) {
  return (
    <article
      id="schedule"
      className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-950">Upcoming</h2>

          <p className="mt-1 text-sm text-slate-500">
            Your next scheduled events.
          </p>
        </div>

        <span className="grid size-9 place-items-center rounded-lg bg-rose-50 text-rose-600">
          <Icon name="calendar" className="size-4" />
        </span>
      </div>

      <ol className="mt-5 space-y-1">
        {items.map((item, index) => (
          <li key={item.id} className="relative flex gap-4 pb-5 last:pb-0">
            {index < items.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-4 top-9 h-[calc(100%-1.25rem)] w-px bg-slate-200"
              />
            )}

            <div className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border-4 border-white bg-indigo-100 text-[10px] font-bold text-indigo-700">
              {item.day.slice(0, 1)}
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="truncate text-sm font-semibold text-slate-800">
                {item.title}
              </p>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>{item.day}</span>

                <span className="inline-flex items-center gap-1">
                  <Icon name="clock" className="size-3.5" />
                  {item.time}
                </span>

                <span>{item.duration}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
