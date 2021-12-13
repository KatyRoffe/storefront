import React from 'react';
import { Typography, Button } from '@mui/material';
import { connect } from 'react-redux';
import {inactive, active } from '../../store/categories.js'

const chooseCategory = (props) => {
  return (
    <>
      <Typography>Browse By Category</Typography>
      <Button id="books" variant="contained" color="info" onClick={() => props.active('Books', 'Books')}>Books</Button>
      <Button id="pets" variant="contained" color="info" onClick={() => props.active('Pets', 'Pets')}>Pets</Button>
      <Button id="novelty" variant="contained" color="info" onClick={() => props.active('Novelty', 'Novelty')}>Novelty</Button>
      <Typography id="p-tag" variant="p" component="p"> {props.activeDescription} </Typography>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription
  }
}

const mapDispatchToProps = {
  inactive,
  active,
}

export default connect(mapStateToProps, mapDispatchToProps)(chooseCategory);
