import React from 'react';
import { Typography, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  return (
    <div id="header">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Katy's Store</Typography>
      </Toolbar>
    </div>
  )
}