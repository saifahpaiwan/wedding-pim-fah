import type { Metadata } from "next";
import "./globals.css";  

export const metadata: Metadata = {
  title: 'Wedding Invitation | Sasithron & Saifah',
  description: 'invite you to join us in celebrating our wedding.',
  openGraph: {
    type: 'website',
    url: 'https://wedding-pim-fah.vercel.app/',
    title: 'Wedding Invitation | Sasithron & Saifah',
    description: 'invite you to join us in celebrating our wedding.',
    images: [
      {
        url: '/images/Screenshot 2568-04-26 at 21.34.53.png',
        width: 1200,
        height: 630,
        alt: 'Wedding Invitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Invitation | Sasithron & Saifah',
    description: 'invite you to join us in celebrating our wedding.',
    images: ['/images/Screenshot 2568-04-26 at 21.34.53.png'],
  },
};

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
