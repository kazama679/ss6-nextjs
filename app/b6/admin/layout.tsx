import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div>
      <h1>Admin Section</h1>
      <div>{children}</div>
    </div>
  );
}
