import { useState } from "react";
import Configuration from "./sections/Configuration";
import Create from "./sections/Create";
import Read from "./sections/Read";
import Update from "./sections/Update";
import Delete from "./sections/Delete";

export const HomePage = () => {
  const [enableDefault, setEnableDefault] = useState(false);

  return (
    <>
      <Configuration enableDefault={enableDefault} setEnableDefault={setEnableDefault} />

      <Create enableDefault={enableDefault} />

      <Read />

      <Update enableDefault={enableDefault} />

      <Delete enableDefault={enableDefault} />
    </>
  )
}

export default HomePage;