# Frontend Hiking Task

This is a **frontend project** for managing and displaying a **hiking image gallery**, built with **Next.js 15, TypeScript, and Tailwind CSS**. Features include a **Masonry gallery with static images hosted on Liara Storage, dynamic modal with Spinner, Framer Motion animations, Next.js App Router, and dark/light mode**.

---

## Quick Start

### Create Project

```bash
npx create-next-app@latest frontend-hiking-task --ts --tailwind
```

### Run Project (Development)

```bash
cd frontend-hiking-task
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## Docker Build & Run

### Build Docker Image

```bash
docker build -t frontend-hiking-task .
```

### Run Docker Container

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

> Note: All images are uploaded to **Liara Storage**.

---

## Masonry Gallery

* Main gallery path: `/`
* Dynamic image path: `/gallery/[id]`
* The gallery is implemented in a **Masonry layout**, displaying images in uneven columns, similar to Pinterest.
* Gallery images are **static and hosted on Liara Storage**.
* Clicking an image:

  1. Path changes to `/gallery/[id]`.
  2. Image details are shown in a **dynamic modal**.
  3. **Main gallery page does not reload**.

---

## Modals (`@modal`)

* Modals are located in `src/app/@modal` and open **dynamically without a full page refresh**.
* `[id]` path is used to show details of each image.
* A **Spinner** is shown while image details are loading.
* Modals use **Next.js parallel routes** to maintain UI state and improve performance.

---

## Animation with Framer Motion

* **All modals and images inside modals** are animated using **Framer Motion**.
* Animations include smooth entry, opacity, and scale changes for a **fluid UX**.
* Animations are independent of gallery data, providing a professional feel every time the modal opens.

---

## Dark & Light Mode

* Uses **`next-themes`** for theme management.
* Users can toggle between **Light and Dark modes**.
* Appearance of **entire app, including gallery and modals**, changes dynamically.

---

## Features

* Masonry image gallery
* Static images hosted on **Liara Storage**
* Dynamic modal for image details without page refresh
* Modal and image animations with Framer Motion
* Spinner while loading image details
* Uses **Next.js App Router** and parallel routes
* Dark & Light mode with next-themes
* Responsive design with Tailwind CSS
* Built with Next.js 15 and TypeScript

---

## Technologies

* **Next.js 15**
* **TypeScript**
* **Tailwind CSS**
* **React**
* **Framer Motion**
* **next-themes**

---

## Documentation

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn)
* [Next.js GitHub](https://github.com/vercel/next.js)
* [next-themes](https://github.com/pacocoursey/next-themes)
* [Framer Motion](https://www.framer.com/motion/)
