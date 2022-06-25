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
        <main css={xw`relative -top-16`}>
          <section
            css={xw`flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover`}
            className="homeImage"
          >
            <div
              css={xw`p-5 text-2xl text-white bg-primary-300 bg-opacity-80 rounded-xl`}
            >
              Jack of all trades, master of <em>some.</em>
            </div>
          </section>
          <section
            css={xw`grid grid-cols-1 justify-center items-center place-items-center
            space-y-20
            max-w-screen-lg
            mx-auto
            md:px-16
          `}
          >
            <p
              css={xw`text-2xl md:text-4xl text-gray-800 tracking-wide col-span-2 px-16`}
            >
              {data.home[0].description}
            </p>
            {data.home[1].description.map((text, key) => (
              <p
                key={key}
                css={xw`text-lg md:text-2xl text-gray-800 tracking-wide col-span-2 px-16`}
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
