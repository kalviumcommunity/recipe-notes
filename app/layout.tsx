// TODO Task 3: replace the plain anchor with a Link from next/link pointing to /about.
// TODO Task 5: load Inter from next/font/google and apply its className to the html element.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
