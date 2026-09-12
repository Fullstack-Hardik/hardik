"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./loader.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const PageLoader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false); // Default to false so no loader on first visit
  const isFirstMount = React.useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed inset-0 z-[999999] flex items-center justify-center ${styles.loaderWrapper}`}
        >
          <div className={styles.boxOfStar1}>
            <div className={`${styles.star} ${styles.starPosition1}`} />
            <div className={`${styles.star} ${styles.starPosition2}`} />
            <div className={`${styles.star} ${styles.starPosition3}`} />
            <div className={`${styles.star} ${styles.starPosition4}`} />
            <div className={`${styles.star} ${styles.starPosition5}`} />
            <div className={`${styles.star} ${styles.starPosition6}`} />
            <div className={`${styles.star} ${styles.starPosition7}`} />
          </div>
          <div className={styles.boxOfStar2}>
            <div className={`${styles.star} ${styles.starPosition1}`} />
            <div className={`${styles.star} ${styles.starPosition2}`} />
            <div className={`${styles.star} ${styles.starPosition3}`} />
            <div className={`${styles.star} ${styles.starPosition4}`} />
            <div className={`${styles.star} ${styles.starPosition5}`} />
            <div className={`${styles.star} ${styles.starPosition6}`} />
            <div className={`${styles.star} ${styles.starPosition7}`} />
          </div>
          <div className={styles.boxOfStar3}>
            <div className={`${styles.star} ${styles.starPosition1}`} />
            <div className={`${styles.star} ${styles.starPosition2}`} />
            <div className={`${styles.star} ${styles.starPosition3}`} />
            <div className={`${styles.star} ${styles.starPosition4}`} />
            <div className={`${styles.star} ${styles.starPosition5}`} />
            <div className={`${styles.star} ${styles.starPosition6}`} />
            <div className={`${styles.star} ${styles.starPosition7}`} />
          </div>
          <div className={styles.boxOfStar4}>
            <div className={`${styles.star} ${styles.starPosition1}`} />
            <div className={`${styles.star} ${styles.starPosition2}`} />
            <div className={`${styles.star} ${styles.starPosition3}`} />
            <div className={`${styles.star} ${styles.starPosition4}`} />
            <div className={`${styles.star} ${styles.starPosition5}`} />
            <div className={`${styles.star} ${styles.starPosition6}`} />
            <div className={`${styles.star} ${styles.starPosition7}`} />
          </div>
          <div className={styles.astronaut}>
            <div className={styles.head} />
            <div className={`${styles.arm} ${styles.armLeft}`} />
            <div className={`${styles.arm} ${styles.armRight}`} />
            <div className={styles.body}>
              <div className={styles.panel} />
            </div>
            <div className={`${styles.leg} ${styles.legLeft}`} />
            <div className={`${styles.leg} ${styles.legRight}`} />
            <div className={styles.schoolbag} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
