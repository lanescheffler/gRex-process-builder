import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userInputReducer from '../features/userInput/userInputSlice';
import calculationsReducer from '../features/calculations/calculationsSlice';
import grexInformationReducer from '../features/grexInformation/grexInformationSlice';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInput: userInputReducer,
    calculations: calculationsReducer,
    grexInformation: grexInformationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
