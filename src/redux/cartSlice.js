import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74';

const initialState = {
  cartItems: [],
  cartCategory: [],
  cartArr: JSON.parse(localStorage.getItem("Cart")) || [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
// item.category == all ? state.cartCategory = state.cartCategory 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    category: (state, action) => {

      state.cartCategory = state.cartItems.filter((item) => item.category == action.payload)
      if (action.payload == 'all') {
        state.cartCategory = state.cartItems
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      const index = state.cartArr?.map(e => e.id).indexOf(payload);
      // console.log(cart);
      const x = state.cartArr.splice(index, 1);
      localStorage.setItem('Cart', JSON.stringify(x));
    },
    increase: (state, { payload }) => {
      const cart = state.cartArr?.find((item) => item.id === payload);
      cart.quantity = cart.quantity + 1;
      state.amount = cart.quantity
      localStorage.setItem('Cart', JSON.stringify(state.cartArr))
    },
    decrease: (state, { payload }) => {
      const cart = state.cartArr?.find((item) => item.id === payload);
      if (cart.quantity === 1 ) {
        return
      }
      cart.quantity = cart.quantity - 1;
      state.amount = cart.quantity
      localStorage.setItem('Cart', JSON.stringify(state.cartArr))
    },
    // calculateTotals: (state) => {
    //   let amount = 0;
    //   let total = 0;
    //   state.cartItems.forEach((item) => {
    //     quantity += item.quantity;
    //     price += item.quantity * item.price;
    //   });
    //   state.amount = amount;
    //   state.total = total;
    //   console.log(total);
    // },

    addCart: (state, { payload }) => {
      const cart = [state.cartArr]?.find((item) => item.id === payload);

      if (cart) {
        return cart.quantity += payload.quantity
      }
      state.cartArr.push(payload)
      localStorage.setItem('Cart', JSON.stringify(state.cartArr));
      dispatchEvent(new Event("Cart"))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// console.log(cartSlice);
export const { reset, category, clearCart, removeItem, increase, decrease, calculateTotals, addCart } =
  cartSlice.actions;

export default cartSlice.reducer;