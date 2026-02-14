// src/middleware.ts
import { withAuth } from "next-auth/middleware";

export const middleware = withAuth({
  // আপনার protected routes
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // যেসব route protect করতে চাও
};
