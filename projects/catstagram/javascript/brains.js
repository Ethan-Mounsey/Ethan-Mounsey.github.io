function likePhoto(counterName) {

    var currentCount = Number(document.getElementById(counterName).innerHTML)
    document.getElementById(counterName).innerHTML = currentCount + 1;
}
let counter1 = 0;
const user = {
    name:"Ethan",
    name_last:"Mounsey",
    followers:["Ash", "John Null", "Greg T", "Ryan Reynolds", "Zarik H"],
    profile_pic: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/43951049_129427031357970_3559969306412318720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=BJGpeJhWLwwAX8OuyL7&_nc_ht=scontent-atl3-2.xx&oh=00_AfBHnmOm6ipsCZla1qS4E3zIHKoerSNuqEAUhqHV79wPjQ&oe=64A1DE58"
}
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);