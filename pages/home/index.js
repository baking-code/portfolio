import xw from "xwind";
import { css, cx } from "@emotion/css";
import Image from "next/image";
import withHeader from "../../components/withHeader";
import useScrollArrows from "../../components/useScrollArrows";
import data from "../../public/data";

const About = ({ cssProp }) => {
  const [Down, Up] = useScrollArrows();
  return (
    <>
      <div css={{ ...xw`relative`, ...cssProp }}>
        <Up />
        <main
          className={cx(
            css(xw`
              grid grid-cols-1 justify-center items-center place-items-center
              space-y-20
              max-w-screen-lg
              mx-auto
              md:px-16
              container
              `),
            css`
              > * {
                grid-column: 1;
              }
            `
          )}
        >
          <p
            css={xw`text-2xl md:text-4xl text-gray-800 tracking-wide col-span-2 px-16`}
          >
            {data.about[0].description}
          </p>
          <div
            className={cx(
              css`
                > div {
                  position: unset !important;
                }
                width: 100%;
              `,
              css(xw`col-span-full w-full -mx-16`)
            )}
          >
            <Image
              css={{
                ...xw`filter filter-grayscale-100 hover:filter-grayscale-0`,
                transition: "filter 0.1s ease-in",
                height: "unset !important",
                position: "relative !important"
              }}
              alt="Picture of me!"
              src="/image3.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {data.about[1].description.map((text, key) => (
            <p
              key={key}
              css={xw`text-lg md:text-2xl text-gray-800 tracking-wide col-span-2 px-16`}
            >
              {text}
            </p>
          ))}
        </main>
        <Down />
      </div>
    </>
  );
};

export default withHeader(About);
