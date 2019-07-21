import './BlogSection.scss';

import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import blogs from '../../../../data/blogs';
import Button from '../../../../components/Button/Button';

function BlogSection() {
  const [visibleBlogs, updateVisibleBlogs] = useState(blogs.slice(0, 5))

  return (
    <div className="blog-section section-wrapper">
      <ScrollAnimation animateIn="slideInLeft">
        <img className="bg-image" src={require('../../../../assets/contrast.svg')} alt="Sun" />
      </ScrollAnimation>


      <div id="blog" className="section">

        <ScrollAnimation animateIn="bounceIn">
          <h2 className="chat-box chat-box-arrow-right">Prove me the knowlegde!</h2>
        </ScrollAnimation>

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
      </div>
    </div>
  )
}


export default BlogSection;