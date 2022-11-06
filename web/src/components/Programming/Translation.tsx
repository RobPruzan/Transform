import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Button, Card, DropdownButton, Tab, Tabs } from "react-bootstrap";
import gpt3Get from "../../connection/api";
import Settings from "../Settings";
import { Dropdown } from "semantic-ui-react";

// export type Props = {

//   changeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
//   clickHandler: () => void;
// };

const Translation = () => {
  const [gpt3Prompt, setGpt3Prompt] = useState<string>("");
  const [gpt3Response, setGpt3Response] = useState<string>("");
  const [codeExplain, setCodeExplain] = useState<string[]>([""]);

  const Translate = (language1: string, language2: string) => {
    return `Translate `;
  };
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("huhhh", gpt3Response);
    setGpt3Prompt(e.target.value);
  };

  const clickHandler = () => {
    console.log("cleck");
    gpt3Get(gpt3Prompt).then((res: { data: SetStateAction<string> }) => {
      setGpt3Response(res.data);
    });
  };

  const codeExplainHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //If there is a line break, add to an empty string a new line indictator, if not, add the add the character to the string
    const codeExplain = event.target.value.split("\n");
    setCodeExplain(codeExplain);

    console.log(codeExplain);
  };

  return (
    // <div className="container">
    //   <div className="row justify-content-md-center">
    //     <div className="col col-lg-2">1 of 3</div>
    //     <div className="col-md-auto">Variable width content</div>
    //     <div className="col col-lg-2">3 of 3</div>
    //   </div>

    //   <div className="row">
    //     <div className="col">
    //       <br />

    //       <textarea cols={40} rows={17} onChange={changeHandler} />
    //       <Button onClick={clickHandler} color="primary">
    //         Translate
    //       </Button>
    //     </div>
    //     <div className="col">
    //       <DropdownButton id="dropdown-basic-button" title="Pick a language">
    //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>{" "}
    //       </DropdownButton>
    //     </div>

    //     <div className="col">
    //       <textarea cols={40} rows={17} onChange={changeHandler} />
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="row">
        <div className="col">
          <textarea
            onKeyDown={(event) => {
              //Allowing tabbing, so prevent default on tab key code, and then insert 4 spaces
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
            onChange={changeHandler}
            rows={20}
            cols={50}
          ></textarea>

          <div className="translate-buttons">
            <Button onClick={clickHandler}>Explain</Button>
            <DropdownButton id="dropdown-basic-button" title="Pick a language">
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div className="col">
          <textarea disabled={true} rows={20} cols={50} value={gpt3Response} />
        </div>
        <div className="w-100"></div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
};

export default Translation;
