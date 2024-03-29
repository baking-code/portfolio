import React, { useEffect, useState } from "react";
import xw from "xwind";

import Arrow from "./icons/arrow";

function useScrollArrows(root = "body") {
  const [atBottom, setBottom] = useState(false);
  const [atTop, setTop] = useState(false);

  useEffect(() => {
    const onScroll = (evt) => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setBottom(true);
      } else if (window.scrollY < 64) {
        setTop(true);
      } else {
        setTop(false);
        setBottom(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [atBottom, atTop]);

  return [
    () => (
      <Arrow
        css={{
          ...xw`
        sticky bottom-0 right-0
        h-10 w-10 md:h-12 md:w-12
        ml-auto
        fill-current text-gray-300
        z-10
      `,
          animation: "arrowOpacity 3s ease-out infinite",
        }}
        style={{ visibility: atBottom ? "hidden" : "visible" }}
      />
    ),
    () => (
      <Arrow
        css={{
          ...xw`
        sticky top-16 right-0
        h-10 w-10 md:h-12 md:w-12
        ml-auto
        fill-current text-gray-300
        z-10
        `,
          animation: "arrowOpacity 3s ease-out infinite",
        }}
        style={{ visibility: atTop ? "hidden" : "visible" }}
        up
      />
    ),
  ];
}

export default useScrollArrows;
