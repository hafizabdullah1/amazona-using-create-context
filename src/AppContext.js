import axios from 'axios'
import { createContext, useReducer } from 'react';

const AppContext = createContext()

let initial = {
  products: [],
  carts: [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALLPRODUCTS':
      return { ...state, products: [action.payload] }

    case 'GET_SINGLEPRODUCTS':
      return { ...state, products: action.payload }

    case 'ADD_PRODUCT':
      return { ...state, carts: action.payload }

    case 'UPDATE_PRODUCT':
      return { ...state, carts: action.payload }

    case 'GET_CARTITEMS':
      return { ...state, carts: action.payload }

    case 'HANDLE_STOCK':
      return { ...state, products: action.payload }

    case 'DEL_ITEM':
      const filterData = state.carts.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, carts: filterData };
    default:
      return state
  }
}

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initial)


  const fetchAllProducts = async () => {
    const res = await axios.get('http://localhost:3005/products')
    dispatch({ type: 'GET_ALLPRODUCTS', payload: res.data })
  }


  const fetchSingleProduct = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3005/products/${id}`);
      dispatch({ type: 'GET_SINGLEPRODUCTS', payload: res.data })
    } catch (error) {
      console.error('Error fetching singl product:', error);
    }
  }

  // const addProduct=async(obj)=>{
  //   const data = {...obj.product, selectedQty: obj.selectedQty }
  //     // console.log(data,'cart obj here');
  //   try {
  //       const res = await axios.post(`http://localhost:3005/carts`,data);
  //       dispatch({type: 'ADD_PRODUCT', payload: res.data})
  //     } catch (error) {
  //       console.error('Error fetching singl product:', error);
  //     }
  // }

  const addProduct = async (obj) => {
    const existingProduct = state.carts.find((item) => item.id === obj.id);

    if (existingProduct) {
      // If the product already exists in the cart, update the quantity
      const updatedQty = existingProduct.selectedQty + obj.selectedQty;

      try {
        const res = await axios.put(`http://localhost:3005/carts/${existingProduct.id}`, { selectedQty: updatedQty });
        dispatch({ type: 'UPDATE_PRODUCT', payload: res.data });
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
    else {
      // If the product is not in the cart, add it as a new item
      const data = { ...obj.product, selectedQty: obj.selectedQty };

      try {
        const res = await axios.post(`http://localhost:3005/carts`, data);
        dispatch({ type: 'ADD_PRODUCT', payload: res.data });
      } catch (error) {
        console.error('Error fetching single product:', error);
      }
    }
  };




  const getCartItems = async () => {
    const res = await axios.get('http://localhost:3005/carts')
    dispatch({ type: 'GET_CARTITEMS', payload: res.data })
  }

  const handleStock = async (obj, id) => {
    if (obj.obj) {

      const data = { ...obj.product, countInStock: obj.product.countInStock - obj.selectedQty };
      const res = await axios.put(`http://localhost:3005/products/${id}`, data);
      dispatch({ type: 'UPDATE_STOCK', payload: res.data });
    }
  };

  const addComment = (obj) => {
    // const data = { ...obj.ele, comments: [...obj.ele.comments, obj.comment] }

    // const data = {...obj.state.products, reviews: [...obj.state.products.reviews, obj.comment]}

    console.log(obj, 'data of comment');

    // const res = await axios.put(`http://localhost:3005/blogs/${obj.ele.id}`, data)
    // // console.log(res.data);
    // dispatched({ type: "ADD_COMMENT", payload: res.data })
  }


  const delItem = async (id) => {

    console.log(id, 'id ');

    await axios.delete(`http://localhost:3005/carts/${id}`)
    dispatch({ type: "DEL_ITEM", payload: id })
  }

  const returnItem = async (state, id) => {
    // const data = { ...obj.obj.product, countInStock: obj.obj.product.countInStock + obj.obj.selectedQty };
    console.log(state, 'here are state at retrn stock');
    // const res = await axios.put(`http://localhost:3005/products/${id}`, data);
    // dispatch({type: 'RETURN_STOCK', payload: res.data});
  }
  return (
    <AppContext.Provider
      value={{ state, fetchAllProducts, fetchSingleProduct, addProduct, handleStock, getCartItems, addComment, delItem, returnItem }}>
      {children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider }