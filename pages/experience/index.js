import xw from "xwind";
import Image from "next/image";
import withHeader from "../../components/withHeader";
import ListSection from "../../components/ListSection";
import data from "../../public/data";

const renderTimeline = () => (
  <aside
    css={{
      ...xw`
        fixed top-20 right-0
        ml-auto
        w-20
      `,
      height: "calc(100vh - 90px)"
    }}
  >
    <div
      css={xw`
            w-4 h-full flex flex-col
          `}
    >
      {data.experience.map((unused, i) => (
        <div key={`timeline=${i}`} css={xw`bg-emerald-500 flex-grow`} />
      ))}
    </div>
  </aside>
);

const About = () => {
  return (
    <>
      {renderTimeline()}
      <div css={xw`container mx-auto relative`}>
        <main
          css={{
            ...xw`
            grid grid-cols-1 justify-center items-center place-items-center
            space-y-20
            max-w-screen-lg
            mx-auto
            pt-12
            pb-8
          `
          }}
        >
          {data.experience.map((exp, i) => (
            <section
              key={`exp${i}`}
              css={{
                ...xw`flex flex-col`,
                height: "calc(100vh - 8rem)",
                scrollSnapAlign: "start"
              }}
            >
              <header
                css={xw`
                text-lg md:text-xl font-bold
                px-8 py-4
              `}
              >
                {exp.company} &#8212; {exp.role}
              </header>
              <ListSection content={exp.description} />
              <div css={xw`flex-grow`} />
            </section>
          ))}
        </main>
      </div>
    </>
  );
};

export default withHeader(About);
