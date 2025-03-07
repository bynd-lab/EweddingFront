import React from 'react';
import { AppBar, Toolbar, Button, Box, Container, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes';

const languages = [
  { code: 'az', name: 'AZ', flag: 'AZ' },
  { code: 'ru', name: 'RU', flag: 'RU' },
  { code: 'en', name: 'EN', flag: 'GB' },
];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const renderFlag = (countryCode: string) => (
    <img
      src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
      alt={`${countryCode} flag`}
      width={20}
      height={15}
      style={{ objectFit: 'cover' }}
    />
  );

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
            <IconButton
              onClick={handleClick}
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {renderFlag(currentLanguage.flag)}
                <Typography variant="body2">{currentLanguage.name}</Typography>
              </Box>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  selected={i18n.language === language.code}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {renderFlag(language.flag)}
                    <Typography variant="body2">{language.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 