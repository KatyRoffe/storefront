import React from 'react';
import { Paper, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardMedia } from '@mui/material'
import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';
import ChooseCategory from './categories.js';


const productsViewer = (props) => {
  return (
    <>
    <ChooseCategory />
      <Paper className="paper" elevation={3}>
        <Grid spacing={4} container justify="center" >
          {props.products.productList.map((product, index) => {
            if (product.category === props.activeCategory) {
              return (
                <Grid item key={index}>
                  <Card>
                    <CardHeader title={product.name} />
                    <CardMedia
                      style={{ height: 1, paddingTop: '25%' }}
                      title='title'
                    />
                    <CardContent>
                      <Typography variant="p" component="p"> ${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" onClick={() => props.addToCart(product)}> Add to Cart </Button>
                      <Button variant="outlined"> View Details </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            } else {
              return null;
            }
          })}
        </Grid>
      </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products, activeCategory: state.categories.activeCategory, activatedDescription: state.description
  }
}

const mapDispatchToProps = {
  inactive,
  active,
  getProducts,
  addToCart,
}


export default connect(mapStateToProps, mapDispatchToProps)(productsViewer);