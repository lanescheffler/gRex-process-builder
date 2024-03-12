// features/userInput/userInputSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store'; // Adjust the import path as necessary

export interface UserInputState {
  cellType: string;
  startingCellPopulation: number;
  finalCellPopulation: number;
  populationDoublingTime: number;
  seedingDensity: number;
  regulatoryStatus: 'RUO' | 'GMP';
  systemType: 'Open' | 'Closed';
}

const initialState: UserInputState = {
  cellType: '',
  startingCellPopulation: 0,
  finalCellPopulation: 0,
  populationDoublingTime: 0,
  seedingDensity: 0,
  regulatoryStatus: 'RUO', // Default value
  systemType: 'Open', // Default value
};

export const userInputSlice = createSlice({
  name: 'userInput',
  initialState,
  reducers: {
    setCellType: (state, action: PayloadAction<string>) => {
      state.cellType = action.payload;
    },
    setStartingCellPopulation: (state, action: PayloadAction<number>) => {
      state.startingCellPopulation = action.payload;
    },
    setFinalCellPopulation: (state, action: PayloadAction<number>) => {
      state.finalCellPopulation = action.payload;
    },
    setPopulationDoublingTime: (state, action: PayloadAction<number>) => {
      state.populationDoublingTime = action.payload;
    },
    setSeedingDensity: (state, action: PayloadAction<number>) => {
      state.seedingDensity = action.payload;
    },
    setRegulatoryStatus: (state, action: PayloadAction<'RUO' | 'GMP'>) => {
      state.regulatoryStatus = action.payload;
    },
    setSystemType: (state, action: PayloadAction<'Open' | 'Closed'>) => {
      state.systemType = action.payload;
    },
    // Additional reducers can be added here
  },
});

// Action creators are generated for each case reducer function
export const {
  setCellType,
  setStartingCellPopulation,
  setFinalCellPopulation,
  setPopulationDoublingTime,
  setSeedingDensity,
  setRegulatoryStatus,
  setSystemType,
} = userInputSlice.actions;

// Selectors
export const selectUserInput = (state: RootState) => state.userInput;

// The generated reducer
export default userInputSlice.reducer;
