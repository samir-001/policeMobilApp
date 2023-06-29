import {isRequried,validPhoneNumber,validString }from './validationRules'


function validationConditions(rule,value){

 switch(rule){
        case "required":
            return isRequried(value);
        case "validphone":
            return validPhoneNumber(value);
        case "validDescribtion":
            return validString(value)
        default:
            []
    }}
    
export const validator = (rules ,value)=>{ 
    let errors = []

    for (var i=0; i<rules.length; i++){
       let error = validationConditions(rules[i],value)
       
        if(error){
            errors.push(error)  
        }
        
    } 
    return errors
}
