import React from 'react'; 
import BlogItem from './BlogItem';

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
}

interface Props {
  blogs: Blog[];
}

const BlogList = ({ blogs }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;