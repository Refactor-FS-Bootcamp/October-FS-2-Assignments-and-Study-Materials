const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.ifwmjjx.mongodb.net/taskManagerDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})