import React, { useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, IconButton, Popover, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { data } from './utils/dummy';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import DownloadIcon from '@mui/icons-material/Download';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

//defining columns outside of the component is fine, is stable


const Table= () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleActionClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    
    const columns = [
        {
          accessorKey: 'action',
          header: 'Action',
          size: 40,
          Cell: ({ row }) => (
            <>
              <IconButton
                onClick={handleActionClick}
                sx={{ color: 'grey ' }}
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    p: '0.5rem',
                  }}
                >
                  <IconButton size="small">
                    <PlayCircleIcon color={'primary'}/>
                    <p style= {{padding:"8px" }}>Play</p>
                  </IconButton>
                  <IconButton size="small">
                    < PauseCircleIcon color={'primary'} />
                    <p style= {{padding:"8px"}}>Pause</p>
                  </IconButton>
                  <IconButton size="small">
                    <DownloadIcon  color={'primary'}/>
                    <p style= {{padding:"8px"}}>Save</p>
                  </IconButton>
                </Box>
              </Popover>
            </>
            ),
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
          size: 120,
        },
        {
          accessorKey: 'callDate',
          header: 'Call Date',
          size: 120,
        },
        {
          accessorKey: 'recordingFile',
          header: 'Recording File',
          size: 300,
        },
        {
          accessorKey: 'respCode',
          header: 'Resp Code',
        },
        {
          accessorKey: 'campName',
          header: 'Camp Name',
          size: 220,
        },
        {
          accessorKey: 'agentId',
          header: 'Agent id',
          size: 220,
        },
      ];
      
      const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header),
      };
      
      const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    // csvExporter.generateCsv(data);
  };

  return(
    <MaterialReactTable
    columns={columns}
    data={data}
    // enableRowSelection
    positionToolbarAlertBanner="bottom"
    renderTopToolbarCustomActions={({ table }) => (
      <Box
        sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
      >
       
        
        {/* <Button
          color="primary"
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />} 
          variant="contained"
        >
          Export All Data
        </Button> */}
        <div style={{position:"relative", left:"1350px"}}>  <SaveAltIcon/>
       
        </div>
        <div style={{position:"relative", left:"1350px" , fontWeight:"bold"}}>Exports</div>
      
      </Box>
      
    )}
  />
  )

    }


export default Table;
