import mongoose from "mongoose";
mongoose.connect("mongodb+srv://francisco_2004:tamalito2004@josefrancisco.x1xhfba.mongodb.net/school_control?retryWrites=true&w=majority&appName=JoseFrancisco")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.error(err)); 
export default mongoose;