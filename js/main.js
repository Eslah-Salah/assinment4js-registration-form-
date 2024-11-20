const quotes=[{
    quoute:`"You miss 100% of the shots you don't take."`,
    writer:`--Wayne Gretzy`
}
,{
    quoute:`"It's not what happens to you, but how you react to it that matters."`,
    writer:`--Epictetus`
}
,{
    quoute:`"Do not take life too seriously. You will not get out alive."`,
    writer:`--Elbert Hubbard`
}
,{
    quoute:`"The best revenge is massive success."`,
    writer:`--Frank Sinatra`
}
,{
    quoute:`"Resentment is like drinking poison and waiting for your enemies to die."` ,
    writer:`--Nelson Mandela`
}
,]



let btn =document.querySelector("#Qbtn");
let quoute =document.querySelector(".quote");
let writer =document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random =Math.floor(Math.random() *quotes.length);
    quoute.innerHTML=quotes[random].quoute;
    writer.innerHTML=quotes[random].writer;
})







