"use client"

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const MIN_VALUE = 50;
const MAX_VALUE = 50;

export default function InputSlider({ title, value, onChange }: any) {
  const handleSliderChange = (event: Event, newValue: any) => {
    if (onChange) {
      // Verifica se o novo valor é menor que MIN_VALUE e, se for, ajusta para MIN_VALUE
      const adjustedValue = newValue < MIN_VALUE ? MIN_VALUE : newValue;
      onChange(adjustedValue);
    }
  };

  return (
    <Box sx={{ width: 150 }}>
      <Typography id="input-slider" gutterBottom>{title}</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            min={MIN_VALUE}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
