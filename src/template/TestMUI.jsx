import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const TestMUI = () => {
  return (
    <div>
      <FormControl className="">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem  value={10}>alin </MenuItem>
          <MenuItem value={20}>Mitraz</MenuItem>
          <MenuItem value={30}> فارسی </MenuItem>
          <MenuItem value={40}> تهران </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default TestMUI;
