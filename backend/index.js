import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./database/db.js";
import { Configuration } from "./database/schema.js";
import { updateRemark } from "./Validation/Zod.js"
import mongoose from "mongoose";


const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())
connectDB()

// Backend: Task1
/* #- Methodology
1: Connected to DB
2: Created a Configuration Schema by looking up to DB
3: Using the Schema, accessed the DB collection for configuration.
4: From the params, found the configuration Id, basically the user want to access the details of which configId
5: If found the config corresponding to the param, then responding with the data, otherwise that configuration not be existed
*/
app.get("/api/configurations/:id", async (req, res) => {
    try {
        const Id = req.params.id;
        const config = await Configuration.findOne({ configId: Id });

        if (config) {
            return res.status(200).json(config.data);
        } else {
            return res.status(404).json({ message: 'Invalid Id, Configuration not found' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server error');
    }
})

// --------------------------------------------------------------------------------
// backend: Task-2
/*
 #- Methodology
 1: extracted the Id from the params
 2: Parsed the input for zod validation for type checing
 3: If the type of the input is correct then perform the find and update remark operation
 4: Map the key "remark" with the newRemark value for finding and updation
 5: { new: true } , this is used to give the object after update is applied, otherwise default or old remark will be given
*/

app.put("/api/configurations/:id", async (req, res) => {
    try {
        const Id = req.params.id;
        const updatePayload = req.body;

        //pass the payload to zod for type Validation
        const parsePayload = updateRemark.safeParse(updatePayload)

        if (!parsePayload.success) {
            console.log(parsePayload);
            return res.status(400).json({ message: 'Invalid input type, please send a string in the remark input' });
        }

        const { remark: newRemark } = parsePayload.data;

        const updatedConfig = await Configuration.findOneAndUpdate(
            { configId: Id },
            { remark: newRemark },
            { new: true }
        );

        if (updatedConfig) {
            return res.status(200).json({ message: 'success' });
        } else {
            return res.status(404).json({ message: 'Invalid Id, Configuration not found' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server error');
    }
});


app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})