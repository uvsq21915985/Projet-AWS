let button = document.getElementById("login");

button.addEventListener("click",ev =>login(ev));


let errorMessage = document.getElementById("error");

 function login(event){
    // don't refresh the page
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    /*https://api.allorigins.win/raw?url=*/
   
  
     fetch("http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/login/",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: username,
                password: password
            })
        
}).then(response =>{
    if (!response.ok){
        console.log(response);
        errorMessage.innerHTML = "erreur dans l'authentification";
    }
    else{
        console.log("user found and authentified");
        // save the token in the session storage 
          sessionStorage.setItem("token",response.json().token);
        window.location.href = "./videoChat.html"
    }
});
}


