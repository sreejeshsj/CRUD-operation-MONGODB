const mongoose=require('mongoose')

//schema

const BookSchema=new mongoose.Schema({
    title:{
        type : String,
        required:[true, 'Book title required'] ,
        trim : true,
        maxLength : [100, 'Book title can not be more than 100 charaters']

    },
    author:{
        type : String,
        required:[true, 'Author name required'] ,
        trim : true,
       

    },
    year: {
        type : Number,
        required : [true, 'Publication year is required'],
        min : [1000, 'year must be atleast 1000'],
        max :[new Date().getFullYear(),'Year can not be feature']
    },
    createdAt:{
        type:Date,
        default : Date.now()
    }
})

//model
module.exports=mongoose.model('Book',BookSchema)