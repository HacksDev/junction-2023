import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import { CalendarProvider } from "./dashboard/calendar/edit/CalendarProvider";

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // @ts-ignore
  return !isClient ? (
    <div></div>
  ) : (
    <>
      <CalendarProvider>
        <style jsx global>{`
          html {
            font-family: ${rubik.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </CalendarProvider>
      <ToastContainer />
    </>
  );
}
