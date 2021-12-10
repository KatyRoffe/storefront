import React from 'react';
import { Paper, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardMedia } from '@material-ui/core'
import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';


const productsViewer = (props) => {
  return (
    <>
      <Paper className="paper" elevation={3}>
        <Typography variant="h4" component='h4'> Browse A Category: </Typography>
        <Button id="card-buttons" size="small" variant="contained" color="primary" onClick={() => props.active('Books')}>Books</Button>
        <Button size="small" variant="contained" color="primary" onClick={() => props.active('Food')}>Pets</Button>
        <Button size="small" variant="contained" color="primary" onClick={() => props.active('Food')}>Novelty</Button>
        <Grid spacing={4} container justify="center" >
          {props.products.productList.map((product, index) => {
            if (product.category === props.activeCategory) {
              return (
                <Grid item key={index}>
                  <Card>
                    <CardHeader title={product.name} />
                    <CardMedia
                      image={require('https://via.placeholder.com/200x100')}
                      style={{ height: 3, paddingTop: '25%' }}
                      title='title'
                    />
                    <CardContent>
                      <Typography variant="p" component="p"> ${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined"> Add to Cart </Button>
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
    products: state.products, activeCategory: state.categories.activeCategory
  }
}

const mapDispatchToProps = {
  inactive,
  active,
  getProducts,
}


export default connect(mapStateToProps, mapDispatchToProps)(productsViewer);