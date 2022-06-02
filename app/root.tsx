import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { type ReactNode } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "./tailwind.css";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid"

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

const Layout = ({ children }: { children: ReactNode; }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="min-h-screen min-h-[calc(100vh-12rem)]">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

const Err404 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col py-8">
      <QuestionMarkCircleIcon className="h-32" />
      <h1 className="text-4xl">Not Found</h1>
    </div>
  )
}

export const ErrorBoundary = () => {
  return (
    <Layout>
      <Err404 />
    </Layout>
  )
}

export const CatchBoundary = () => {
  return (
    <Layout>
      <Err404 />
    </Layout>
  )
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
