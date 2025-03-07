import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import { ROUTES } from '../../router';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={RouterLink}
              to={ROUTES.HOME}
              color="inherit"
              sx={{ fontWeight: 'bold' }}
            >
              E-Wedding
            </Button>
            <Button
              component={RouterLink}
              to={ROUTES.CREATE}
              color="inherit"
            >
              {t('create-invitation')}
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={RouterLink}
              to={ROUTES.LOGIN}
              color="inherit"
            >
              {t('login')}
            </Button>
            <Button
              component={RouterLink}
              to={ROUTES.REGISTER}
              variant="contained"
              color="primary"
            >
              {t('register')}
            </Button>
            <LanguageSelector />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 