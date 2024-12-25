import React, { useState } from "react";
import { Form } from "@/widjets/form";
import { Modal } from "@/shared/ui";

const Request: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Form />
      <Modal isOpen={isOpen} />
      <button onClick={()=>setIsOpen(!isOpen)}>click</button>
    </>
  );
};

export default Request;
