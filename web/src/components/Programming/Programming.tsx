import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Button, Card, DropdownButton, Tab, Tabs } from "react-bootstrap";
import gpt3Get from "../../connection/api";
import Settings from "../Settings";
import { Dropdown } from "semantic-ui-react";
import Translation from "./Translation";
import Explanation from "./Explanation";

export type WhichTab = "1" | "2" | "3";

export const CODE_CHARS = 55;
const Programming = () => {
  const [displayedCode, setDisplayedCode] = useState<string[]>([""]);
  const [whichTab, setWhichTab] = useState<WhichTab>("1");
  useEffect(() => {
    console.log("whichTab");
  });
  return (
    <>
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Code Translation">
          <Translation />
        </Tab>
        <Tab eventKey={2} title="Explanation">
          <Explanation />
        </Tab>
        <Tab eventKey={3} title="Settings">
          <Settings />
        </Tab>
      </Tabs>
    </>
  );
};
export default Programming;
