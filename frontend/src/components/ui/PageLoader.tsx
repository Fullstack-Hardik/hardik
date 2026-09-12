"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./loader.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const PageLoader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true); // Default to true for initial load
  const isFirstMount = React.useRef(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const hideLoader = () => {
      setIsLoading(false);
    };

    if (isFirstMount.current) {
      isFirstMount.current = false;
      
      if (pathname === '/') {
        // On first mount on home page, wait for the hero video to tell us it's ready
        window.addEventListener('hide-loader', hideLoader);
        // Fallback in case the event never fires
        timer = setTimeout(hideLoader, 8000); 
      } else {
        // If landing on any other page, hide it immediately
        hideLoader();
      }
    } else {
      // On route change, show loader for a fixed time
      setIsLoading(true);
      timer = setTimeout(hideLoader, 1500);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hide-loader', hideLoader);
    };
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
