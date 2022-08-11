import { createSlice } from '@reduxjs/toolkit';
import { checkTheme, getInitialTheme } from '@utils/getTheme';

interface initialStateProps {
  theme: null | 'light' | 'dark';
}

const initialState: initialStateProps = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (
      state,
      actions: {
        payload: 'dark' | 'light';
      }
    ) => {
      state.theme = actions.payload;
      checkTheme(actions.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
