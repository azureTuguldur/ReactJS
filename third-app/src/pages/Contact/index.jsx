import React from "react";
import styles from "./style.module.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Contact = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div id="contact" className={styles.Container}>
      Contact
    </div>
  );
};

export default Contact;
