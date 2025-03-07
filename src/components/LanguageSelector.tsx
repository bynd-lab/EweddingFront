import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, IconButton, Typography, Box } from '@mui/material';
import CountryFlag from './CountryFlag';

const languages = [
  { code: 'az', name: 'AZ', flag: 'AZ' },
  { code: 'ru', name: 'RU', flag: 'RU' },
  { code: 'en', name: 'EN', flag: 'GB' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
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

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="inherit"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CountryFlag countryCode={currentLanguage.flag} />
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
              <CountryFlag countryCode={language.flag} />
              <Typography variant="body2">{language.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector; 