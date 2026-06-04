import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BG_MAIN } from "./ui";

export function RootLayout() {
  return (
    <div style={{ background: BG_MAIN, minHeight: "100vh", width: "100%" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
