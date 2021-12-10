import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { connect } from 'react-redux';

const SimpleCart = (props) => {
  if (props.cart.cart.length > 0) {
    return (
      <Grid container justify="flex-end">
        <Card alignContent= 'center'>
          <CardContent>
            <p>Cart:
              {props.cart.cart.map((product, item) => {
                return (
                  <Typography key={item}>
                    {product.name}
                  </Typography>
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

export default connect(mapState)(SimpleCart);

