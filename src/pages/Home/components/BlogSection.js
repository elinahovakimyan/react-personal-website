import React, { useState } from 'react';
import { Button } from 'antd';

import blogs from '../../../data/blogs';

function BlogSection() {
  const [visibleBlogs, updateVisibleBlogs] = useState(blogs.slice(0, 5))

  return (
    <>
      <h2 className="section-title">Thoughts & knowledge shared</h2>
      <div>
        {visibleBlogs.map(blog => (
          <div key={blog.title} className="blog-title-wrapper">
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-title"
            >
              <span role="img" aria-label="show-emoji">👉 </span>              
              {blog.title}
            </a>
          </div>
        ))}

        {visibleBlogs.length !== blogs.length
          ? <Button onClick={() => updateVisibleBlogs(blogs)}>See more</Button>
          : <Button onClick={() => updateVisibleBlogs(blogs.slice(0, 5))}>See less</Button>
        }
      </div>

    </>
  )
}



export default BlogSection;