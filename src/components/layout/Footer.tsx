import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer-about')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('footer-about-description')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('footer-contact')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                {t('footer-contact-email')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('footer-contact-phone')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {t('footer-copyright', { year: new Date().getFullYear() })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 