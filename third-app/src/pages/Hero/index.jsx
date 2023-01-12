import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { Background, Size } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSnowPreset(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div id="home" className={styles.Container}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "snow",
          background: { color: "none" },
          particles: { color: "ff00ff" },
        }}
      />
      <div className={styles.HeroItem}>
        <div>
          <h1>Hello My name is _________</h1>
          <h1>
            I am the{" "}
            <span style={{ color: "white" }} className="Typewriter">
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
                typespeed={1000000}
                deletespeed={100000}
              />
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="twitter" />
            <SocialIcon network="google" />
            <SocialIcon network="instagram" />
            <SocialIcon network="youtube" />
            <SocialIcon network="facebook" />
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <div className={styles.ImgContainer}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
