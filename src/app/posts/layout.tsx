import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "post lists",
  description: "This is blog page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
