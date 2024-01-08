//counter design 
document.addEventListener("DOMContentLoaded", ()=>{
   function counter(id,start,end,duration){
      let object=document.getElementById(id),
      current=start,
      range=end - start,
      increment=end>start? 1: -1,
      step=Math.abs(Math.floor(duration / range)),
      timer= setInterval(()=>{
current +=increment;
object.textContent= current;
if (current == end){
   clearInterval(timer);
}
      }, step)
   }
   counter("counter1", 0, 1387, 3000);
   counter("counter2", 0, 2121, 3000);
   counter("counter3", 0, 3237, 3000);
   counter("counter4", 0, 4190, 3000);
});

