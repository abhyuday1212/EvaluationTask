import mongoose from "mongoose";

const configurationSchema = new mongoose.Schema({
    configId: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
    remark: String,
});

const Configuration = mongoose.model('Configuration', configurationSchema);

export { Configuration }