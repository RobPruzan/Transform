import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Button, Card, DropdownButton, Tab, Tabs } from "react-bootstrap";
import gpt3Get from "../../connection/api";
import Settings from "../Settings";
import { Dropdown } from "semantic-ui-react";

const Explanation = () => {
  const [gpt3Prompt, setGpt3Prompt] = useState<string>("");
  const [gpt3Response, setGpt3Response] = useState<string>("");
  const [lineNumber, setLineNumber] = useState<number>(0);
  const handleExplain = () => {
    const prompt = `Explain in natural language line number ${lineNumber} of the following code: ${gpt3Prompt}`;
    gpt3Get(prompt).then((response) => {
      setGpt3Response(response.data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <textarea
            onKeyDown={(event) => {
              if (event.keyCode === 9) {
                event.preventDefault();
                const start = event.currentTarget.selectionStart;
                const end = event.currentTarget.selectionEnd;
                event.currentTarget.value =
                  event.currentTarget.value.substring(0, start) +
                  "    " +
                  event.currentTarget.value.substring(end);
                event.currentTarget.selectionStart =
                  event.currentTarget.selectionEnd = start + 4;
              }
              console.log(event);
            }}
            rows={20}
            cols={50}
            onChange={(e) => setGpt3Prompt(e.target.value)}
          ></textarea>
          <Button onClick={handleExplain}>Explain</Button>
          <label htmlFor="number">Line Number</label>
          <input
            onChange={(e) => {
              setLineNumber(Number(e.target.value));
            }}
            type="number"
          />
        </div>

        <div className="col">
          <textarea value={gpt3Response} disabled={true} rows={20} cols={50} />
        </div>
        <div className="w-100"></div>
      </div>
    </div>
  );
};

export default Explanation;
