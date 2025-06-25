// React 2 - Week 1

// 3. Routing and Navigation Exercise

// Create a route /blogs that displays blogs

import Link from "next/link";

export default function Blogs() {
  const posts = ["Post-1", "Post-2", "Post-3"];

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            {/* use the Link to navigate to the post pages */}
            <Link href={`/blogs/${post}`}>{post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
