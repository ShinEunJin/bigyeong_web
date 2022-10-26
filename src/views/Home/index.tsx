import { useEffect, useRef, useState } from "react";
import useScroll from "@/hooks/useScroll";

const Home = () => {
  const scroll = useScroll(200);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      const count = sectionRef.current.childElementCount;
      const { height } = sectionRef.current.getBoundingClientRect();
      for (let i = 0; i < count; i++) {
        if (scroll <= height / count / 2 + (height / count) * i) {
          setActiveSection(i);
          break;
        }
      }
    }
  }, [scroll]);

  return (
    <div className="home">
      <div ref={sectionRef}></div>
    </div>
  );
};

export default Home;
