document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type:'loop',
        autoplay:true,
        interval:2000
    } );
    splide.mount();
  } );
  const burger=document.getElementById("burger");
  const ul=document.querySelector("ul")
  console.log(ul);
  
  burger.addEventListener("click",()=>{
    burger.style.display="none"
    ul.style.top="0%"
    const trash=document.createElement("li");
    trash.innerHTML='<i class="fa-solid fa-xmark"></i>';
    trash.classList.add("xmark");
    ul.appendChild(trash);
    // ul.classList.toggle('nave');
    // burger.style.display="block"
    if (trash) {
      trash.addEventListener("click",()=>{
        ul.style.top="-100%"
        burger.style.display="block"
      })
    }
  })
  const but1 = document.querySelector(".but00");
  const but2 = document.querySelector(".but0");
  const but3 = document.querySelector(".but1");
  const femme = document.querySelector(".femme");
  const homme = document.querySelector(".homme");
  const enfant = document.querySelector(".enfant");
  const tout = document.querySelector(".tout");
  const spro = document.querySelector(".spro");

  but1.addEventListener("click", () => check("femme"));
  but2.addEventListener("click", () => check("enfant"));
  but3.addEventListener("click", () => check("homme"));

  function check(type) {
      tout.style.display = "block";
      spro.style.display = "none";
      homme.style.display = "none";
      femme.style.display = "none";
      enfant.style.display = "none";

      if (type === "femme") {
          femme.style.display = "grid";
      } else if (type === "enfant") {
          enfant.style.display = "grid";
      } else if (type === "homme") {
          homme.style.display = "grid";
      }

      // Créer bouton retour s'il n'existe pas déjà
      if (!document.querySelector(".bout")) {
          let divButton = document.createElement("div");
          let exit = document.createElement("button");
          exit.textContent = "Retour";
          exit.classList.add("bout");
          divButton.appendChild(exit);
          tout.appendChild(divButton);

          exit.addEventListener("click", () => {
              tout.style.display = "none";
              spro.style.display = "block";
              divButton.remove(); // Supprimer le bouton retour
          });
      }
  }
const btnShop=document.getElementById("carteShop");
const cartShop=document.querySelector(".carte")

btnShop.addEventListener("click",()=>{
  cartShop.classList.add("activee")
  const close=document.querySelector("#close-cart");
  close.addEventListener("click",()=>{
  cartShop.classList.remove("activee")
  })
})
if (document.readyState==="loading") {
  document.addEventListener("DOMContentLoaded",ready)
} else {
  ready()
}


function ready() {
  let cartButtonRemove=document.getElementsByClassName("cart-remove");
  for (let i = 0; i < cartButtonRemove.length; i++) {
    let button = cartButtonRemove[i];
    button.addEventListener("click",removeCart)
  }
  let quantityInput=document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener("change",quantityChange)
  }
  let addCard=document.getElementsByClassName("but")
  
  for (let i = 0; i < addCard.length; i++) {
    const button = addCard[i];
    button.addEventListener("click",addClicked)
  }
  const achat=document.querySelector(".btn-buy");
  achat.addEventListener("click",byCliked)
}
function byCliked() {
  alert("Achat validé");
  let content=document.getElementsByClassName("cart-content")[0];
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild)
  }
  updateTotal()
}

function removeCart(event) {
  let button=event.target;
  button.parentElement.remove()
  updateTotal()
}
function addClicked(event) {
  let button=event.target;
  let cartShop=button.parentElement;
  let title=cartShop.getElementsByClassName("product-title")[0].innerText;
  let price=cartShop.getElementsByClassName("prix")[0].innerText;
  let pcatShop=cartShop.parentElement;
  
  // let img=cartShop.getElementsByClassName("img");
  let imgCart=pcatShop.getElementsByClassName("image")[0].src;
  console.log(imgCart);
  
  addCartShop(title,price,imgCart);
  updateTotal()
}
function addCartShop(title,price,imgCart){
  let cartShopBox=document.createElement("div")
  cartShopBox.classList.add("cart-box")
  let cartContentBox=document.getElementsByClassName("cart-content")[0]
  let CartBoxContent=`<img src="${imgCart}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <i class='bx bxs-trash-alt cart-remove'></i>`
  cartShopBox.innerHTML=CartBoxContent;
  cartContentBox.append(cartShopBox);
  cartShopBox
  .getElementsByClassName("cart-remove")[0]
  .addEventListener("click",removeCart)
  cartShopBox
  .getElementsByClassName("cart-quantity")[0]
  .addEventListener("change",quantityChange)
}
function quantityChange(event) {
  let input=event.target;
  if (isNaN(input.value)||input.value<=0) {
    input.value=1;
  }
  updateTotal()
}
function updateTotal() {
  let cartContent=document.querySelector(".cart-content");
  let cartBox=cartContent.getElementsByClassName("cart-box");
  let total=0;
  for (let i = 0; i < cartBox.length; i++) {
    let cartBoxContent = cartBox[i];
    let cartQuantity=cartBoxContent.getElementsByClassName("cart-quantity")[0];
    let priceElement=cartBoxContent.getElementsByClassName("cart-price")[0]
    let price=parseFloat(priceElement.innerText.replace("$",""))
    let quantity=cartQuantity.value
    total=total + price * quantity
  }
  document.getElementsByClassName("total-price")[0].innerText= "$" + total
}
 const nom=document.getElementById("nom")
  const emaile=document.getElementById("maile")
  const messe=document.getElementById("texter")
  const ob=document.getElementById("object")
  const buttt=document.getElementById("buton")
  console.log(buttt);
  
buttt.addEventListener("click",()=>{
    let nam=document.getElementById("nom").value
    let maile=document.getElementById("maile").value
    let mess=document.getElementById("texter").value
    const nomvide=nam.trim()===""
    const mailvide=maile.trim()===""
    const messvide=mess.trim()===""
    if (nomvide||mailvide||messvide) {
      alert("Veillez remplir les formulaires obligatoires(*)");
    } else {
      sendMail();
    }
    nom.value=""
    emaile.value=""
    messe.value=""
    ob.value=""
})
function sendMail() {
  let params={
    name:document.getElementById("nom").value,
    email:document.getElementById("maile").value,
    subject:document.getElementById("object").value,
    message:document.getElementById("texter").value,
  }
  emailjs.send("service_mwvzf3q","template_f1uecd7",params).then(alert("Message envoyé avec succès"));
}

