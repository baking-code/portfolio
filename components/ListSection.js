import styled from "@emotion/styled";
import xw, { cx } from "xwind";

const List = styled.div(xw`
  max-w-3xl
  text-lg md:text-xl
  text-gray-800 tracking-wide leading-relaxed
  rounded border-emerald-500 border-4 border-opacity-50
`);

export default ({ className, content = [], role = "", company = "" }) => {
  return (
    <List>
      <ul css={xw`pl-8`}>
        {content.map((text, i) => (
          <li
            key={i}
            css={xw`
              px-8 py-2
              text-lg md:text-2xl
              list-disc list-outside
            `}
          >
            {text}
          </li>
        ))}
      </ul>
    </List>
  );
};
