import React, { useEffect, useState } from "react";

const Request = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Request;
