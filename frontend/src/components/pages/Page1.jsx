import React, { useState } from "react";
// Frontend: Task1
const Page1 = () => {
  const [configId, setConfigId] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div id="page1">
      <h1 className="w-full flex text-4xl font-bold flex-row justify-center items-center mt-2">
        Fetch config
      </h1>

      <div className="w-full">
        <Input configId={configId} setConfigId={setConfigId} />

        <div className="w-full flex">
          <strong
            style={{
              marginLeft: "6px",
              fontWeight: 600,
            }}
          >
            Suggested Ids:
          </strong>
          <p className="flex-grow"> &nbsp;qwertyuiop,&nbsp; awnhsuikaj</p>
        </div>

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
    <div
      style={{
        margin: "6px 0px",
        maxWidth: "fitContent",
      }}
    >
      <label
        htmlFor="input1ID"
        style={{
          fontWeight: 600,
          padding: "4px 6px",
        }}
      >
        Configuration Id:
      </label>

      <input
        id="input1ID"
        type="text"
        required
        value={configId}
        onChange={handleIdChange}
        placeholder="Input Config Id..."
        style={{
          border: "1px solid grey",
          padding: "  2px 4px",
        }}
      />
    </div>
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

  return (
    <div
      style={{
        margin: "4px 6px",
        fontWeight: 600,
        width: "4rem",
        border: "1px solid black",
      }}
    >
      <button className="w-full submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

function DisplayData({ data }) {
  //   console.log("Display Data", data);
  return (
    <div
      style={{
        marginLeft: "6px",
        fontWeight: 600,
      }}
    >
      {data.length > 0 ? (
        //   Iterating over each element of the data array
        data.map((subArray, index) => (
          <div key={index}>
            {/*Now Iterating over each subarray */}
            {subArray.join(", ")}
          </div>
        ))
      ) : (
        <p>{data.error}</p>
      )}
    </div>
  );
}

export default Page1;
