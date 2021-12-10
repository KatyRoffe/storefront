import React from 'react';
import { connect } from 'react-redux'
import { Typography, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header(props) {
  return (
    <div id="header">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Katy's Store</Typography>
        <Button align-content="right">
          <ShoppingCartIcon />: {props.cart.cart.length}
        </Button>
      </Toolbar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Header);