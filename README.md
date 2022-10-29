## Project Title

This project is (rather unoriginally) called "React Blog". (Technically, it's a Next.js blog but that's just being picky.)

I've nicknamed it "The Running Dog Blog".

## Project Description

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). There's no special reason that I used Next.js except that I haven't used it before and thought it was worth trying it out.

This blog uses [Hygraph](https://app.hypgraph.com) for the back-end which is where the authors, posts and assets (e.g. images) are pulled from using GraphQL.

Some features I'd like to implement in the future are in the menus: making dynamic category pages and making the subscribe button do something.

## How to install and run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

I'd also suggest updating the social links in the Footer component otherwise you'll be sending lots of people to my really boring social media profiles.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Credits

The design was _heavily_ inspired by [Michael Terry's Minimalist Blog Concept](https://www.behance.net/gallery/58000685/Minimalist-Blog-Concept?tracking_source=search_projects_appreciations%7Cblog+minimalist). (I basically copied it pixel for pixel and then changed bits that I didn't like.) Go and check out his work and show him some love.

Also, big shout out to [Simo Edwin](https://github.com/developedbyed/) for his amazing [YouTube video on Hygraph](https://youtu.be/Dc7LAgqy1_E).
