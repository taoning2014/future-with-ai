> **Note**: This project is forked from [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).  
> Huge thanks to [@timlrx](https://github.com/timlrx) for creating such an excellent starter template — it provided a solid foundation for this project!

This is a HackDay project where I used **Next.js** and **Vercel** to build a personal website to share my thoughts on how we can better leverage AI technologies in the future.  
You can visit the site at [futurewithAI.xyz](http://futurewithAI.xyz).

The website includes several responsive pages and interactive features such as a newsletter subscription and a discussion forum.

## Quick Start Guide

1. Clone the repo

```bash
git clone https://github.com/taoning2014/future-with-ai.git
```

2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use other analytics provider or a commenting solution other than giscus.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.ts`
6. Modify `headerNavLinks.ts` to customize navigation links
7. Add blog posts
8. Deploy on Vercel

## Installation

```bash
yarn
```

Please note, that if you are using Windows, you may need to run:

```bash
$env:PWD = $(Get-Location).Path
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the layout in `app` or content in `data`. With live reloading, the pages auto-updates as you edit them.
