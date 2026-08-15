import type { UserProfile } from "../types/dashboard";
import Icon from "./Icon";

interface ProfileCardProps {
  profile: UserProfile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const goalPercentage = Math.min(
    Math.round((profile.completedGoal / profile.weeklyGoal) * 100),
    100,
  );

  return (
    <article
      id="profile"
      className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex items-center gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 text-lg font-bold text-indigo-700">
          {profile.initials}
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-slate-950">
            {profile.name}
          </h2>

          <p className="truncate text-sm text-slate-500">{profile.role}</p>
        </div>
      </div>

      <div className="my-5 h-px bg-slate-100" />

      <dl className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500">
            <Icon name="mail" className="size-4" />
          </span>

          <div className="min-w-0">
            <dt className="text-xs text-slate-400">Email</dt>
            <dd className="truncate text-sm font-medium text-slate-700">
              {profile.email}
            </dd>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500">
            <Icon name="location" className="size-4" />
          </span>

          <div className="min-w-0">
            <dt className="text-xs text-slate-400">Location</dt>
            <dd className="truncate text-sm font-medium text-slate-700">
              {profile.location}
            </dd>
          </div>
        </div>
      </dl>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Weekly focus goal
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {profile.completedGoal} of {profile.weeklyGoal} hours
            </p>
          </div>

          <span className="text-lg font-bold text-indigo-600">
            {goalPercentage}%
          </span>
        </div>

        <div
          className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-label="Weekly focus goal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={goalPercentage}
        >
          <div
            className="h-full rounded-full bg-indigo-600"
            style={{
              width: `${goalPercentage}%`,
            }}
          />
        </div>
      </div>
    </article>
  );
}
