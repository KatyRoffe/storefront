const initialState = {
  
  // books, pets, novelty
  productList: [
    {_id: '1', name: 'pet1', category: 'Pets', price: 5.99, inStock: 100},
    {_id: '2', name: 'pet2', category: 'Pets', price: 10.99, inStock: 100},
    {_id: '3', name: 'book1', category: 'Books', price: 7.99, inStock: 100},
    {_id: '4', name: 'book2', category: 'Books', price: 12.99, inStock: 100},
    {_id: '5', name: 'novelty1', category: 'Novelty', price: 100.49, inStock: 100},
    {_id: '6', name: 'novelty2', category: 'Novelty', price: 25.00, inStock: 100},
  ],
  activeProduct: '',
  products: [],
}

export default function productReducer(state = initialState, action) {
  const { type, payload }= action;

  switch(type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
      return { ...state, products: products}
    default: 
      return state;
  }
}

export const getProducts = (category) => {
  const products = initialState.productList;
  const response = products.filter(product => product.category === category)
  return response;
}