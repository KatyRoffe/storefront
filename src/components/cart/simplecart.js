import React from 'react';
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/material'
import { removeFromCart } from '../../store/cart';
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles({
  base: {
    color: 'white',
    width: '10em',
    border: 0,
    borderRadius: 3,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '0 10px',
    marginRight: '1em',
    position: 'fixed',
  },
})
const SimpleCart = (props) => {
  const cart = useStyles();

  if (props.cart.cart.length > 0) {
    return (

      <Grid container justify="flex-end">
        <Card alignContent= 'center' className={cart.base}>

          <CardContent>
            <p>Cart:
              {props.cart.cart.map((product, item) => {
                return (
                  <>
                  <Typography key={item}>
                    {product.name}
                  </Typography>
                  <IconButton id='deleteButton' size='small' onClick={() => props.removeFromCart(product)}>
                    <ClearIcon />
                  </IconButton>
                </>
                )
              })}
            </p>
          </CardContent>
        </Card>
      </Grid>
    )
  } else {
    return null;
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatch = {
  removeFromCart,
}

export default connect(mapState, mapDispatch)(SimpleCart);

