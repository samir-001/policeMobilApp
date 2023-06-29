export const validString = (value)=>{
    
    const reg = /([a-zA-z]{3,}[ ]){2}/gm;
    return reg.test(value)? result = null :result = "الوصف يحب الايقل عن 10 كلمات " 
     
    }

