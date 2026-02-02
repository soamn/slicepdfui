import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mascot from "../Mascot";

gsap.registerPlugin(ScrollTrigger);

const MainScene = () => {
  return (
    <group>
      <Mascot rotation={[0, Math.PI, 0]} />
    </group>
  );
};

export default MainScene;
