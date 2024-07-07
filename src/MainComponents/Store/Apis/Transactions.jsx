import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Transactions = createAsyncThunk(
  "transactions",
  async (thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem('token')

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transaction`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      let data = await response.json();
      toast.success(data.message);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
