import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Api from "../../lib/api";
import {FETCH_STOCKS} from "../actionTypes";

const initialState = []

export const fetchTodos = createAsyncThunk(FETCH_STOCKS, async () => {
    const response = await Api.get('/stocks')
    return response.data
})

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            // ✅ This "mutating" code is okay inside of createSlice!
            state.push(action.payload)
        },
        todoToggled(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        todosLoading(state, action) {
            return {
                ...state,
                status: 'loading'
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                const newEntities = {}
                action.payload.forEach(todo => {
                    newEntities[todo.id] = todo
                })
                state.entities = newEntities
                state.status = 'idle'
            })
    }
});

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions
export const getStockState = (store) => store.stocks;
export const getStockList = (store) => getStockState(store) ? getStockState(store).allIds : [];
export const getStockById = (store, id) => getStockState(store) ? { ...getStockState(store).byIds[id], id } : {};
export const getAllStocks = (store) => getStockList(store).map((id) => getStockById(store, id));

export default todosSlice.reducer;