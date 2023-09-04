/* eslint-disable react/no-unescaped-entities */
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7l mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-red-600" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} pb-5 pt-5`}>
            I'm <span className="text-red-900">Yeabtsega</span>{" "}
          </h1>
          <p className={`${styles.heroSubText}`}>
            simple but attractive <br /> web developer
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  );
};

export default Hero;
