import React from "react";
import { PiPlusCircleThin } from "react-icons/pi";

interface AsideProps {
  handleShow: () => void;
}
const Aside = ({ handleShow}: AsideProps) => {
  return (
    <aside>
      <h1>JustNote</h1>
      <PiPlusCircleThin onClick={handleShow} />
    </aside>
  );
};

export default Aside;
