import React, { useLayoutEffect, useState } from "react";
import xw from "xwind";
import withHeader from "../../components/withHeader";
import ListSection from "../../components/ListSection";
import data from "../../public/data";

const renderTimeline = index => (
  <aside
    css={{
      ...xw`
        fixed top-20 right-0
        ml-auto
        w-8
        hidden md:block
      `,
      height: "calc(100vh - 90px)"
    }}
  >
    <div
      css={xw`
            w-4 h-full flex flex-col
          `}
    >
      {data.experience.map((exp, i) => (
        <div
          key={`timeline-${i}`}
          css={xw`bg-transparent flex-grow relative bg-gray-100`}
        >
          <span
            css={{
              ...xw`absolute top-0 right-full w-16`,
              ...(index === i ? xw`text-gray-500` : xw`text-gray-100`),
              transition: "color 0.1s ease"
            }}
          >
            {exp.date}
          </span>
        </div>
      ))}
      <div
        key={`timeline-fill`}
        css={{
          ...xw`bg-transparent flex-grow absolute`,
          ...xw`bg-emerald-500 w-4`,
          height: `${100 / data.experience.length}%`,
          transition: "all 0.1s ease",
          transform: `translateY(${index * 100}%)`
        }}
      ></div>
    </div>
  </aside>
);

const Tech = ({ list = [] }) => (
  <ul
    css={xw`px-8 py-2 mt-4 rounded border-emerald-500 border-4 border-opacity-50 flex`}
  >
    {list.map((item, key) => (
      <li key={key} css={xw`mx-2`}>
        {item.text}
      </li>
    ))}
  </ul>
);

const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  useLayoutEffect(() => {
    document.querySelector("body").classList.add("scrollbar__custom");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          const number = entry.target.id.split("-")[1];
          // console.log(number, entry.isVisible);
          if (entry.isIntersecting && entry.intersectionRatio > 0.01) {
            setVisibleIndex(+number);
          }
        });
      },
      { threshold: [0.5, 1], rootMargin: "0px 0px -120px 0px" }
    );
    document.querySelectorAll(".expSection").forEach(e => observer.observe(e));
    return () => {
      document.querySelector("body").classList.remove("scrollbar__custom");
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {renderTimeline(visibleIndex)}
      <div css={xw`container mx-auto relative flex`}>
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
              key={`exp-${i}`}
              id={`exp-${i}`}
              css={{
                ...xw`flex flex-col`,
                height: "calc(100vh - 8rem)",
                scrollSnapAlign: "start"
              }}
              className="expSection"
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
              <Tech list={exp.words} />
              <div css={xw`flex-grow`} />
            </section>
          ))}
        </main>
        <div css={xw`w-0 md:w-20`} />
      </div>
    </>
  );
};

export default withHeader(About);
