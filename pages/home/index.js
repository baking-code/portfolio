import xw from "xwind";
import Image from "next/image";
import profilePic from "../../public/image3.jpg";
import withHeader from "../../components/withHeader";
import useScrollArrows from "../../components/useScrollArrows";
import data from "../../public/data";

const About = ({ cssProp }) => {
  const [Down, Up] = useScrollArrows();
  return (
    <>
      <div css={{ ...xw`relative z-0`, ...cssProp }}>
        <Up />
        <main css={xw`relative -top-16`}>
          <div
            css={xw`absolute z-10 h-screen w-screen
                flex justify-center items-center
              `}
          >
            <h3
              css={xw`text-2xl text-white p-5 bg-primary-300 bg-opacity-80 rounded-xl text-center`}
            >
              Jack of all trades, master of <em>some.</em>
            </h3>
          </div>
          <div
            className={"clipped"}
            css={xw`w-screen h-screen relative overflow-hidden z-0`}
          >
            <Image
              alt="Mountains"
              src={profilePic}
              layout="responsive"
              objectFit="cover"
              quality={100}
              className="fixed"
              placeholder="blur"
            />
          </div>
          <section
            css={xw`grid grid-cols-1 justify-center items-center place-items-center
            space-y-20
            max-w-screen-lg
            mx-auto
            md:px-16
          `}
          >
            <p
              css={xw`text-2xl md:text-4xl text-gray-800 tracking-wide col-span-2 px-16 pt-16`}
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
