import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCounter = createAsyncThunk(
  'counter/fetchCounter',
  async () => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(42); // Simulated API response
      }, 1000);
    });
  }
);
