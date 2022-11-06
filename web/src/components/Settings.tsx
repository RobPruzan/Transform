import { useState } from "react";
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

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label htmlFor="temperature">Temperature</label>
        <input
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
          id="model"
          value={settings.model}
          onChange={(e) => setSettings({ ...settings, model: e.target.value })}
        >
          <option value="davinci-2">Davinci 2</option>
          <option value="davinci-2">Davinci 2</option>
          <option value="davinci-2">Davinci 2</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
