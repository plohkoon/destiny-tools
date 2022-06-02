import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  },
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Destiny Tools",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="min-h-screen min-h-[calc(100vh-12rem)]">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
