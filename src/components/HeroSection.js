import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import Cherry3DModel from './Cherry3DModel';

// Компоненты с анимацией
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const HeroSection = () => {
  const theme = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Варианты анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 8 },
        pb: 8,
      }}
    >
      {/* Декоративные элементы фона */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1, transition: { duration: 2 } }}
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'white',
            filter: 'blur(60px)',
          }}
        />
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1, transition: { duration: 2, delay: 0.5 } }}
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'white',
            filter: 'blur(70px)',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <MotionTypography
                variant="h1"
                color="white"
                gutterBottom
                sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
                variants={itemVariants}
              >
                WISHNEE.CONNECT
              </MotionTypography>
              
              <MotionTypography
                variant="h3"
                color="white"
                gutterBottom
                sx={{ mb: 3, fontWeight: 600, fontSize: { xs: '1.5rem', md: '2rem' } }}
                variants={itemVariants}
              >
                AI-помощник нового поколения для честного и эффективного взаимодействия
              </MotionTypography>
              
              <MotionTypography
                variant="h6"
                color="white"
                sx={{ mb: 4, opacity: 0.9, maxWidth: '600px' }}
                variants={itemVariants}
              >
                Ваши данные — только ваши. Ваше время — бесценно. Взаимодействуйте с бизнесом легко, безопасно и осознанно.
              </MotionTypography>
              
              <MotionBox variants={itemVariants} sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <MotionButton
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    py: 1.5,
                    px: 4,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Начать сейчас
                </MotionButton>
                
                <MotionButton
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    py: 1.5,
                    px: 4,
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Узнать больше
                </MotionButton>
              </MotionBox>
              
              <MotionTypography
                variant="body1"
                color="white"
                sx={{ mt: 4, opacity: 0.8, fontStyle: 'italic' }}
                variants={itemVariants}
              >
                "Умное взаимодействие начинается с уважения к вашему времени и данным."
              </MotionTypography>
            </MotionBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '400px', md: '500px' },
              }}
            >
              <Cherry3DModel height="100%" />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;