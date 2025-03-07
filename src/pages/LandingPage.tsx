import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Grid, Box, Container } from '@mui/material';
import { Brush, Speed, Share } from '@mui/icons-material';
import '../styles/landing.scss';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Brush />,
      title: t('feature-custom-design'),
      description: t('feature-custom-design-description'),
    },
    {
      icon: <Speed />,
      title: t('feature-easy-to-use'),
      description: t('feature-easy-to-use-description'),
    },
    {
      icon: <Share />,
      title: t('feature-share-online'),
      description: t('feature-share-online-description'),
    },
  ];

  return (
    <div className="landing-page">
      <section className="landing-page__hero">
        <Container maxWidth="lg">
          <Box>
            <Typography variant="h1" className="landing-page__hero-title">
              {t('hero-title')}
            </Typography>
            <Typography variant="h5" className="landing-page__hero-subtitle">
              {t('hero-subtitle')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="landing-page__cta-button"
            >
              {t('create-invitation')}
            </Button>
          </Box>
        </Container>
      </section>

      <section className="landing-page__features">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <div className="landing-page__features-card">
                  <div className="landing-page__features-card-icon">
                    {feature.icon}
                  </div>
                  <Typography
                    variant="h5"
                    className="landing-page__features-card-title"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="landing-page__features-card-description"
                  >
                    {feature.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage; 