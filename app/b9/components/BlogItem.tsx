import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
}

interface Props {
  blog: Blog;
}

const BlogItem = ({ blog }: Props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
      <Image 
        src={blog.image} 
        alt={blog.title} 
        width={100} 
        height={100} 
      />
      <h3>{blog.title}</h3>
      <Link href={`/blogs/${blog.slug}`}>
        <button>Xem chi tiết</button>
      </Link>
    </div>
  );
};

export default BlogItem;