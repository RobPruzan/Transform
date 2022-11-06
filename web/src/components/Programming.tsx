import { SetStateAction, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import gpt3Get from "../connection/api";
import Settings from "./Settings";

const Programming = () => {
  const [gpt3Prompt, setGpt3Prompt] = useState<string>("");
  const [gpt3Response, setGpt3Response] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGpt3Prompt(e.target.value);
  };
  const clickHandler = () => {
    gpt3Get(gpt3Prompt).then((res: { data: SetStateAction<string> }) => {
      setGpt3Response(res.data);
      console.log(gpt3Response);
      console.log(res.data);
    });
  };

  return (
    <>
      <div>
        <input type="text" onChange={changeHandler} />
        <Button onClick={clickHandler} color="primary">
          Submit
        </Button>
      </div>

      <textarea rows={10} cols={50} value={gpt3Response} disabled={true}>
        {gpt3Response}
      </textarea>

      <Settings />
    </>
  );
};
export default Programming;
