import React, { useState } from "react";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import TermsPrivacyComponent from "./TermsPrivacyComponent";
import PolicyComponent from "./PolicyComponent";
 
export function Termsandconditions() {
    const [view, setView] = useState("terms"); // State to switch between views

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button className="bg-gray-100 text-black" onClick={handleOpen}>Terms & Conditions and Privacy Policy</Button>
      <Dialog open={open} size="xxl" handler={handleOpen} className="font-poppins">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
          Terms & Conditions and Privacy Policy
          </Typography>
        </DialogHeader>
        <DialogBody divider className=" h-[42rem] overflow-scroll grid place-items-center gap-4">
        <div className="p-6 font-poppins">
        <PolicyComponent/>
    
    </div>
        </DialogBody>
        <DialogFooter className=" flex items-center justify-center space-x-2">
          <Button variant="text" color="blue-gray" className="bg-gray-200"  onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}