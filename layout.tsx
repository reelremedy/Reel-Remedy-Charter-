
export const metadata = {
  title: "Reel Remedy Charter LLC",
  description: "Sunset Dolphin Cruises in Pensacola, FL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
