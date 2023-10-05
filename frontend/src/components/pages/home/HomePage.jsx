import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/Users/adam/IdeaProjects/crud-starter/frontend/public/vite.svg'
import Create from "./sections/Create.jsx";
import ContentContainer from "../layout/ContentContainer.jsx";
import {useData} from "../../utilities/DataContextProvider.jsx";
import AutoAnimate from "../../utilities/AutoAnimate.jsx";
import Read from "./sections/Read.jsx";
import Configuration from "./sections/Configuration.jsx";
import Update from "./sections/Update.jsx";
import Delete from "./sections/Delete.jsx";

export default function HomePage() {
    const [enableDefault, setEnableDefault] = useState(false);

  return (
    <>
        <Configuration enableDefault={enableDefault} setEnableDefault={setEnableDefault}></Configuration>

        <Create enableDefault={enableDefault}></Create>

        <Read></Read>

        <Update enableDefault={enableDefault}></Update>

        <Delete enableDefault={enableDefault}></Delete>
    </>
  )
}

