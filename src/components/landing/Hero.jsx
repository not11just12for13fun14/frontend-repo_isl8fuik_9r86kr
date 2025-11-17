import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-bg">
      {/* Desktop 3D / Spline background */}
      <div className="hidden md:block absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/50 to-transparent" />
      </div>

      {/* Mobile gradient fallback */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-br from-theme-primary-light to-accent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary drop-shadow-sm"
        >
          Finally, Algorithms Make Sense
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg md:text-xl text-text-secondary"
        >
          Interactive visualizations you control. Step through code at your pace.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-theme-primary hover:bg-theme-primary-hover text-white shadow-md transition-colors"
          >
            Start Visualizing
          </Link>
        </motion.div>
      </div>

      {/* Optional Three.js decorative foreground on desktop for subtle depth */}
      <div className="hidden md:block absolute inset-0 z-[1]">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.9} />
            <Scene3D />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
