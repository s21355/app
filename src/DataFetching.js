import { useState, useEffect } from 'react';
import "./style.css";
import Post from './records.json';

export default function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [randomPost, setRandomPost] = useState(null)

    useEffect(() => {    
        fetch('records.json')
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
        ))} */}
        </>
    </div>
    )
}