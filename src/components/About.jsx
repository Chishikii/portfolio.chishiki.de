import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionSubText}>Overview</h2>
      </motion>
    </>
  );
};

export default About;
