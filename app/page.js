'use client';
import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import HeroSection from "./(homepage)/HeroSection";
import Supporters from "./(homepage)/Supporters";

// Dynamically import below-the-fold components
const WhoAreWe = dynamic(() => import('./(homepage)/WhoAreWe'), { suspense: true });
const WhyWeDifferent = dynamic(() => import('./(homepage)/WhyWeDifferent'), { suspense: true });
const JoinCommunity = dynamic(() => import('./(homepage)/JoinCommunity'), { suspense: true });
const GidaDeveloperComSection = dynamic(() => import('./(homepage)/GidaDeveloperComSection'), { suspense: true });
const ReadyToLearn = dynamic(() => import('./(homepage)/ReadyToLearn'), { suspense: true });
const Newsletter = dynamic(() => import('./(homepage)/Newsletter'), { suspense: true });
const Partnership = dynamic(() => import('./(homepage)/Partnership'), { suspense: true });
const TeamSection = dynamic(() => import('./(homepage)/TeamSection'), { suspense: true });
const FifaSection = dynamic(() => import('./(homepage)/FifaSection'), { suspense: true });
const Activities = dynamic(() => import('./(homepage)/Activities'), { suspense: true });
const UpcomingEvents = dynamic(() => import('./(homepage)/UpcomingEvents'), { suspense: true });
const BootcampSection = dynamic(() => import('./(homepage)/BootcampSection'), { suspense: true });
const GidaMOT = dynamic(() => import('./(homepage)/GidaMOT'), { suspense: true });
const ProfessionalTrader = dynamic(() => import('./(homepage)/ProfessionalTrader'), { suspense: true });
const Footer = dynamic(() => import('@/components/Footer'), { suspense: true });import NewsSection from "./(homepage)/NewsSection";
import FromBlog from './(homepage)/FromBlog';
import RealLife from './(homepage)/RealLife';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const images = document.querySelectorAll('img');
      if (images.length === 0) {
        setLoading(false);
        return;
      }

      let loadedImages = 0;
      const maxTimeout = 5000; // 5 seconds timeout

      const updateProgress = () => {
        loadedImages++;
        const progress = Math.min(Math.round((loadedImages / images.length) * 100), 100);
        setLoadingProgress(progress);
        console.log(`Loading progress: ${progress}%`);
        
        if (progress >= 100) {
          setLoading(false);
        }
      };

      const loadImage = (img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            updateProgress();
            resolve();
            return;
          }

          // Set loading priority
          if (img.getBoundingClientRect().top < window.innerHeight) {
            img.loading = 'eager';
            img.fetchPriority = 'high';
          } else {
            img.loading = 'lazy';
          }

          const timeout = setTimeout(() => {
            console.warn('Image load timeout:', img.src);
            updateProgress();
            resolve();
          }, maxTimeout);

          img.onload = () => {
            clearTimeout(timeout);
            updateProgress();
            resolve();
          };

          img.onerror = () => {
            clearTimeout(timeout);
            console.error('Image load failed:', img.src);
            updateProgress();
            resolve();
          };
        });
      };

      try {
        await Promise.all(Array.from(images).map(loadImage));
      } catch (error) {
        console.error('Image loading error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <>
      {loading && <Preloader progress={loadingProgress} />}
      <div className={`font-[family-name:var(--font-geist-sans)] transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Critical above-the-fold content */}
        <HeroSection />
        <Supporters />
        
        {/* Wrap below-the-fold content in Suspense */}
        <Suspense fallback={<div className="h-20" />}>
          <WhoAreWe />
          <WhyWeDifferent />
          <JoinCommunity />
          <GidaDeveloperComSection />
          <Activities />
          <GidaMOT />
          <ProfessionalTrader />
          <UpcomingEvents />
          <BootcampSection />
          <FifaSection />
          <RealLife />
          <TeamSection />
          <div className="relative overflow-hidden">
            <NewsSection/>
            <Partnership />
          </div>
          <FromBlog />
          <Newsletter />
          <ReadyToLearn />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
