

function registerform(){

    let first_name = document.querySelector('.name').value
     let first_name_size = first_name.length

     let last_name = document.querySelector('.lastname').value
     let last_name_size = first_name.length


     let phone = document.querySelector('.phone').value
     let phone_size = phone.length

     let mail = document.querySelector('.email').value
     let mail_size = mail.length

     let password = document.querySelector('.password').value
     let password_size = password.length


     if(first_name_size < 3){

       document.querySelector('.success').innerText = ""

        document.querySelector('.error').innerText = 'Name is required minium 3 characters'

     }else if (last_name_size < 3){
            document.querySelector('.success').innerText = ""
    
            document.querySelector('.error').innerText = 'Please type your last name'
    
     }else if (phone_size !== 10){
        document.querySelector('.success').innerText = ""

        document.querySelector('.error').innerText = 'Phone number should be 10 digit'

     }else if (mail_size < 6){
        document.querySelector('.success').innerText = ""

        document.querySelector('.error').innerText = 'Please type your correct mail'

     }else if (password_size < 2){
        document.querySelector('.success').innerText = ""

        document.querySelector('.error').innerText = 'Your password is wrong'

     }else{
        document.querySelector('.error').innerText = ""

        document.querySelector('.success').innerText = 'Your registation submit successfully'

     }


}