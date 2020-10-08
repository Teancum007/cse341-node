const cors = require('cors') // Place this with other requires (like 'path' and 'express')

const corsOptions = {
    origin: "https://cseskjnf341.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://<username>:<username>@cluster0-3dwlw.mongodb.net/test?retryWrites=true&w=majority";