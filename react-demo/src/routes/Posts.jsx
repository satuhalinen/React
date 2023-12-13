import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
};

export default Posts;
