import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const CreatePartner = createAsyncThunk(
  "createpartner",
  async (
    { name, email, phone, address, password, password_confirmation },
    thunkAPI
  ) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/create-apipartner`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            password,
            password_confirmation
          })
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
