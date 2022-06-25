import xw from "xwind";
import withHeader from "../../components/withHeader";
import useScrollArrows from "../../components/useScrollArrows";
import data from "../../public/data";

const About = ({ cssProp }) => {
  const [Down, Up] = useScrollArrows();
  return (
    <>
      <div css={{ ...xw`relative`, ...cssProp }}>
        <Up />
        <main css={xw`relative`}>
          <section
            css={xw`grid grid-cols-1 justify-center items-center place-items-center
            space-y-20
            max-w-screen-lg
            mx-auto
            md:px-16
          `}
          >
            <p
              css={xw`text-lg md:text-2xl text-gray-800 tracking-wide col-span-2 px-8 md:px-16 italic`}
            >
              {data.about[0].description}
            </p>
            {data.about[1].description.map((text, key) => (
              <p
                key={key}
                css={xw`text-lg md:text-2xl text-gray-800 tracking-wide col-span-2 px-8 md:px-16`}
              >
                {text}
              </p>
            ))}
          </section>
        </main>
        <Down />
      </div>
    </>
  );
};

export default withHeader(About);
