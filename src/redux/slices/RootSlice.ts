import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        genre: "Genre",
        author: "Author",
        publisher: "Pulisher",
        print_length: "Pages"
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        choosePublisher: (state, action) => { state.publisher = action.payload},
        choosePages: (state, action) => { state.print_length= action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseGenre, chooseAuthor, choosePublisher, choosePages} = rootSlice.actions