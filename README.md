# Personal Dashboard

A responsive personal productivity dashboard built with React, TypeScript, Vite, and Tailwind CSS.

The project is intentionally frontend-only and focuses on React fundamentals such as component composition, props, state, list rendering, forms, and event handling.

## Features

- Responsive dashboard layout
- Reusable summary statistic cards
- Weekly SVG activity chart
- Interactive to-do list
- Add new tasks
- Toggle task completion
- Delete tasks
- Automatic task progress calculation
- User profile card
- Weekly focus goal
- Upcoming schedule
- Notification badge
- Dynamic browser-local greeting and date
- Accessible form controls and buttons

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Native SVG

No backend, authentication, database, or API is required.

## Project Structure

```text
src/
├── components/
│   ├── ActivityChart.tsx
│   ├── DashboardHeader.tsx
│   ├── Icon.tsx
│   ├── ProfileCard.tsx
│   ├── Sidebar.tsx
│   ├── StatCard.tsx
│   ├── TodoList.tsx
│   └── UpcomingCard.tsx
├── data/
│   └── dashboard.ts
├── types/
│   └── dashboard.ts
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```
