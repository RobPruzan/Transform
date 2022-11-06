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
  const [language, setLanguage] = useState<string>("Python");
  const [codeExplain, setCodeExplain] = useState<string[]>([""]);

  const Translate = (language1: string, language2: string) => {
    return `Translate `;
  };
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGpt3Prompt(e.target.value);
  };

  const languageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const clickHandler = () => {
    const prompt = `Translate the following code to valid ${language} (do your best to match the functionality)- ${gpt3Prompt} `;
    console.log(prompt);
    gpt3Get(prompt).then((res: { data: SetStateAction<string> }) => {
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
            onChange={changeHandler}
            rows={20}
            cols={50}
          ></textarea>

          <div className="translate-buttons">
            <Button onClick={clickHandler}>Explain</Button>
            <span>
              <input
                onChange={languageHandler}
                style={{ width: "225px" }}
                className="form-control form-control-sm"
                placeholder="Enter language to convert to"
              />
            </span>
          </div>
        </div>

        <div className="col">
          <textarea disabled={true} rows={20} cols={50} value={gpt3Response} />
        </div>
        <div className="w-100"></div>
      </div>
    </div>
  );
};

export default Translation;
