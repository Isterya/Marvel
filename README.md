# Marvel Information Portal

An official source of information about Marvel. This React-based project relies on a server I built myself, which is modeled after the structure of the Marvel API developer portal — a service that is no longer officially available. The project includes a list of characters organized by theme, as well as a separate list of comics, featuring information, pricing, links to wikis, and more.

## Live Demo

https://marvel-git-main-isteryas-projects.vercel.app

## Features

- Random character generator, refreshed on demand or automatically at a set interval
- Paginated character list with a "load more" mechanism
- Character search by name
- Detailed character view: description, thumbnail, related comics, links to homepage and wiki
- Paginated comics list with thumbnails, titles, and pricing
- Individual comic detail page
- Animated list transitions
- Per-section error boundaries and explicit loading/error/empty states
- Dynamic page metadata for SEO

## Tech Stack

React 18, React Router DOM, Formik + Yup, react-helmet-async, react-transition-group, SCSS.

## API

Since the official Marvel API was discontinued, this project runs on a custom backend that mirrors its response structure (characters, comics, thumbnails, pricing, and related metadata).

## License

Personal project. All Marvel-related names, characters, and imagery belong to Marvel and its respective owners. This project is not affiliated with or endorsed by Marvel.