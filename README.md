# Internship Task

This is Evaluation Task made for under CodeRower Software Pvt Ltd. Completed by Abhyuday Pratap Singh.

---

# 1.0 Methodology used for Various Tasks:

## Backend

### Task 1

1. Connected to DB.
2. Created a Configuration Schema by looking up to DB.
3. Using the Schema, accessed the DB collection for configuration.
4. From the params, found the configuration Id, basically the user wants to access the details of which configId.
5. If found the config corresponding to the param, then responding with the data, otherwise that configuration does not exist.

### Task 2

1. Extracted the Id from the params.
2. Parsed the input for Zod validation for type checking and performed proper error handling.
3. If the type of the input is correct, then performed the find and update remark operation.
4. Mapped the key "remark" with the newRemark value for finding and updating.
5. Used `{ new: true }` to return the updated object; otherwise, the default or old remark will be given.

---

## Frontend

### Task 3

1. In Page1, two states are used: `configId` and `fetchedData`.
2. The Button component handles the data fetching logic.
3. The code includes error handling within the `handleSubmit` function.
4. The DisplayData component takes the `data` prop and conditionally renders the content.

### Task 4

1. **Components Used**

   - `Input1`: Renders the input field for the configuration ID.
   - `Input2`: Renders the input field for the update remark.
   - `Button`: Handles the submit logic, sending a PUT request to update the remark.
   - `DisplayData`: Displays a temporary message based on the fetched data (success or error message).

2. **Use of `useState` Hook**

   - **Page2**: Manages `configId`, `remark`, and `fetchedData` states.
   - **DisplayData**: Manages `displayMessage` state for temporary messages.

3. Users enter the configuration ID and update remark in their respective input fields.

4. Upon a successful response (status code 200), the fetched data is stored in the `fetchedData` state.

5. The `DisplayData` component utilizes an additional state `displayMessage`.

6. If data exists and has a `message` property (potentially from the backend), it calls `handleDisplayMessage` to show a temporary message as part of error handling and displaying the backend response.

---

# 2.0 Prequisite
- Node version 21.1.0
- MoongoDB (atlas) account
- Docker Desktop should be in your computer for Docker installation only.

---

# 3.0 Installation

# Method 1: To Run the project using docker

- Step 1: Clone the Repo

```bash
 git clone git@github.com:abhyuday1212/EvaluationTask.git
```

- Step 2: Go the EvaluationTask folder & run

```bash
 docker-compose up
```

- Step 3: Frontend Url

```bash
 http://localhost:5173/
```

- Step 4: Backend Url for hitting the server using postman

```bash
 http://localhost:8080/
```

---

</br>

# Method 2: To run the project Manually:

Install the project by cloning this repo from your terminal.

- Step 1: Clone the Repo

```bash
 git clone git@github.com:abhyuday1212/EvaluationTask.git
```

- Go to the #root folder, open terminal in VS-Code and write this command

```bash
 cd backend
```

- Install the dependencies using this command for backend

```bash
 npm i
```

- If any ERR ocured in terminal the use this command and reinstall the dependencies using this line

```bash
  npm i --force
```

- Install the dependencies using this command for frontend

```bash
  cd frontend
```

- If any ERR occures in terminal, then use this command and reinstall the dependencies using this line

```bash
  npm i --force
```

### Run the backend server.

- Goto #root folder and run these commands in your powershell.

- Open a new powershell and write this command to move to backend directory.

```bash
  cd backend
```

```bash
  npm start
```

- If terminal returns Port started successfully at ${PORT} & Databse connected successfully than you are good to go.

### Open a new powershell in your VS-Code and write this command to move to frontend directory from the root folder and start the server.

```bash
  cd frontend
```

```bash
  npm run dev
```

---

# 6.0 Tech Stack

_Client:_ React(Build using Vite) , TailwindCSS, VanilaCss.

_Server:_ MongoDB , Express.js , Node.js .

# 7.0 Docker iamges uploaded here

```bash
https://hub.docker.com/repository/docker/abhyuday1212/client/general
```

```bash
https://hub.docker.com/repository/docker/abhyuday1212/backend/general
```

### Note: Packages are mentioned in the respective folder.
