import { useState } from 'react';
import { useRouter } from 'next/router';

export default function page() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      router.push(`/posts?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div>
      <h1>Tìm kiếm bài viết</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nhập từ khóa..."
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
};