import { Alert, Snackbar} from "@mui/material"
import React from "react"


export default function Notifications(props){
    const { notify, setNotify} = props;
    const handleClose = (event,reason)=>{
         setNotify({
            ...notify,
            isOpen:false
         })
    }
    return (
        <Snackbar
        open={notify.isOpen}
        autoHideDuration={100}
        anchorOrigin={{vertical:'top', horizontal:'right'}}>
            <Alert  
            severity={notify.type}
            onClose={handleClose}
            autoHideDuration={100}>
                {notify.message}
             </Alert>
        </Snackbar>

    )
}
