import "@/app/ui/global.css";
import { openSans } from "@/app/ui/fonts";
import { Metadata } from "next";
import NavBar from "@/app/ui/nav-bar";

export const metadata: Metadata = {
  title: {
    template: "Dashboard",
    default: "Dashboard",
  },
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <div className="flex flex-col h-screen md:overflow-hidden max-w-screen-2xl m-auto">
          <div className="w-full">
            <NavBar />
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
