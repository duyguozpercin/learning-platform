import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  console.log("🔍 Middleware caught:", req.nextUrl.pathname);
});

export const config = {
  matcher: [
    "/((?!_next|_vercel|sw.js|service-worker.js|workbox-|favicon.ico|manifest.json|robots.txt|.*\\..*).*)",
  ],
};
