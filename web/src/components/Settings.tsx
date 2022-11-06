import { useEffect, useState } from "react";
export type Gpt3Settings = {
  temperature: number;
  maxLength: number;
  model: string;
};
const Settings = () => {
  const [settings, setSettings] = useState<Gpt3Settings>({
    temperature: 0.7,
    maxLength: 20,
    model: "davinci-2",
  });
  useEffect(() => {
    console.log(settings);
  });

  return (
    <div className="settings">
      <div className="form-control">
        <h1>Settings</h1>
        <div>
          <label htmlFor="temperature">Temperature</label>
          <input
            step={0.01}
            min={0}
            max={1}
            className="form-control"
            type="number"
            id="temperature"
            value={settings.temperature}
            onChange={(e) =>
              setSettings({
                ...settings,
                temperature: parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div>
          <label htmlFor="maxLength">Max Length</label>
          <input
            max={4000}
            min={500}
            defaultValue={500}
            className="form-control"
            type="number"
            id="maxLength"
            value={settings.maxLength}
            onChange={(e) =>
              setSettings({ ...settings, maxLength: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <select
            className="form-control"
            id="model"
            value={settings.model}
            onChange={(e) =>
              setSettings({ ...settings, model: e.target.value })
            }
          >
            <option value="text-davinci-002">text-davinci-2</option>
            <option value="text-curie-001">Davinci 2</option>
            <option value="davinci-2">Davinci 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
