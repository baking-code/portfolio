import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import xw, { cx } from "xwind";

const HeaderBar = styled.header(xw`
  sticky
  top-0
  w-full
  z-10
  h-16
`);

const Nav = styled.nav(xw`
  flex justify-between items-center
  bg-emerald-500
  w-full
  relative
  h-16
  px-4 md:px-6
`);

const StyledLink = styled.a(props => ({
  ...xw`
  leading-5
  text-lg
font-medium
px-8
hover:text-white
cursor-pointer
`,
  ...(props.currentRoute ? xw`text-gray-100` : xw`text-gray-800`)
}));

const pages = [
  { href: "/about", label: "About me" },
  { href: "/interests", label: "Interests" },
  { href: "/experience", label: "Experience" }
];

const withHeader = Component => ({ className, children, ...props }) => {
  const { route } = useRouter();
  return (
    <>
      <HeaderBar {...props} className={cx("group", className)}>
        <Nav>
          <Link href="/">
            <a css={xw`block md:hidden leading-5 text-lg`}>BK.</a>
          </Link>
          <Link href="/">
            <a css={xw`hidden md:block leading-5 text-lg`}>Benjamin King</a>
          </Link>
          <div>
            {pages.map(({ href, label }) => (
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
