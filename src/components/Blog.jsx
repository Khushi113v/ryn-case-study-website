import React from 'react';
import Card from './Card';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-header">
        <h2>✷ Blog</h2>
        <a href="#view-all" className="view-all">View all</a>
      </div>
      <div className="blog-grid">
        <Card
          imageSrc="/images/blog1.jpg"
          imageAlt="Blog 1"
          date="Nov 18, 2023"
          title="How UX works with web"
          labels={['UI', 'UX']}
          buttonText="Read"
          isBlog={true}
        />
        <Card
          imageSrc="/images/blog2.jpg"
          imageAlt="Blog 2"
          date="Aug 18, 2023"
          title="Case Study - Analysis Application"
          labels={['Figma', 'Design']}
          buttonText="Read"
          isBlog={true}
        />
        <Card
          imageSrc="/images/blog3.jpg"
          imageAlt="Blog 3"
          date="Feb 18, 2023"
          title="3 ways to develop your skill"
          labels={['Prototyping', 'Branding']}
          buttonText="Read"
          isBlog={true}
        />
      </div>
    </section>
  );
};

export default Blog;