// features/calculations/calculationsSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store'; // Adjust the import path as necessary

// Define the shape of your calculations state
export interface CalculationsState {
  theoreticalStartingSurfaceArea: number;
  actualStartingSurfaceArea: number;
  theoreticalFinalSurfaceArea: number;
  actualFinalSurfaceArea: number;
  numberOfCellsToSeedRep2: number;
  harvestPassageDensity: number;
  numberOfPopulationDoublingsForRep1: number;
  populationDoublingTimeDays: number;
  rep1DurationDays: number;
  numberOfPopulationDoublingsForRep2: number;
  rep2DurationDays: number;
  totalProcessTime: number;
  mediaVolumeConsumed: number;
}

// Initial state
const initialState: CalculationsState = {
  theoreticalStartingSurfaceArea: 0,
  actualStartingSurfaceArea: 0,
  theoreticalFinalSurfaceArea: 0,
  actualFinalSurfaceArea: 0,
  numberOfCellsToSeedRep2: 0,
  harvestPassageDensity: 0,
  numberOfPopulationDoublingsForRep1: 0,
  populationDoublingTimeDays: 0,
  rep1DurationDays: 0,
  numberOfPopulationDoublingsForRep2: 0,
  rep2DurationDays: 0,
  totalProcessTime: 0,
  mediaVolumeConsumed: 0,
};

export const calculationsSlice = createSlice({
  name: 'calculations',
  initialState,
  reducers: {
    // Define a setter for each variable in the state
    setTheoreticalStartingSurfaceArea: (state, action: PayloadAction<number>) => {
      state.theoreticalStartingSurfaceArea = action.payload;
    },
    setActualStartingSurfaceArea: (state, action: PayloadAction<number>) => {
      state.actualStartingSurfaceArea = action.payload;
    },
    setTheoreticalFinalSurfaceArea: (state, action: PayloadAction<number>) => {
      state.theoreticalFinalSurfaceArea = action.payload;
    },
    setActualFinalSurfaceArea: (state, action: PayloadAction<number>) => {
      state.actualFinalSurfaceArea = action.payload;
    },
    setNumberOfCellsToSeedRep2: (state, action: PayloadAction<number>) => {
      state.numberOfCellsToSeedRep2 = action.payload;
    },
    setHarvestPassageDensity: (state, action: PayloadAction<number>) => {
      state.harvestPassageDensity = action.payload;
    },
    setNumberOfPopulationDoublingsForRep1: (state, action: PayloadAction<number>) => {
      state.numberOfPopulationDoublingsForRep1 = action.payload;
    },
    setPopulationDoublingTimeDays: (state, action: PayloadAction<number>) => {
      state.populationDoublingTimeDays = action.payload;
    },
    setRep1DurationDays: (state, action: PayloadAction<number>) => {
      state.rep1DurationDays = action.payload;
    },
    setNumberOfPopulationDoublingsForRep2: (state, action: PayloadAction<number>) => {
      state.numberOfPopulationDoublingsForRep2 = action.payload;
    },
    setRep2DurationDays: (state, action: PayloadAction<number>) => {
      state.rep2DurationDays = action.payload;
    },
    setTotalProcessTime: (state, action: PayloadAction<number>) => {
      state.totalProcessTime = action.payload;
    },
    setMediaVolumeConsumed: (state, action: PayloadAction<number>) => {
      state.mediaVolumeConsumed = action.payload;
    },
  },
});

// Export actions
export const {
  setTheoreticalStartingSurfaceArea,
  setActualStartingSurfaceArea,
  setTheoreticalFinalSurfaceArea,
  setActualFinalSurfaceArea,
  setNumberOfCellsToSeedRep2,
  setHarvestPassageDensity,
  setNumberOfPopulationDoublingsForRep1,
  setPopulationDoublingTimeDays,
  setRep1DurationDays,
  setNumberOfPopulationDoublingsForRep2,
  setRep2DurationDays,
  setTotalProcessTime,
  setMediaVolumeConsumed,
} = calculationsSlice.actions;

// Optional: Export selectors to access these pieces of state
// Example selector:
export const selectCalculations = (state: RootState) => state.calculations;

// Export the reducer
export default calculationsSlice.reducer;
