// React 2 - Week 1

// 3. Routing and Navigation Exercise

"use client";

import { usePathname } from "next/navigation";

// Create a dynamic route for a blog post that displays the title from the route. For example, /blogs/my-new-post should dynamically display "My New Post".
export default function BlogPosts() {
  const pathname = usePathname();

  const title = pathname.split("/").pop().replace(/-/g, " ");

  return <h1>Current pathname: {title}</h1>;
}
