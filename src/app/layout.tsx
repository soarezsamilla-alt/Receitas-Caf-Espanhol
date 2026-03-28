
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nutri Café - 350 Cafés da Manhã de Nutri',
  description: 'Receitas rápidas, baratas e gostosas para emagrecer sem sofrer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
