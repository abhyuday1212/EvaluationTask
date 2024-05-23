import React from "react";
import { useState,useEffect } from "react";

const Page2 = () => {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  return (
    <div id="page2">
      <h1 className="w-full flex text-4xl font-bold flex-row justify-center items-center mt-2">
        Update Remark
      </h1>

      <div className=" ">
        <Input1 configId={configId} setConfigId={setConfigId} />
        <Input2 remark={remark} setRemark={setRemark} />
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
        <Button
          configId={configId}
          remark={remark}
          setRemark={setRemark}
          setFetchedData={setFetchedData}
        />
        <DisplayData data={fetchedData} />
      </div>
    </div>
  );
};

function Input1({ configId, setConfigId }) {
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
        htmlFor="updateInput1Id"
        style={{
          fontWeight: 600,
          padding: "4px 6px",
        }}
      >
        Configuration Id:
      </label>

      <input
        id="updateInput1Id"
        type="text"
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

function Input2({ remark, setRemark }) {
  const handleRemarkChange = (e) => {
    // console.log(e.target.value);
    setRemark(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="updateRemark"
        style={{
          fontWeight: 600,
          padding: "4px 6px",
        }}
      >
        Update Remark:
      </label>
      <input
        type="text"
        name="remark"
        id="updateRemark"
        value={remark}
        onChange={handleRemarkChange}
        placeholder="Update Remark..."
        style={{
          border: "1px solid grey",
          padding: "2px 4px",
        }}
      />
    </div>
  );
}

function Button({ configId, remark, setFetchedData }) {
  async function handleSubmit() {
    // console.log("Button component : ", configId);
    try {
      const response = await fetch(
        `http://localhost:8080/api/configurations/${configId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ remark }),
        }
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
  const [displayMessage, setDisplayMessage] = useState("");

  const handleDisplayMessage = (message) => {
    setDisplayMessage(message);

    setTimeout(() => {
      setDisplayMessage("");
    }, 2500);
  };

   useEffect(() => {
    if (data && data.message) {
      handleDisplayMessage(data.message);
    }
  }, [data]);

  return (
    <div
      style={{
        marginLeft: "6px",
        fontWeight: 600,
      }}
    >
      <p>{displayMessage}</p>
    </div>
  );
}

export default Page2;
