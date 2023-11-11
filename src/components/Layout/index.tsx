import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PropsWithChildren } from "react";

const navigationElements: Array<{
  route: string;
  icon: React.ReactNode;
}> = [
  {
    route: "/",
    icon: (
      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 16.25V18.5M13 14V18.5M16 11.75V18.5M19 9.5V18.5M8.5 22.25H20.5C21.0967 22.25 21.669 22.0129 22.091 21.591C22.5129 21.169 22.75 20.5967 22.75 20V8C22.75 7.40326 22.5129 6.83097 22.091 6.40901C21.669 5.98705 21.0967 5.75 20.5 5.75H8.5C7.90326 5.75 7.33097 5.98705 6.90901 6.40901C6.48705 6.83097 6.25 7.40326 6.25 8V20C6.25 20.5967 6.48705 21.169 6.90901 21.591C7.33097 22.0129 7.90326 22.25 8.5 22.25Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    route: "/chat",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    route: "/alerts",
    icon: (
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.83301 7.99987V11.7499M9.83301 1.71387C7.56875 3.8641 4.55327 5.04344 1.43101 4.99987C1.03374 6.21016 0.831878 7.47604 0.833013 8.74987C0.833013 14.3419 4.65701 19.0399 9.83301 20.3719C15.009 19.0399 18.833 14.3419 18.833 8.74987C18.833 7.43987 18.623 6.17987 18.235 4.99987H18.083C14.887 4.99987 11.983 3.75087 9.83301 1.71387ZM9.83301 14.7499H9.84101V14.7579H9.83301V14.7499Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    route: "/profile",
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.25 6C16.25 6.99456 15.8549 7.94839 15.1516 8.65165C14.4484 9.35491 13.4945 9.75 12.5 9.75C11.5054 9.75 10.5516 9.35491 9.84833 8.65165C9.14506 7.94839 8.74998 6.99456 8.74998 6C8.74998 5.00544 9.14506 4.05161 9.84833 3.34835C10.5516 2.64509 11.5054 2.25 12.5 2.25C13.4945 2.25 14.4484 2.64509 15.1516 3.34835C15.8549 4.05161 16.25 5.00544 16.25 6ZM5.00098 20.118C5.03311 18.1504 5.83731 16.2742 7.24015 14.894C8.64299 13.5139 10.5321 12.7405 12.5 12.7405C14.4679 12.7405 16.357 13.5139 17.7598 14.894C19.1626 16.2742 19.9668 18.1504 19.999 20.118C17.6464 21.1968 15.0881 21.7535 12.5 21.75C9.82398 21.75 7.28398 21.166 5.00098 20.118Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Layout(props: PropsWithChildren) {
  const { pathname } = useRouter();
  return (
    <React.Fragment>
      <header></header>
      {props.children}
      <nav className="btm-nav">
        {navigationElements.map((navEl) => (
          <Link
            className={classNames({
              active: pathname === "/" ? pathname === navEl.route : pathname.includes(navEl.route),
            })}
            key={navEl.route}
            href={navEl.route}
          >
            {navEl.icon}
          </Link>
        ))}
      </nav>
    </React.Fragment>
  );
}
