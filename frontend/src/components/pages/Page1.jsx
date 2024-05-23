import React, { useState } from "react";
// Frontend: Task1
const Page1 = () => {
  const [configId, setConfigId] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div id="page1">
      <h1>Fetch config</h1>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input configId={configId} setConfigId={setConfigId} />
        <Button configId={configId} setFetchedData={setFetchedData} />
        <DisplayData data={fetchedData} />
      </div>
    </div>
  );
};

function Input({ configId, setConfigId }) {
  const handleIdChange = (e) => {
    // console.log(e.target.value);
    setConfigId(e.target.value);
  };

  return (
    <input
      type="text"
      value={configId}
      onChange={handleIdChange}
      placeholder="Input Config Id..."
    />
  );
}
function Button({ configId, setFetchedData }) {
  async function handleSubmit() {
    // console.log("Button component : ", configId);
    try {
      const response = await fetch(
        `http://localhost:8080/api/configurations/${configId}`
      );

      if (response.status != 200) {
        console.log(response);
      }

      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return <button onClick={handleSubmit}>Submit</button>;
}

function DisplayData({ data }) {
  //   console.log("Display Data", data);
  return (
    <div>
      {data.length > 0 ? (
        //   Iterating over each element of the data array
        data.map((subArray, index) => (
          <div key={index}>
            {/*Now Iterating over each subarray */}
            {subArray.join(", ")}
          </div>
        ))
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
}

export default Page1;
