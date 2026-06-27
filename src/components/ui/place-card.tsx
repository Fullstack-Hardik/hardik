"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Info, Sparkles, Calendar, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PlaceCardProps {
  images: string[];
  rating: number;
  title: string;
  dateRange: string;
  hostType: string;
  isTopRated?: boolean;
  description: string;
  pricePerNight: number;
  currency?: string;
  country?: string;
  timezone?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  onInfo?: () => void;
  className?: string;
}

export const PlaceCard = ({
  images,
  rating,
  title,
  dateRange,
  hostType,
  isTopRated = false,
  description,
  pricePerNight,
  actionLabel = 'Register Now',
  actionHref,
  onAction,
  onInfo,
  className,
  country,
  timezone,
  currency = 'AED',
}: PlaceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [countdown, setCountdown] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getTargetDate = () => {
    const firstDatePart = dateRange.split(' - ')[0];
    const parsed = new Date(firstDatePart);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
  };

  useEffect(() => {
    const target = getTargetDate();
    const updateTimer = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setCountdown('🔴 Live now');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`);
    };

    updateTimer();
    const interval = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(interval);
  }, [dateRange]);

  const changeImage = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex: number) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
  };

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={contentVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      }}
      className={cn(
        'group relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-slate-900/60 to-zinc-900/80 backdrop-blur-lg text-card-foreground shadow-lg cursor-pointer transition-all duration-500',
        'before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-br before:from-blue-500/40 before:via-sky-400/20 before:to-blue-500/40 before:opacity-0 before:transition-opacity before:duration-500',
        'hover:before:opacity-100 hover:border-blue-400/30 hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.2)]',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute w-1 h-1 bg-blue-400/60 rounded-full pointer-events-none"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
      <div className="relative group h-80 overflow-hidden rounded-t-3xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute h-full w-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-lg hover:bg-blue-600/90 text-white shadow-lg border border-white/20"
              onClick={(e) => { e.preventDefault(); changeImage(-1); }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-lg hover:bg-blue-600/90 text-white shadow-lg border border-white/20"
              onClick={(e) => { e.preventDefault(); changeImage(1); }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          className="absolute top-5 left-5 z-20"
        >
          <div className="bg-blue-600/90 text-white font-bold shadow-lg backdrop-blur-xl border border-blue-400/20 px-4 py-2 rounded-full text-xs flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            {hostType}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
          className="absolute top-5 right-5 z-20"
        >
          <div className="bg-zinc-900/80 text-white border border-white/10 font-bold backdrop-blur-xl shadow-lg rounded-full flex items-center gap-1.5 px-3 py-2">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {rating.toFixed(1)}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setShowInfo(!showInfo);
            onInfo?.();
          }}
          className="absolute bottom-5 right-5 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-blue-600 backdrop-blur-xl text-white shadow-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300"
        >
          <Info className="h-4 w-4" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
          className="absolute bottom-5 left-5 z-20"
        >
          <div className="bg-zinc-900/80 text-white rounded-full font-mono font-bold text-xs backdrop-blur-xl border border-white/10 px-3 py-2 shadow-lg flex items-center gap-2">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-red-500"
            />
            <span className="tracking-wider">{countdown}</span>
          </div>
        </motion.div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300 shadow-xl backdrop-blur-sm',
                currentIndex === index 
                  ? 'w-8 bg-white shadow-white/50' 
                  : 'w-2.5 bg-white/60 hover:bg-white/80'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div variants={contentVariants} className="p-6 space-y-4 bg-gradient-to-b from-zinc-900/40 to-zinc-950/60 backdrop-blur-sm">
        <motion.div variants={itemVariants} className="flex justify-between items-start gap-3">
          <motion.h3
            className="text-2xl font-black text-white leading-tight flex-1 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {title}
          </motion.h3>
          {isTopRated && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-black text-xs whitespace-nowrap shadow-lg border-2 border-amber-300/50 rounded-full px-3 py-1.5 animate-pulse flex items-center">
                <Trophy className="h-3 w-3 mr-1" />
                TOP RATED
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="text-xs text-blue-300/80 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-3 flex-wrap">
            <motion.span
              className="px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-400/30 backdrop-blur-sm font-bold flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-3.5 w-3.5" />
              {dateRange}
            </motion.span>
            <motion.span
              className="px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm font-bold flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="h-3.5 w-3.5" />
              {hostType}
            </motion.span>
            {(country || timezone) && (
              <motion.span
                className="px-3 py-1.5 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 rounded-full border border-teal-400/30 backdrop-blur-sm font-bold flex items-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                   <span>{country}</span>
                   <span className="opacity-40 text-[8px] font-black">{timezone?.split(' ')[0]}</span>
                </div>
              </motion.span>
            )}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <AnimatePresence>
            {showInfo ? (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 p-4 rounded-xl border border-blue-500/30 backdrop-blur-xl shadow-lg"
              >
                <motion.p
                  className="text-sm text-blue-100/90 leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {description}
                </motion.p>
              </motion.div>
            ) : (
              <motion.p
                className="text-sm text-slate-300/80 leading-relaxed line-clamp-2 font-medium"
                whileHover={{ color: "#e2e8f0" }}
                transition={{ duration: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 pt-4 border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              {pricePerNight > 0 ? (
                <>
                  <p className="text-2xl font-black text-white tracking-tight">
                    {currency === 'USD' ? '$' : ''}{pricePerNight}{currency !== 'USD' ? ` ${currency}` : ''}
                  </p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">per project</p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-black text-emerald-400 tracking-tight">Free</p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">open source</p>
                </>
              )}
            </motion.div>
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {actionHref ? (
                  <Link
                    href={actionHref}
                    className="group flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl border-0 px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-blue-500/20 text-xs"
                  >
                    <span>{actionLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={onAction}
                    className="group flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl border-0 px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-blue-500/20 text-xs"
                  >
                    <span>{actionLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
