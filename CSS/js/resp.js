// burger = document.querySelector('.burger')
// navbar = document.querySelector('.navbar')
// navList = document.querySelector('.nav-list')
// rightnav = document.querySelector('.rightnav')


// burger.addEventListner('click',()=>
// {
//     navbar.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
//     rightNav.class.toggle('v-class-resp');

// })

function subscribed(){
    document.getElementById("subscribe").innerHTML="Unsbscribe";
    let text = document.getElementById("subscribe").innerHTML;
    console.log(text);
    // if(text=="unsbscribe"){
    //     document.getElementById("subscribe").innerHTML="subscribe"
    // }

}
function subscribed1(){
    document.getElementById("subscribe").innerHTML="Subscribe";
    let text = document.getElementById("subscribe").innerHTML;
    console.log(text);
    // if(text=="unsbscribe"){
    //     document.getElementById("subscribe").innerHTML="subscribe"
    // }

}
var fn3 = (function() {
    var first = true;
    return function() {
      first ? fn1() : fn2();
      first = !first;
    }
  })();
  
  function fn1() {
    document.getElementById("subscribe").innerHTML="Unsbscribe";
    console.log(1);
  };
  function fn2() {
    document.getElementById("subscribe").innerHTML="Subscribe";
    console.log(2);
  };