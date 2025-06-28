const mongoose = require("mongoose")

mongoose.connect("mongodb://database/mydatabase")
    .then(db=>console.log("DB is conected to ", db.connection.host))
    .catch(err => console.error(err));