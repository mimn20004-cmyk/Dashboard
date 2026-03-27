# Dashboard

Dashboard is a responsive multi-page admin interface built as a frontend practice project. It presents business metrics, analytics, orders, team updates, and task tracking in a polished workspace with a modern dark-first visual style.

## Overview

This project was created to practice building dashboard-style layouts with strong hierarchy, reusable visual patterns, and lightweight interactions. The experience is split across dedicated pages so each section feels focused while still sharing the same design system.

## Features

- Responsive multi-page dashboard layout
- Sticky sidebar navigation on large screens
- Mobile sidebar toggle
- Dedicated pages for Overview, Analytics, Orders, Team, and Tasks
- Interactive analytics chart with multiple time ranges
- Orders table with status badges
- Team and task sections with lightweight interactions
- Dark and light mode toggle with saved preference
- Subtle hover lift effects across cards, links, and controls

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript

## Project Structure

```text
Dashboard/
├── index.html
├── analytics.html
├── orders.html
├── team.html
├── tasks.html
├── main.js
├── dashboard.jpg
└── README.md
```

## Pages

### `index.html`

Overview page with KPI cards, summary blocks, and quick operational insights.

### `analytics.html`

Analytics page with an interactive revenue chart and traffic source breakdown.

### `orders.html`

Orders page with recent transaction records and shipping workflow status.

### `team.html`

Team page focused on contributors, roles, and current focus areas.

### `tasks.html`

Tasks page with a checklist and recent activity updates.

## Interactivity

JavaScript is used for:

- theme switching with `localStorage`
- chart range switching
- responsive sidebar toggle
- interactive task state changes

## Running the Project

No build step is required.

1. Open the `Dashboard` folder.
2. Launch `index.html` in your browser.

## Customization

You can customize:

- page content inside each HTML file
- chart datasets in `main.js`
- theme colors and layout styling in the Tailwind config inside each page
- footer social links and personal details in the shared footer blocks

## Purpose

This project demonstrates frontend skills in building responsive admin dashboards, structuring multi-page interfaces, and adding polished client-side interactions without relying on a framework.
