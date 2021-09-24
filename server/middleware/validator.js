const { body, validationResult } = require('express-validator');


exports.Register=[
    body("name","name is required").notEmpty(),
    body("email","email valid").isEmail(),
    body('password','password must be at least 8 characters').isLength({min:8}),
    body('tel','phone number must be 8 characters').isLength({}),

]
 
exports.loginRules=[

    body("email","email valid").isEmail(),
    body('password','password must be at least 8 characters').isLength({min:8})
]

exports.Validator=(req,res,next)=>{
    const result=validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).send({errors:result.array()})
    }
    next()
}