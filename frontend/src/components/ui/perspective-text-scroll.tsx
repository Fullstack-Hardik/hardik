"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { Amita } from "next/font/google";

const amitaFont = Amita({ weight: ["400", "700"], subsets: ["devanagari", "latin"] });

const Skiper28 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yMotionValue = useTransform(scrollYProgress, [0, 1], [400, -5000]);
  const transform = useMotionTemplate`rotateX(15deg) translateY(${yMotionValue}px) translateZ(10px)`;

  return (
    <>
      <div
        ref={targetRef}
        className="relative z-0 h-[400vh] w-screen bg-[#050505] text-white overflow-hidden"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-white">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>
        <div
          className="sticky top-0 mx-auto flex items-center justify-center bg-transparent py-20"
          style={{
            transformStyle: "preserve-3d",
            perspective: "800px",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
              textShadow: "0px 10px 20px rgba(255, 88, 0, 0.4)",
            }}
            className={`${amitaFont.className} w-full max-w-7xl text-center text-4xl md:text-6xl font-extrabold tracking-wide text-[#ff5800] leading-normal whitespace-pre-wrap`}
          >
            {`कार घूमरी से काली
गार्ड खड़े सरकारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

रे मैं घरक्यां के कल्ला
छोरी तू भी सै कुँवारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

कार घूमरी से काली
गार्ड खड़े सरकारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

मीठी मीठी बात करे
माड़े तू हालत करे
दिल मने मांगा छोरी
चांद कैन्या हाथ करे

चांद ने भी ला दूंगा, काम बता और तू
बोलूं जज़्बात छोरी, मार थोड़ा गौर तू
दुनिया तै दूर तने राखेगा लुको के छोरा
मेरे गैल रहवेगी रे पूरी सिक्योर तू

तेरे मन में के आरी
क्यांते भा छोरी खड़ी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

कोई करता न चु गइल राखे से बन्दूक छोरा
में भी सु मलूक छोरी लागे तू भी प्यारी

कार घूमरी से काली
गार्ड खड़े सरकारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

कार घूमरी से काली
गार्ड खड़े सरकारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

खर्चा मैं कर दूंगा, डरता ना घाटे तै
यारां की गाड़ी रे चालै फराटे तै
सुथरी सै सहेली ह
ऊँची सै हवेली ह
यादव का छोरा यो डटता ना दांतें तै

छोरे नै छोरी तू देखे क्यों आड़ी है
सल्लू के बरगी रे छोरे की बाड़ी है
बैठे सै शूटर रे, बाजे सै हूटर
200 पे भागे वो यारां की गाड़ी है

रे पड़ग्या तेरे प्यार में
कोई कमी ना पावे यार में
रुतबा छोरे का देख तू
गाड़ी चालै कतार में

तू आवे धौली कार में
तेरा वेट करूं मैं थार में
ग्या असलै मसले भूल
देख तेरे अंख्यां के हथियार नै

तारे ना प्राडे छोरी वार करे तीर का
नशा तने करया 6 फुट के शरीर का
तार के नै शीशा तने आंख जो मिलाई छोरी
मार्या री मार्या री मार्या री मार्या छोरा हीर का

बात सुन ले तू सारी
तेरी मिट दूं बिमारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

बैठा आंख यो चढ़ाके
माल घूमर्या सै खाके
तने ले जगा भगा के
विक्रम सै शिकारी

कार घूमरी से काली
गार्ड खड़े सरकारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी

कार घूमरी से काली
गार्ड खड़े सरकारी
राव साहब का सै छोरा
छोरी जोड़ ले नै यारी`}
            <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-[#050505]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export { Skiper28 };
