import { useState, useEffect } from 'react';
import "./style.css";
import Post from './records.json';

export default function DataFetching() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setPosts(data));
  });

  return (
    <div className="post">
      <h1>Posts</h1>
      <h2>...are here</h2>

      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
/*
    const [posts, setPosts] = useState([]);
    const [randomPost, setRandomPost] = useState(null)

    useEffect(() => {    
        fetch('http://jsonplaceholder.typicode.com/users/1/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts));
    }, []);

    return (
    <div className="post">
        <>
        <button
          onClick={() => {
            const randomId = Math.round(Math.random())
            setRandomPost(posts[randomId])
            console.log(randomId)
          }}
        >
          Get random post
        </button>
        {randomPost && (
          <>
            {randomPost.title}
            {randomPost.body}
          </>
        )}
        {/* {Post?.map(post => (
        <ul>
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        </ul>
        ))} }
        </>
    </div>
    )
}*/