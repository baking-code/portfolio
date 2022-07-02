import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import xw, { cx } from "xwind";

import routes from "./routes";

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
      </>
    );
  };

export default withHeader;
