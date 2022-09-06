export function validateLogin(value){
    var error=""
    if(value.length<3 || value.length>15){
        error="username Invalid"
    }
    return error
}