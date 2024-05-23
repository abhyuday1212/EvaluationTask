import React from "react";
import { useState } from "react";

const Page1 = () => {
  const [fetchedData, setFetchedData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const configId = "vfdv";

    const response = await fetch(`/api/configurations/${configId}`);

    if (!response.ok) { 
      console.error("Error fetching data:", response.message);
      return;
    }

    const data = await response.json();
    setFetchedData(data); 
  }
  return (
    <div id="page1">
      <h1>Fetch config</h1>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <input type="text" placeholder="Input Config Id..." />
        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page1;
