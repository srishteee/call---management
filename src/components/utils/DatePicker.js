import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./Datepicker.css";

export default function SelectDate(props) {
  return (
    <>
     <h3 style={{marginLeft:"150px"}}>{props.name}</h3>
    <div className="select-date-container">
      <div className="datepicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </div>
    </div>
    </>
  );
}
