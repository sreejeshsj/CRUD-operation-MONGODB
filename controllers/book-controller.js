const BookModel = require("../model/Book");

const getAllBooks = async (req, res) => {
  try {
    const retriveAll = await BookModel.find({});
    res.status(200).json({
      success: true,
      message: "Retrived All Record Successfully",
      data: retriveAll,
    });
  } catch (err) {
    console.log("Error", err);
  }
};
const getSingleBookById = async (req, res) => {
  try {
    const retriveById = await BookModel.findById(req.params.id);
    res.status(200).json({
      message: "Retrived Successfully",
      data: retriveById,
    });
  } catch (err) {
    console.log("error", err);
  }
};
const addNewBook = async (req, res) => {
  try {
    const formData = req.body;
    const addBook = await BookModel.create(formData);
    if (addBook) {
      res.status(200).json({
        success: true,
        message: "Book is add successfully",
        data: addBook,
      });
    }
  } catch (err) {
    res.json(err);
  }
};
const updateBook = async (req, res) => {

  try{
    const formData=req.body
    const updateBook=await BookModel.findByIdAndUpdate(req.params.id,formData,{new : true})
    if (!updateBook){
      res.status(404).json({
        message:"Book is not Found"
      })
    }else{
      res.status(200).json({
        message:"Book is updatded Successfully",
        data:updateBook
      })
    }
  }catch(err){

  }
  
};
const deleteBook = async (req, res) => {
  try{
    const deleteById= await BookModel.findByIdAndDelete(req.params.id)
    if (!deleteById){
      res.status(404).json({
        message:"Book is not found"
      })
    }else{
       res.status(200).json({
      message:"Deleted Successfully",
      data:deleteById
    })
    }
   
  }catch(err){
    console.log("Error",err)
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
