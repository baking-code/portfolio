import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import xw, { cx } from "xwind";

import routes from "../pages/routes";

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

const StyledLink = styled.a((props) => ({
  ...xw`
  leading-5
  text-sm md:text-lg
  font-medium
  px-4 md:px-8
  py-5
  hover:text-white
  cursor-pointer
`,
  ...(props.currentRoute ? xw`text-gray-100` : xw`text-gray-800`),
}));

function NavLink({ href, children }) {
  return (
    <NavLinkAnchor href={href}>
      {children}
      <Revealed aria-hidden={true}>{children}</Revealed>
    </NavLinkAnchor>
  );
}
const NavLinkAnchor = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.25rem;
`;
const Revealed = styled.span`
  color: hsl(333deg 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(0px 0px 4px white);
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;
  ${NavLinkAnchor}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`;

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
                  <StyledLink currentRoute={href === route}>{label}</StyledLink>
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
