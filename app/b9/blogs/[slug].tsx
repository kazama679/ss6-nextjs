import { GetStaticPaths, GetStaticProps } from 'next';

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
}

interface Props {
  blog: Blog;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = [
    { slug: 'lap-trinh-co-ban-c' },
    { slug: 'lap-trinh-java-core' },
    { slug: 'lap-trinh-php' },
    { slug: 'lap-trinh-reactjs' },
  ];

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const blogs = [
    { id: 1, title: 'Lập trình cơ bản C', slug: 'lap-trinh-co-ban-c', content: 'Nội dung chi tiết của lập trình C...' },
    { id: 2, title: 'Lập trình Java core', slug: 'lap-trinh-java-core', content: 'Nội dung chi tiết của lập trình Java...' },
    { id: 3, title: 'Lập trình PHP', slug: 'lap-trinh-php', content: 'Nội dung chi tiết của lập trình PHP...' },
    { id: 4, title: 'Lập trình ReactJS', slug: 'lap-trinh-reactjs', content: 'Nội dung chi tiết của lập trình ReactJS...' },
  ];

  const blog = blogs.find((blog) => blog.slug === params?.slug);

  if (!blog) {
    return { notFound: true };
  }

  return { props: { blog } };
};

const BlogDetailPage = ({ blog }: Props) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;