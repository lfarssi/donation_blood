import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axiosObj from '@/axios/axiosConfig';

export default function Campaign() {
  const [inputVals, setInputVals] = useState({
    title: "",
    date: "",
    location: "" // Added location state
  });
  const [errs, setErrs] = useState({
    title: false,
    date: false,
    location: false // Added location error state
  });
  const [isSub, setIsSub] = useState(false);

  async function handleClick() {
    setIsSub(true);
    let newErrs = {};
    let counter = 0;

    for (let key in inputVals) {
      if (!inputVals[key]) {
        newErrs = { ...newErrs, [key]: true };
        counter += 1;
        setIsSub(false);
      } else {
        newErrs = { ...newErrs, [key]: false };
      }
    }

    if (!counter) {
      setErrs({
        title: false,
        date: false,
        location: false // Reset location error state
      });

      try {
        await axiosObj.get("/sanctum/csrf-cookie");
        const response = await axiosObj.post("/campaign", inputVals);
        console.log(response.status);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    setErrs(newErrs);
  }

  function handleChange(e) {
    setInputVals({ ...inputVals, [e.target.name]: e.target.value });
  }

  return (
    <div className='parent p-5'>
      <div className='p-2 w-75 bg-dark rounded rounded-4 shadow'>
        <h2 className='d-block text-center text-danger'>Create new Campaign</h2>

        <form>
          <div className="mb-3 w-75 mx-auto">
            <TextField
              label="Campaign Title"
              name="title"
              variant="outlined"
              fullWidth
              value={inputVals.title}
              onChange={handleChange}
              error={errs.title}
              helperText={errs.title && "This field is required"}
              InputProps={{ className: 'text-danger' }} // Added text color
            />
          </div>
          <div className="mb-3 w-75 mx-auto">
            <TextField
              label="Campaign Location"
              name="location"
              variant="outlined"
              fullWidth
              value={inputVals.location}
              onChange={handleChange}
              error={errs.location}
              helperText={errs.location && "This field is required"}
              InputProps={{ className: 'text-danger' }} // Added text color
            />
          </div>
          <div className="mb-3 w-75 mx-auto">
            <TextField
              label="Date"
              name="date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={inputVals.date}
              onChange={handleChange}
              error={errs.date}
              helperText={errs.date && "This field is required"}
              InputProps={{ className: 'text-danger' }} // Added text color
            />
          </div>
          <div className='d-flex justify-content-center'>
            <Button
              type="button"
              disabled={isSub}
              onClick={handleClick}
              variant="contained"
              color="secondary"
              className="font-bold text-center w-25"
            >
              {isSub ? <span className='loader mx-auto'></span> : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
