// import * as React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import MultipleSelectChip from "./utils/MultiSelect";
// import Input from "./utils/Input";

// import SelectDate from "./utils/DatePicker";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function Filters() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         columns={{ xs: 1, sm: 8, md: 12 }}
//       >
//         <div>
//           <MultipleSelectChip />
//         </div>

//         <div style={{ marginRight: "16px" }}>
//           <SelectDate  name = {"Call Date from"} />
//         </div>
//         <div>
//           {" "}
//           <SelectDate name = {"Call Date To"} />
//         </div>
//         <div>
//           <Input name = {"Phone Number"} />
//         </div>
//         <div>
//           <Input name = {"Volunteer Number"} />
//         </div>
//         <div>
//           <Input  name = {"Agent ID"}/>
//         </div>
//         <div>
//           <Input   name = {"Response Code"}  />
//         </div>
       
//       </Grid>
      
//     </Box>
//   );
// }


import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MultipleSelectChip from "./utils/MultiSelect";
import Input from "./utils/Input";
import SelectDate from "./utils/DatePicker";
import ColorButtons from "./buttons/Buttons";
import Table from "./Table";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Filters() {
  return (
    <>
    <Box sx={{ flexGrow: 1, borderRadius: "25px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", height:"58vh" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={4}>
          <div>
            <MultipleSelectChip />
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div>
         
            <SelectDate name={"Call Date from"} />
          </div>
          
        </Grid>

        
        <Grid item xs={12} sm={4}>
        <div>
            <SelectDate name={"Call Date To"} />
          </div>
          </Grid>

        <Grid item xs={12} sm={4}>
          <div>
            <Input name={"Phone Number"} />
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div>
            <Input name={"Volunteer Number"} />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Input name={"Agent ID"} />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Input name={"Response Code"} />
          </div>
        </Grid>
      </Grid>
      
    </Box>
    <div style={{justifyContent:"flex-end", display:"flex"}}>
    <div style={{padding:"10px"}}>
      <ColorButtons  />
    </div>
    <div style={{padding:"10px 0px 0px 10px "}}>
      <ColorButtons/>
    </div>
    </div>
    <div>
      <Table/>
    </div>
    </>
    
  );
}




