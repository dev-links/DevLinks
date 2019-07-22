const isEmpty =(string)=>{
    if(string.trim() === '') return true;
    else return false;
}

const isEmail = (email) =>{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}

exports.validateRegisterData = (data) =>{
    let errors = {};
    
    if(isEmpty(data.email)){
        errors.email ='Must not be empty'
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address'
    }
    
    if(isEmpty(data.password)) errors.password= 'Must not be empty';
    
    if(isEmpty(data.handle)) errors.handle= 'Must not be empty';

    return{
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateLoginData = (data) =>{
    let errors = {};

    if(isEmpty(data.email))errors.email= 'Must not be empty';
    if(isEmpty(data.password))errors.password = "Must not be empty";

    return{
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceUserDetails = (data) => {
    let userDetails = {};
    //Profile card
    if(!isEmpty(data.firstName.trim())) userDetails.firstName = data.firstName;
    if(!isEmpty(data.lastName.trim())) userDetails.lastName = data.lastName;
    if(!isEmpty(data.jobTitle.trim())) userDetails.jobTitle = data.jobTitle;
    if(!isEmpty(data.location.trim())) userDetails.location = data.location;
    //Contact info
    if(!isEmpty(data.phoneNumber.trim())) userDetails.phoneNumber = data.phoneNumber;
    if(!isEmpty(data.address.trim())) userDetails.address = data.address;
    if(!isEmpty(data.birthDay.trim())) userDetails.birthDay = data.birthDay;
    if(!isEmpty(data.website.trim())){
        if(data.website.trim().substring(0,4) !== 'http'){
            userDetails.website = `http://${data.website.trim()}`
        }else userDetails.website = data.website;
    }
    //Additional info
    if(!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if(!isEmpty(data.skills.trim())) userDetails.skills = data.skills;
    if(!isEmpty(data.experience.trim())) userDetails.experience = data.experience;
    if(!isEmpty(data.education.trim())) userDetails.education = data.education;
    
    
    return userDetails
}