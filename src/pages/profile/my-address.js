import { Checkbox, Dialog, Radio, Slide } from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Header from "../../Component/templet/header";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const MyAddress = () => {
  //   console.log(addNew);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header pagetitle={"Address"} />
      <div
        // style={{ display: "flex", alignItems: "flex-start", marginTop: "10px",background:"white" ,padding:'5px'}}
        className="address"
      >
        <Radio />
        <div>
          <div>
            <span style={{ fontWeight: 700 }}>Default Address: </span>
            <span>home</span>
          </div>
          <div>Kishan Tripathy</div>
          <div>
            HouseNO, Apartmant Name, Street, AreaDetail, Bangalore - 560063
          </div>
          <div>ph: 9861177199</div>
        </div>
      </div>
      <div
        style={{
          width: "-webkit-fill-available",
          background: "rgb(47, 138, 116)",
          bottom: 0,
          position: "absolute",
          padding: "10px 15px",
          textAlign: "right",
        }}
      >
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="customButton"
        >
          ADD NEW
        </button>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div
          style={{
            width: "-webkit-fill-available",
            background: "rgb(47, 138, 116)",
            color: "white",
            fontSize: "19px",
            padding: "10px 15px",
          }}
        >
          NewAddress
          <CloseIcon
            onClick={handleClose}
            style={{ position: "absolute", right: 15 }}
          />
        </div>
      </Dialog>
    </div>
  );
};
// const AddNewAddress = ({ addNew }) => {
//   return (
//     <div>
//       <Header pagetitle={"NewAddress"} />
//     </div>
//   );
// };
// const Address = () => {
//   const [addNew, setAddNew] = useState(false);
//   const wddjbf = () => {
//     setAddNew(!addNew);
//   };
//   return (
//     <>
//       {addNew ? (
//         <AddNewAddress addNew={wddjbf} />
//       ) : (
//         <MyAddress addNew={wddjbf} />
//       )}
//     </>
//   );
// };
export default MyAddress;
