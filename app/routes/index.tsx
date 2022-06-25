import { redirect, type LoaderFunction } from "@remix-run/cloudflare";

export const loader: LoaderFunction = () => redirect("/duality/maps")