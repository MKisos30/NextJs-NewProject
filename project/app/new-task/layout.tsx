import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>I am a new task</h1>
      {children}
    </>
  );
}