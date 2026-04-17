"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Droplets, Sparkles, MapPin, Wind, Heart } from "lucide-react";
import { regions, type Region } from "@/lib/regions-data";
import { SmokeParticles, IncenseSmoke } from "@/components/fragrance/smoke-particles";

type Page = "home" | "regions" | "perfume";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = useCallback(
    (page: Page, region?: Region) => {
      setIsTransitioning(true);
      setTimeout(() => {
        if (region) setSelectedRegion(region);
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "instant" });
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
    },
    []
  );

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <HeroSection loaded={loaded} onEnter={() => navigateTo("regions")} scrollY={scrollY} />
          </motion.div>
        )}

        {currentPage === "regions" && (
          <motion.div
            key="regions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <RegionsPage onExplore={(region) => navigateTo("perfume", region)} />
          </motion.div>
        )}

        {currentPage === "perfume" && selectedRegion && (
          <motion.div
            key="perfume"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <PerfumePage
              region={selectedRegion}
              onBack={() => navigateTo("regions")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Hero Section ────────────────────────────── */
function HeroSection({
  loaded,
  onEnter,
  scrollY,
}: {
  loaded: boolean;
  onEnter: () => void;
  scrollY: number;
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src="/hero-bg.png"
          alt="عطر الوطن - خلفية"
          className="w-full h-[120%] object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-800/10" />
      </div>

      {/* Smoke particles */}
      <SmokeParticles count={12} className="z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Brand logo/icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold/50 bg-black/20 backdrop-blur-sm">
            <Droplets className="w-8 h-8 text-gold-light" />
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={loaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gold-light/80 text-lg md:text-xl tracking-[0.3em] mb-4 font-light"
        >
          عطر الوطن
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          سافر عبر الرائحة
          <br />
          <span className="text-gold-gradient">داخل وطنك</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          عطور فاخرة مستوحاة من مناطق المملكة العربية السعودية
          <br className="hidden md:block" />
          كل منطقة لها عطر خاص يعكس طبيعتها وثقافتها وروحها
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-l from-gold-dark via-gold to-gold-light text-white font-medium text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.4)] hover:scale-105"
          >
            <span className="relative z-10">استكشف العطور</span>
            <ChevronLeft className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-x-1" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </motion.div>

        {/* Decorative icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-cream/40"
        >
          <Wind className="w-5 h-5" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <Sparkles className="w-5 h-5" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <Heart className="w-5 h-5" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <MapPin className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </div>
  );
}

/* ─── Regions Page ────────────────────────────── */
function RegionsPage({ onExplore }: { onExplore: (region: Region) => void }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="relative py-16 md:py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-transparent" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-gold" />
            <MapPin className="w-4 h-4 text-gold" />
            <div className="w-8 h-[1px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            مناطق المملكة
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
          >
            خمس مناطق، خمس قصص فريدة، وخمسة عطور تعبّر عن روح كل بقعة في وطننا
          </motion.p>
        </div>
      </header>

      {/* Region Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(region.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onExplore(region)}
              className={`perfume-card group relative cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm border border-gold/10 ${index >= 3 ? "lg:col-span-1" : ""}`}
            >
              {/* Card Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${region.gradient} transition-opacity duration-500 ${
                    hoveredCard === region.id ? "opacity-90" : "opacity-70"
                  }`}
                />
                {/* Region name on image */}
                <div className="absolute bottom-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {region.name}
                  </h3>
                  <p className="text-cream/80 text-sm">{region.subtitle}</p>
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-gold/30" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {region.description}
                </p>

                {/* Perfume name */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-gold-dark">
                      {region.perfumeName}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-dark transition-colors duration-300">
                    استكشف العطر
                    <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Droplets className="w-4 h-4 text-gold" />
          <span className="text-gold-gradient font-bold text-lg">عطر الوطن</span>
        </div>
        <p className="text-muted-foreground text-sm">
          عطور فاخرة مستوحاة من ثقافة المملكة العربية السعودية
        </p>
      </footer>
    </div>
  );
}

/* ─── Perfume Detail Page ────────────────────────────── */
function PerfumePage({
  region,
  onBack,
}: {
  region: Region;
  onBack: () => void;
}) {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="min-h-screen bg-cream relative">
      {/* Full-width hero image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={region.image}
          alt={region.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className={`absolute inset-0 bg-gradient-to-t ${region.gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={onBack}
          className="absolute top-6 right-6 z-30 flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-all duration-300 border border-white/10"
        >
          <ChevronRight className="w-4 h-4" />
          <span className="text-sm font-medium">العودة للمناطق</span>
        </motion.button>

        {/* Smoke effect on entry */}
        <IncenseSmoke className="z-20" />

        {/* Hero content */}
        <div className="absolute bottom-0 right-0 left-0 z-10 p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-4 h-4 text-gold-light" />
              <span className="text-cream/80 text-sm">{region.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
              {region.perfumeName}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-gold-light text-sm">{region.subtitle}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20 -mt-8 relative z-10">
        {/* Emotional Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gold/10 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-5 h-5 text-gold" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">الإحساس</h2>
              </div>
              <p className="text-foreground/80 text-base md:text-lg leading-loose">
                {region.emotionalDescription}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">عن العطر</h2>
          </div>
          <p className="text-foreground/70 text-base leading-loose max-w-3xl">
            {region.perfumeDescription}
          </p>
        </motion.section>

        {/* Arabesque divider */}
        <div className="arabesque-divider w-full max-w-md mx-auto mb-16" />

        {/* Ingredients */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Droplets className="w-5 h-5 text-gold" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">المكونات</h2>
            </div>
            <button
              onClick={() => setShowIngredients(!showIngredients)}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-sand-light text-foreground text-sm"
            >
              {showIngredients ? "إخفاء" : "عرض المكونات"}
              <motion.div
                animate={{ rotate: showIngredients ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.div>
            </button>
          </div>

          <div className={`${showIngredients ? "block" : "hidden"} md:grid md:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {region.perfumeIngredients.map((ingredient, index) => (
              <motion.div
                key={ingredient}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-md group"
              >
                <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-125 transition-transform duration-300" />
                <span className="text-foreground/80 text-sm">{ingredient}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Region description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              عن المنطقة
            </h2>
          </div>
          <p className="text-foreground/70 text-base leading-loose max-w-3xl">
            {region.description}
          </p>
        </motion.section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="arabesque-divider w-full max-w-md mx-auto mb-8" />
          <p className="text-muted-foreground mb-6">اكتشف عطور المناطق الأخرى</p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-l from-gold-dark via-gold to-gold-light text-white font-medium rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] hover:scale-105"
          >
            <span>استكشف جميع المناطق</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gold/10 py-8 px-6 text-center mt-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Droplets className="w-4 h-4 text-gold" />
          <span className="text-gold-gradient font-bold text-lg">عطر الوطن</span>
        </div>
        <p className="text-muted-foreground text-sm">
          عطور فاخرة مستوحاة من ثقافة المملكة العربية السعودية
        </p>
      </footer>

      {/* Ambient smoke */}
      <SmokeParticles count={4} className="z-0" />
    </div>
  );
}
