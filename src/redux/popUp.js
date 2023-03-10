import { createSlice } from '@reduxjs/toolkit'



export const popUp = createSlice({
  name: 'popup',
  initialState: {pop: false},
  reducers: {
    showpop: (state) => {
      state.pop = true
    },
    hidepop: (state) => {
      state.pop = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { hidepop, showpop } = popUp.actions

export default popUp.reducer