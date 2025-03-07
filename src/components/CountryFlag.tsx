import React from 'react';

interface CountryFlagProps {
  countryCode: string;
  width?: number;
  height?: number;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ 
  countryCode, 
  width = 20, 
  height = 15 
}) => {
  return (
    <img
      src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
      alt={`${countryCode} flag`}
      width={width}
      height={height}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default CountryFlag; 