import { NextResponse } from "next/server";
import routes from "./routes";

const urls = routes.map((p) => p.href);
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (!urls.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/home";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
