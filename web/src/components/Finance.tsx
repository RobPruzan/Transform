import {
  FormEvent,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button, ButtonGroup, InputGroup } from "react-bootstrap";
import gpt3Get from "../connection/api";
import Settings from "./Settings";
import Form from "react-bootstrap/Form";

import React from "react";
export type Gpt3Data = {
  savingType: string;
  riskTolerance: string;
  totalIncome: string;
  homeExpences: string;
  transportation: string;
  miscellaneous: string;
};
const Finance = () => {
  const [gpt3Prompt, setGpt3Prompt] = useState<string>("");
  const [gpt3Response, setGpt3Response] = useState<string>("");
  // const [sliderValue, setSliderValue] = useState<string>("");
  // const [income, setIncome] = useState<string>("")
  const [gpt3Data, setGpt3Data] = useState<Gpt3Data>({
    savingType: "",
    riskTolerance: "",
    totalIncome: "",
    homeExpences: "",
    transportation: "",
    miscellaneous: "",
  });
  const handleSubmit = (e: any) => {
    const prompt = `Give me a direct answer, I am saving for ${
      gpt3Data.savingType
    } and I am ${gpt3Prompt} years old. and make about ${
      gpt3Data.totalIncome
    } a year, and take home ${
      Number(gpt3Data.totalIncome) -
      (Number(gpt3Data.homeExpences) +
        Number(gpt3Data.transportation) +
        Number(gpt3Data.miscellaneous))
    } a year. What should I do with this money to give the best return on investment with a ${
      gpt3Data.riskTolerance
    }/10 risk tolerance. What is also the possible return on investment on my money? Note, you can use ideas like the 50/30/20 rule to help me reach my goals, also please take all of these factors into account.`;
    gpt3Get(prompt).then((response) => {
      setGpt3Response(response.data);
    });
  };

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
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className=" mb-3 financeTxt">Long-term Saving</div>
            <div className="md-3">What are you trying to save for?</div>
            <div className=" mb-3">
              <Form.Check
                type="radio"
                aria-label="radio 1"
                name="group1"
                label="Retirement"
              />
              <Form.Check
                type="radio"
                aria-label="radio 1"
                name="group1"
                label="Financial Freedom"
              />
              <Form.Check
                type="radio"
                aria-label="radio 1"
                name="group1"
                label="Down Payment"
              />
              <Form.Check
                type="radio"
                aria-label="radio 1"
                name="group1"
                label="Emeergancy Fund"
              />
            </div>
            Age:
            <div>
              <input className=" mb-3" type="text" onChange={changeHandler} />
            </div>
            Risk Tolorance: {gpt3Data?.riskTolerance}
            <div>
              <Form.Range
                className="w-75  mb-3"
                id="customRange"
                min={0}
                max={10}
                onChange={(event) => {
                  setGpt3Data({
                    ...gpt3Data,
                    riskTolerance: event.target.value,
                  });
                }}
                bsPrefix={"form-range"}
                defaultValue={0}
              ></Form.Range>
            </div>
            <div>
              Total Income:
              <InputGroup className="w-auto mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  onChange={(event) => {
                    setGpt3Data({
                      ...gpt3Data,
                      totalIncome: event.target.value,
                    });
                  }}
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              Home Expenses:
              <InputGroup className="w-auto mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  onChange={(event) => {
                    setGpt3Data({
                      ...gpt3Data,
                      homeExpences: event.target.value,
                    });
                  }}
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              Transportation:
              <InputGroup className="w-auto mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  onChange={(event) => {
                    setGpt3Data({
                      ...gpt3Data,
                      transportation: event.target.value,
                    });
                  }}
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              Miscellaneous:
              <InputGroup className="w-auto mb-3">
                <InputGroup.Text> $</InputGroup.Text>
                <Form.Control
                  onChange={(event) => {
                    setGpt3Data({
                      ...gpt3Data,
                      miscellaneous: event.target.value,
                    });
                  }}
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <Button onClick={handleSubmit} color="primary">
                Submit
              </Button>
            </div>
          </div>
          <div className="col-md ">
            <div className="financeTxt">
              List of the Least Risky to Riskiest Investments
            </div>
            <ol>
              <li>High-yield savings accounts</li>
              <li>Series I savings bonds</li>
              <li>Short-term certificates of deposit</li>
              <li>Money market funds</li>
              <li>Treasury bills, notes, bonds and TIPS</li>
              <li>Corporate bonds</li>
              <li>Dividend-paying stocks</li>
              <li>Preferred stocks</li>
              <li>Money market accounts</li>
              <li>Fixed annuities</li>
            </ol>
            <h3>Artificial Intelligence Guidance</h3>
            <div className="financeTxt">
              <textarea
                rows={15}
                cols={60}
                value={gpt3Response}
                disabled={true}
              >
                {gpt3Response}
              </textarea>
            </div>
          </div>
          <div className="col-md">
            <div className="setting">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Finance;
