import initAuth from "@/utils/initAuth";
import type { AppProps } from "next/app";
import "@/styles/reset.css";

initAuth();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
