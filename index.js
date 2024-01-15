function sidebar(){
   var li = document.querySelectorAll('header ul li');
   li.forEach((element)=>{
    element.style.display = "block";
   })
   var toggle = document.querySelector('header ul');
   toggle.classList.add("toggle");

}


function closebar(){
    var toggle = document.querySelector('header ul');
    toggle.classList.remove("toggle");
    var li = document.querySelectorAll('header ul li');
    li.forEach((element)=>{
    element.style.display = "";
    })
}


var parent = document.querySelectorAll('header ul a')[0];
var parent1 = document.querySelectorAll('header ul a')[1];
var parent2 = document.querySelectorAll('header ul a')[2];
var parent3 = document.querySelectorAll('header ul a')[3];
var parent4 = document.querySelectorAll('header ul a')[4];
parent.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    closebar();
    window.location.href = "/#about";
})

parent1.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    closebar();
    window.location.href = "/#skill";
})

parent2.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    closebar();
    window.location.href = "/#project";
})

parent3.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    closebar();
    window.location.href = "/#contact";
})

parent4.addEventListener("click",function(e){
    e.preventDefault();
    closebar();
    window.location.href = "https://drive.google.com/file/d/1RMitZkpAJxfypQe0WMdWhrwLaViPCOZ3/view";
})

var form = document.querySelector("form");
form.addEventListener("submit", function(e){
    
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;    
    
    var contact = {};
    contact.name = name;
    contact.email = email;
    contact.phone  = phone;
    contact.message = message;
    
    alert(`Thank you for contacting me, ${name}!`);
    window.location.href = "https://www.linkedin.com/in/sohitmishra/";
});
