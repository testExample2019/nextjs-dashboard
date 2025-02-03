## Next.js DirectLend Demo App

•	For development:
next dev --turbo : Runs the Next.js development server with Turbo mode enabled (if supported), which accelerates the development workflow by providing faster hot reloading and build times. Use this command during development to test your application with SSR features enabled.

For production testing:
next build: This command compiles your Next.js application for production. It performs optimizations and prepares your SSR pages and assets so that they can be served by the Node.js server.
next start: Launches the production server. This command starts the Node.js server that renders your pages on-demand (server-side rendering). It is typically used after running next build.

Additional Resources
•	Next.js Documentation https://nextjs.org/docs