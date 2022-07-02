import { useState, useEffect } from 'react';
import "./style.css";


export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [randomPost, setRandomPost] = useState([null]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Error!");
        }
        return res.json();
      })
      .then(data => {
        setPosts(data)
        const randomId = Math.round(Math.random() * data.length)
        setRandomPost(data[randomId])
      });
  }, []);

  return (
    <div className="posts">   
        <div className='post'>
        {randomPost && (
          <>
            <h1>{randomPost.title}</h1>
            {randomPost.body}
          </>
        )}
        </div>
        
        <button className='btn'
          onClick={() => {
            const randomPostId = Math.round(Math.random() * posts.length)
            setRandomPost(posts[randomPostId])
          }}
        >
          Next
        </button>
    </div>
  );
}
