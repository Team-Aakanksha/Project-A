

window.onload=function(){
    document.getElementById("signup_button").addEventListener("click",async function(){
        const email= document.getElementById('signup_email').value;
        const password= document.getElementById('signup_password').value;
        const username=document.getElementById('username_signup').value;
        const confp=document.getElementById('signup_conpassword').value;
        if(password==confp){
        const data = await axios.post("http://localhost:4000/signup",{
            email,
            password,
            username
        })

        console.log(data)
    }else{
        alert("Your password and confirm password are not same");
    }
})  

document.getElementById("login_button").addEventListener("click",async function(){
    const email= document.getElementById('login_email').value;
    const password= document.getElementById('login_password').value;
    const data=await axios.post("http://localhost:4000/login",{
        email,
        password
    })
})


}
