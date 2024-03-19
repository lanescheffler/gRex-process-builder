// src/features/grexInformation/grexInformationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Define the initial state of the grexInformation component
export interface GrexInformationState {
  startingSeries: string;
  finalSeries: string;
  startingSeriesQuantity: number;
  finalSeriesQuantity: number;
  passageRequired: boolean;
  rep2Exists: boolean;
}

const initialState: GrexInformationState = {
  startingSeries: '',
  finalSeries: '',
  startingSeriesQuantity: 0,
  finalSeriesQuantity: 0,
  passageRequired: false,
  rep2Exists: false,
};

export const grexInformationSlice = createSlice({
  name: 'grexInformation',
  initialState,
  reducers: {
    setStartingSeries: (state, action: PayloadAction<string>) => {
      state.startingSeries = action.payload;
    },
    setFinalSeries: (state, action: PayloadAction<string>) => {
      state.finalSeries = action.payload;
    },
    setStartingSeriesQuantity: (state, action: PayloadAction<number>) => {
      state.startingSeriesQuantity = action.payload;
    },
    setFinalSeriesQuantity: (state, action: PayloadAction<number>) => {
      state.finalSeriesQuantity = action.payload;
    },
    setPassageRequired: (state, action: PayloadAction<boolean>) => {
      state.passageRequired = action.payload;
    },
    setRep2Exists: (state, action: PayloadAction<boolean>) => {
      state.rep2Exists = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStartingSeries,
  setFinalSeries,
  setStartingSeriesQuantity,
  setFinalSeriesQuantity,
  setPassageRequired,
  setRep2Exists,
} = grexInformationSlice.actions;

// Selectors
export const selectGrexInformation = (state: RootState) => state.grexInformation;

// The generated reducer
export default grexInformationSlice.reducer;
