import React from 'react';

type Params = {
  blog: string[];
};

type Props = {
  params: Params;
};

export default function Page(props: Props) {
  const { params } = props;

  return (
    <div>
      Bạn đang xem blog với đường dẫn: {params.blog.map((item, index) => (
        <span key={index}>
          {item}
          {index < params.blog.length - 1 && '/'}
        </span>
      ))}
    </div>
  );
}
