import classes from './AddBtn.module.css';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


export default function AddBtn() {
  useState





  
  return(
    <>
      <Dialog open={false} onClose={() => setIsModal(false)}>

      </Dialog>
      <div className={classes['add-task-btn']}>
        <AddIcon sx={{ width: 30, color: "white"}}/>
      </div>
    </>
  )
}