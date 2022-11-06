import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Button, Card, DropdownButton, Tab, Tabs } from "react-bootstrap";
import gpt3Get from "../../connection/api";
import Settings from "../Settings";
import { Dropdown } from "semantic-ui-react";

const Explanation = () => {
  const [gpt3Prompt, setGpt3Prompt] = useState<string>("");
  const [gpt3Response, setGpt3Response] = useState<string>("");
  const [codeExplain, setCodeExplain] = useState<string[]>([""]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <textarea rows={20} cols={50}></textarea>
          <Button>Explain</Button>
        </div>

        <div className="col">
          <textarea disabled={true} rows={20} cols={50} />
        </div>
        <div className="w-100"></div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
};

export default Explanation;
