import { type LoaderFunction, redirect } from "@remix-run/cloudflare";

export const loader: LoaderFunction = () => redirect("/duality/loot")