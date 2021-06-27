import React, { useState } from "react";
import { Dialog, Slide } from "@material-ui/core";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const NotForBigschreen = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }
  return (
    // <div>
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
      <div> <h1>Please Open In Mobile Not Available For Desktop</h1></div>
      </Dialog>
    </React.Fragment>
    // </div>
  );
};

export default NotForBigschreen;
