export const validPhoneNumber = (value)=>{
    
    const reg = /\d{10}/;
    return reg.test(value)? result = null : result = "ادخل رقم موبايل صحيح " 
    }
