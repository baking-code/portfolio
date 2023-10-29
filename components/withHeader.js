import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useRouter } from "next/router";
import Link from "next/link";
import xw, { cx } from "xwind";

import routes from "./routes";
import PDFDocument from "./pdf";

const HeaderBar = styled.header(xw`
  sticky
  top-0
  w-full
  z-10
  h-16
`);

const Nav = styled.nav(xw`
  flex justify-between items-center
  bg-primary-600
  w-full
  relative
  h-16
  px-4 md:px-6
`);

const linkStyle = xw`
  leading-5
  text-sm md:text-lg
  font-medium
  px-4 md:px-8
  py-5
  cursor-pointer
  relative
  block
  `;

const StyledLink = styled.a((props) => ({
  ...linkStyle,
  ...(props.currentRoute
    ? xw`text-gray-100 pointer-events-none`
    : xw`text-gray-800`),
}));

const DownloadButton = styled.button({
  ...xw`
    rounded border-primary-800 border-4 border-opacity-50
    sticky
    bottom-5
    left-5
    text-primary-900
    p-2
`,
  backgroundImage: `linear-gradient(to top, white 50%, #000 50%),
linear-gradient(to top, rgba(12, 74, 110, 0.2) 50%, transparent 50%)`,

  backgroundClip: "text,padding-box",
  backgroundSize: "100% 200%",
  backgroundPosition: "top",
  transition: "background-position 200ms ease-in-out",

  "&:hover": {
    backgroundPosition: "bottom",
  },
});

function NavLink({ href, children, currentRoute }) {
  return (
    <StyledLink href={href} currentRoute={currentRoute}>
      {children}
      <Revealed aria-hidden={true}>{children}</Revealed>
    </StyledLink>
  );
}
const Revealed = styled.span({
  ...linkStyle,
  ...xw`
    text-white
  `,
  position: "absolute",
  top: "0",
  left: "0",
  filter: "drop-shadow(0px 0px 4px white)",
  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  transition: "clip-path 800ms",
  [`${StyledLink}:hover &`]: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: "clip-path 500ms",
  },
});

const withHeader =
  (Component) =>
  ({ className, children, ...props }) => {
    const { route } = useRouter();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);
    return (
      <>
        <HeaderBar {...props} className={cx("group", className)}>
          <Nav>
            <Link href="/home">
              <a css={xw`block md:hidden leading-5 text-lg cursor-pointer`}>
                BK.
              </a>
            </Link>
            <Link href="/home">
              <a css={xw`hidden md:block leading-5 text-lg cursor-pointer`}>
                Benjamin King
              </a>
            </Link>
            <div css={xw`h-16 flex items-center`}>
              {routes.map(({ href, label }) => (
                <Link href={href} key={href} passHref>
                  <NavLink currentRoute={href === route}>{label}</NavLink>
                </Link>
              ))}
            </div>
          </Nav>
        </HeaderBar>
        <Component {...props} />
        {isClient && (
          <DownloadButton>
            <PDFDownloadLink
              document={<PDFDocument />}
              fileName="benjaminking.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading..." : "Download"
              }
            </PDFDownloadLink>
          </DownloadButton>
        )}
      </>
    );
  };

export default withHeader;
