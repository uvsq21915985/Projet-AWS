export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="fr">
        <body>
          {children}
        </body>
      </html>
    );}