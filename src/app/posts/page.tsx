"use client";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:3001/api/posts");
      const result = await response.json();
      if (result) setPosts(result);
    }
    getPosts();
    console.log("Post page render");
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
