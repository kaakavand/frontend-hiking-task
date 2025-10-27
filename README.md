# Project `frontend-hiking-task`

This is a **frontend project** for managing and displaying a **hiking image gallery**, implemented with **Next.js 15, TypeScript, and Tailwind CSS**. It includes features like **Masonry gallery with static images, dynamic modal with Spinner, Framer Motion animations, Next.js App Router, and dark/light mode**.

---

## Quick Start

### Create Project

The project was created using the following command, including **Next.js + TypeScript + Tailwind CSS**:

```bash
npx create-next-app@latest frontend-hiking-task --ts --tailwind
```

### Run Project

```bash
cd frontend-hiking-task
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the project.

#### Docker Build & Run (Optional)

If you prefer to run the app in Docker:

**Build Docker Image:**

```bash
docker build -t frontend-hiking-task .
```

**Run Docker Container:**

```bash
docker run -p 3000:3000 frontend-hiking-task
```

After running, the app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
frontend-hiking-task/
├── public/
│   ├── fonts/
│   │   ├── css/
│   │   └── fonts/
│   │       ├── eot/
│   │       ├── svg/
│   │       ├── ttf/
│   │       └── woff/
│   └── images/
│       └── hiking/
└── src/
    ├── app/
    │   ├── @modal/
    │   │   └── (.)gallery/
    │   │       └── [id]/
    │   └── gallery/
    │       └── [id]/
    ├── components/
    ├── config/
    ├── data/
    └── types/
```

---

## Masonry Gallery

- Main gallery path: `/`
- Dynamic image path: `/gallery/[id]`
- The gallery is implemented in a **Masonry layout**, displaying images in uneven columns, similar to Pinterest.
- Gallery images are **static**.
- When a user clicks an image:

  1. The path changes to `/gallery/[id]`.
  2. Image details are shown in a **dynamic modal**.
  3. **The main gallery page does not reload**.

---

## Modals (`@modal`)

- Modals are located in `src/app/@modal` and open **dynamically without a full page refresh**.
- The `[id]` path is used to show details of each image.
- When the modal opens, a **Spinner** is shown so the user knows the details are loading.
- The modals feature **Next.js parallel routes** to maintain UI state and improve performance.

---

## Animation with Framer Motion

- **All modals and images inside modals** are animated using **Framer Motion**.
- Animations include smooth entry, opacity, and scale changes to create a **pleasant and fluid UX**.
- Animations are independent of gallery data, providing a natural and professional feel every time the modal opens.

---

## Dark & Light Mode

- The project uses **`next-themes`** for theme management.
- Users can toggle between **Light** and **Dark** modes.
- The appearance of the **entire app, including gallery and modals**, changes dynamically.

---

## Features

- Masonry image gallery
- Gallery images are static
- Show image details in a modal without page refresh
- Modal and image entry animations with Framer Motion
- Spinner shown while loading image details in modal
- Uses **Next.js App Router** and parallel routes
- Dark & Light mode with next-themes
- Responsive design with Tailwind CSS
- Implemented with Next.js 15 and TypeScript

---

## Technologies

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **React**
- **Framer Motion**
- **next-themes**

---

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [GitHub Next.js](https://github.com/vercel/next.js)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Framer Motion](https://www.framer.com/motion/)
