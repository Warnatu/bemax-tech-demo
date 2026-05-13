const cart = [];

function addToCart(product, price){

  cart.push({product, price});

  alert(product + " agregado al carrito");

  updateCart();
}

function updateCart(){

  const cartCount = document.getElementById("cart-count");

  if(cartCount){
    cartCount.innerText = cart.length;
  }

}

function generateInvoice(){

  const invoice = document.getElementById("invoice");

  invoice.style.display = "block";

}

function fakeScanner(){

  alert("Código detectado: 7701234567890");
}

function adminLogin(){

  alert("Entrando como administrador demo");
}

function clientLogin(){

  alert("Entrando como cliente demo");
}

setInterval(()=>{

  const timers = document.querySelectorAll(".timer");

  timers.forEach(timer=>{

    let time = timer.innerText;

    let parts = time.split(":");

    let h = parseInt(parts[0]);
    let m = parseInt(parts[1]);
    let s = parseInt(parts[2]);

    s--;

    if(s < 0){
      s = 59;
      m--;
    }

    if(m < 0){
      m = 59;
      h--;
    }

    if(h < 0){
      h = 0;
      m = 0;
      s = 0;
    }

    timer.innerText =
      String(h).padStart(2,'0') + ":" +
      String(m).padStart(2,'0') + ":" +
      String(s).padStart(2,'0');

  });

},1000);
