import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const result = await api.get("/campers");
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/getOne",
  async (id, thunkAPI) => {
    try {
      const result = await api.get(`/campers/${id}`);
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
