import type { ActivityPoint } from "../types/dashboard";
import Icon from "./Icon";

interface ActivityChartProps {
  data: ActivityPoint[];
}

const chartWidth = 640;
const chartHeight = 220;
const horizontalPadding = 34;
const verticalPadding = 26;
const maximumHours = 6;

export default function ActivityChart({ data }: ActivityChartProps) {
  const usableWidth = chartWidth - horizontalPadding * 2;
  const usableHeight = chartHeight - verticalPadding * 2;

  const points = data.map((item, index) => {
    const x =
      horizontalPadding + (index / Math.max(data.length - 1, 1)) * usableWidth;

    const y =
      chartHeight -
      verticalPadding -
      (item.focusHours / maximumHours) * usableHeight;

    return {
      ...item,
      x,
      y,
    };
  });

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const firstPoint = points[0];
  const lastPoint = points.at(-1);

  const areaPath =
    firstPoint && lastPoint
      ? `${linePath} L ${lastPoint.x} ${
          chartHeight - verticalPadding
        } L ${firstPoint.x} ${chartHeight - verticalPadding} Z`
      : "";

  const totalHours = data.reduce((sum, item) => sum + item.focusHours, 0);

  const averageHours = data.length > 0 ? totalHours / data.length : 0;

  const gridValues = [0, 1.5, 3, 4.5, 6];

  return (
    <article
      id="activity"
      className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon name="chart" className="size-4.5" />
            </span>

            <h2 className="text-base font-bold text-slate-950">
              Weekly activity
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Focus hours recorded across the last seven days.
          </p>
        </div>

        <div className="flex gap-6">
          <div>
            <p className="text-xs font-medium text-slate-400">Total</p>
            <p className="mt-1 text-lg font-bold text-slate-950">
              {totalHours.toFixed(1)}h
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Daily avg.</p>
            <p className="mt-1 text-lg font-bold text-slate-950">
              {averageHours.toFixed(1)}h
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 overflow-hidden">
        <svg
          role="img"
          aria-label="Line chart showing daily focus hours"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="h-auto w-full overflow-visible"
        >
          <defs>
            <linearGradient id="activity-area" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgb(99 102 241)"
                stopOpacity="0.22"
              />
              <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {gridValues.map((value) => {
            const y =
              chartHeight -
              verticalPadding -
              (value / maximumHours) * usableHeight;

            return (
              <g key={value}>
                <line
                  x1={horizontalPadding}
                  x2={chartWidth - horizontalPadding}
                  y1={y}
                  y2={y}
                  stroke="rgb(226 232 240)"
                  strokeDasharray="5 5"
                  vectorEffect="non-scaling-stroke"
                />

                <text x={0} y={y + 4} fill="rgb(148 163 184)" fontSize="11">
                  {value}h
                </text>
              </g>
            );
          })}

          {areaPath && <path d={areaPath} fill="url(#activity-area)" />}

          {linePath && (
            <path
              d={linePath}
              fill="none"
              stroke="rgb(79 70 229)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          )}

          {points.map((point) => (
            <g key={point.day}>
              <circle
                cx={point.x}
                cy={point.y}
                r="5"
                fill="white"
                stroke="rgb(79 70 229)"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />

              <title>{`${point.day}: ${point.focusHours} hours`}</title>
            </g>
          ))}
        </svg>

        <div aria-hidden="true" className="grid grid-cols-7 pl-8 text-center">
          {data.map((item) => (
            <span key={item.day} className="text-xs font-medium text-slate-400">
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
