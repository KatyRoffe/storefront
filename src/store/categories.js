const initialState = {
  categoryList: [
    {
      displayName: 'Books',
      normalizedName: 'books', 
      description: 'All the books you want!'
    },
    {
      displayName: 'Pets',
      normalizedName: 'pets', 
      description: 'Everything for your pets!'
    },
    {
      name: 'Novelty', 
      description: 'Everything else!'
    },
  ],
  activeCategory: '',
  activeDescription: '',
}

export default function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVE':
      return { ...state, activeCategory: payload.category, activeDescription: payload.description}
    default:
      return state;
  }
}

export const inactive = () => {
  return {
    type: 'INACTIVE'
  }
}

export const active = (category, description) => {
  return {
    type: "ACTIVE",
    payload: {
      category,
      description
    }
  }
}