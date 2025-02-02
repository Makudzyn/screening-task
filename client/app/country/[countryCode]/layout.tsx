import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Country Info Page',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
