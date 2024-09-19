import "./globals.css";
import Mynav from "./components/nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="text-white">
        <>
          <Mynav />
          {children}
        </>
      </body>
    </html>
  );
}
