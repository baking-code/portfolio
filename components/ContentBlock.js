import styled from "@emotion/styled";
import xw, { cx } from "xwind";

const Article = styled.article(xw`
  max-w-3xl
  text-lg md:text-2xl
  text-gray-800 tracking-wide leading-relaxed
`);

const Divider = styled.hr(() => ({
  ...xw`
text-emerald-500 w-4 bg-emerald-500 h-0.5
`,
  marginLeft: "calc(50% - 0.5rem)" // w-4 === 1rem
}));

export default ({ css, content = [] }) => {
  return (
    <Article css={css}>
      {content.map((text, i) => (
        <section
          key={i}
          css={xw`
              m-8
            `}
        >
          <p>{text}</p>
        </section>
      ))}
    </Article>
  );
};
