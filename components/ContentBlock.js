import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import xw, { cx } from "xwind";
import data from "../static/data";

const Content = styled.section(xw`
  p-8
`);

const Article = styled.article(xw`
  max-w-3xl
  flex-col items-start
  text-2xl text-gray-800 tracking-wide leading-relaxed
`);

const Divider = styled.hr(() => ({
  ...xw`
text-emerald-500 w-4 bg-emerald-500 h-0.5
`,
  marginLeft: "calc(50% - 0.5rem)" // w-4 === 1rem
}));

export default ({ className, content = [] }) => {
  return (
    <Article>
      {content.map((text, i) => (
        <>
          <Content>
            <p>{text}</p>
          </Content>
          {i !== content.length - 1 && <Divider />}
        </>
      ))}
    </Article>
  );
};
