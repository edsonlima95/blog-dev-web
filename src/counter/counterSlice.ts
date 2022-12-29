import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'


type Post = {
    id: number,
    name: string
}

export interface CounterState {
    value: number,
    posts: Post[]
}

//Estado inicial do contador
const initialState: CounterState = {
    value: 0,
    posts: [{
        id: 0,
        name: ''
    }]
}

export const fetchPosts = createAsyncThunk(
    'counter/fetchPosts',
    async () => {
        const response = await fetch("http://localhost:3000/api")
        const posts = await response.json()
        return posts
    }
)


export const counterSlice = createSlice({
    name: 'counter', //nome do reducer.
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
             state.posts = action.payload
        })
    }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer