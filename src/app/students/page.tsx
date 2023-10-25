"use client";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [students, setStudents] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:3001/api/students");
      const result = await response.json();
      if (result) setStudents(result);
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
            <th>Gmail</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
