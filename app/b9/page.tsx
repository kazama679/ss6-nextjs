import BlogList from "./components/BlogList";

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
}

const fetchBlogs = async (): Promise<Blog[]> => {
  return [
    { id: 1, title: 'Lập trình cơ bản C', slug: 'lap-trinh-co-ban-c', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrd-mQQPmg1J7CrvGxgpqJuKdnVLDJs4U0Q&s' },
    { id: 2, title: 'Lập trình Java core', slug: 'lap-trinh-java-core', image: 'https://tuyendung.kfcvietnam.com.vn/Data/Sites/1/media/blog/java-la-gi.jpg' },
    { id: 3, title: 'Lập trình PHP', slug: 'lap-trinh-php', image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
    { id: 4, title: 'Lập trình ReactJS', slug: 'lap-trinh-reactjs', image: 'https://akdemy.net/wp-content/uploads/2020/11/reactjs.jpg' },
  ];
};

const HomePage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default HomePage;