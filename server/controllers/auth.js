const login = (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};
const signup = ()=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};

module.exports={signup,login}