import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import xw, { cx } from "xwind";

const HeaderBar = styled.header(xw`
  absolute
  top-0
  w-full
`);

const Title = styled.span(xw`
  text-gray-800
  w-full
  relative
  flex justify-around
  text-lg leading-5 font-bold
  bg-white
  h-12
`);

const Nav = styled.nav(xw`
  flex justify-center items-center
  bg-emerald-500
  w-full
  relative
  h-10
`);

const StyledLink = styled.a(props => ({
  ...xw`
text-sm
leading-5
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
  console.log("ROUTE", route);
  return (
    <>
      <HeaderBar {...props} className={cx("group", className)}>
        <Title>
          <Link href="/">Benjamin King</Link>
        </Title>
        <Nav>
          {pages.map(({ href, label }) => (
            <Link href={href} key={href} passHref>
              <StyledLink currentRoute={href === route}>{label}</StyledLink>
            </Link>
          ))}
        </Nav>
      </HeaderBar>
      <Component {...props} />
    </>
  );
};

export default withHeader;
