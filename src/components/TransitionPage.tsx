"use client";

import {AnimatePresence, motion} from "framer-motion";
import {ReactNode} from "react";

type Props = Readonly<{children: ReactNode}>;

const TransitionPage = ({children}: Props) => {
  return (
    <AnimatePresence>
      <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, y: 20}}>
        {children}
      </motion.section>
    </AnimatePresence>
  );
};

export default TransitionPage;
