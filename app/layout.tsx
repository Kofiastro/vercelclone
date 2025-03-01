import { ThemeProvider } from './components/theme-provider';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange >
        {children}
         </ThemeProvider>
      </body>
    </html>
  );
  
}
<script
  dangerouslySetInnerHTML={{
    __html: `
      if (!("theme" in localStorage)) {
        document.documentElement.classList.add('dark');
      }
    `,
  }}
/>