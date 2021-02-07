import xw from "xwind";
import Image from "next/image";
import withHeader from "../../components/withHeader";
import ContentBlock from "../../components/ContentBlock";
import useScrollArrows from "../../components/useScrollArrows";
import data from "../../public/data";

const About = () => {
  const [Down, Up] = useScrollArrows();
  return (
    <>
      <Up />
      <div css={xw`container mx-auto relative`}>
        <main
          css={xw`
      grid grid-cols-1 justify-center items-center place-items-center
      space-y-20
      max-w-screen-lg
      mx-auto
      pt-12
      `}
        >
          <p css={xw`text-4xl text-gray-800 tracking-wide`}>
            {data.about[0].description}
          </p>
          <Image
            css={{
              ...xw`aspect-h-16 aspect-w-9 filter filter-grayscale-100 hover:filter-grayscale-0`,
              transition: "filter 0.1s ease-in"
            }}
            alt="Picture of me!"
            src="/profile.jpg"
            width={300}
            height={450}
            layout="fixed"
          />
          <ContentBlock content={data.about[1].description} />
        </main>
      </div>
      <Down />
    </>
  );
};

export default withHeader(About);
