function likes(element){
    console.log("algo")
    let like = document.querySelector(".like");
    let gusta = parseInt(like.innerText);
    gusta++;
    like.innerText = gusta + "like(s)";
}