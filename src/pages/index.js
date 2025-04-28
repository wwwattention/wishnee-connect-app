import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      {/* Здесь можно добавить остальные секции: About, Problems, Solutions, Privacy, Features, HowItWorks, CTA */}
    </Box>
  );
}
