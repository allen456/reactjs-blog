import './Blog.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Date from './Date';

const blogapi = `https://nestjs-blog-api-alen456.vercel.app/`;

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${blogapi}blogs`)
       .then((response) => response.json())
       .then((data) => {
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);
  return (
    <div>
      <h2 className="headingLg">ReactJS Blog</h2>
      <ul className="list">
          {posts.map(({ _id, BlogDate, Title }) => (
            <li className="listItem" key={_id}>
              <Link to={`/post/${_id}`}>{Title}</Link>
              <br />
              <small className="lightText">
                <Date dateString={BlogDate} />
              </small>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Blog;
