import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import Date from './Date';

const blogapi = `https://nestjs-blog-api-alen456.vercel.app/`;

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`${blogapi}blogs/${id}`)
       .then((response) => response.json())
       .then(async (data) => {
        const processedContent = await remark().use(remarkHtml).process(data.Content);
        data.Content = processedContent.toString();
        setPost(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, [id]);
  return (
    <div>
      <h1 className="headingXl">{post.Title}</h1>
      <small className="lightText">
        <Date dateString={post.BlogDate} />
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.Content }} />
      <div className="backToHome">
        <Link to={`/`}>← Back to home</Link>
      </div>
    </div>
  );
}

export default Post;
