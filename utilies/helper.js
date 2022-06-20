module.exports = { 
    fMsg : async(res,msg="",result=[]) => res.status(200).json({res:true,msg,result})
}