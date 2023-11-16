import React, { useEffect, useState, useRef } from "react";
import xw from "xwind";
import withHeader from "../../components/withHeader";
import ListSection from "../../components/ListSection";
import data from "../../public/data";

const renderTimeline = (index, onClick) => (
  <aside
    css={{
      ...xw`
        fixed top-20 right-0
        ml-auto
        w-8
        hidden lg:block
      `,
      height: "calc(100vh - 100px)",
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
          css={{
            ...xw`bg-transparent flex-grow relative bg-gray-100 cursor-pointer hover:bg-gray-200`,
            ...(index === i
              ? xw`text-gray-500`
              : xw`text-gray-200 hover:text-gray-300`),
          }}
          onClick={() => onClick(i)}
        >
          <a
            css={{
              ...xw`absolute top-0 right-full w-20`,
              transition: "color 0.1s ease",
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={() => onClick(i)}
          >
            {exp.date}
          </a>
        </div>
      ))}
      <div
        key={`timeline-fill`}
        css={{
          ...xw`bg-transparent flex-grow absolute`,
          ...xw`bg-primary-600 w-4`,
          height: `${100 / data.experience.length}%`,
          transition: "all 0.3s ease",
          transform: `translateY(${index * 100}%)`,
          cursor: "pointer",
        }}
      ></div>
    </div>
  </aside>
);

const Tech = ({ list = [] }) => (
  <ul
    css={xw`max-w-3xl px-8 py-2 mt-4 rounded border-primary-600 border-4 border-opacity-50 flex flex-wrap`}
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
  useEffect(() => {
    document.querySelector("body").classList.add("scrollbar__custom");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const number = entry.target.id.split("-")[1];
          if (entry.isIntersecting && entry.intersectionRatio > 0.01) {
            setVisibleIndex(+number);
          }
        });
      },
      { threshold: [0.5, 1], rootMargin: "0px 0px -120px 0px" }
    );
    document
      .querySelectorAll(".expSection")
      .forEach((e) => observer.observe(e));
    return () => {
      document.querySelector("body").classList.remove("scrollbar__custom");
      observer.disconnect();
    };
  }, []);

  let refs = [];
  data.experience.forEach((data, i) => {
    refs[i] = useRef();
  });

  const onClick = (index) => {
    const ref = refs[index];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behaviour: "smooth" });
    }
  };
  return (
    <>
      <div css={xw`container mx-auto relative flex`}>
        <main
          css={{
            ...xw`
            grid grid-cols-1 justify-center items-center place-items-center
            space-y-20
            max-w-screen-sm
            md:max-w-screen-lg
            mx-auto
            pt-4
            md:pt-12
            pb-8
          `,
          }}
        >
          {data.experience.map((exp, i) => (
            <section
              key={`exp-${i}`}
              id={`exp-${i}`}
              css={{
                ...xw`flex flex-col w-full`,
                minHeight: "calc(100vh)",
                scrollSnapAlign: "start",
              }}
              className="expSection"
              ref={refs[i]}
            >
              <header
                css={xw`
                text-lg md:text-xl font-bold
                px-1 md:px-8 py-4
                flex justify-between items-baseline
              `}
              >
                <span>
                  {exp.company} {exp.role && "\u2013"} {exp.role}
                </span>
                <span css={xw`text-sm italic lg:hidden`}>{exp.date}</span>
              </header>
              <ListSection content={exp.description} />
              <Tech list={exp.words} />
              <div css={xw`flex-grow`} />
            </section>
          ))}
        </main>
      </div>
      {renderTimeline(visibleIndex, onClick)}
    </>
  );
};

export default withHeader(About);
