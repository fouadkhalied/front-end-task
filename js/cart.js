







let products = document.querySelector(".products");
let pri = document.querySelector(".price");

window.addEventListener('load',draw())

function draw() {
  let carts_pro = JSON.parse(localStorage.getItem("carts")); 
  products.innerHTML = "";
  let y = carts_pro.map((item)=>
  {
      return `
      <div class="card">
          <img src= ${item.img} class="card-img-top" alt="pic" height="170px">
          <div class="card-body">
            <p class="card-text">Product : ${item.p1}</p>
            <p class="card-text">Price : ${item.p2} $</p>
            <p class="card-text">Category : ${item.p3}</p>
            <div class="buttons">
            <div class="icon_plus d-flex bnb" style="width:30%">
            <p>${item.a}</p>
            <button class="cd" onClick="quantity1(${item.id})"><i class="fas fa-plus"></i></button> 
            <button class="cd" onClick="quantity2(${item.id})"><i class="fas fa-minus"></i></button>
            </div>
            <button id="myId2-${item.id}" class="btn btn-outline-danger removetocar" onClick="removeToCart(${item.id})"><p>remove</p></button>
              <i id="fa-${item.id}" class="fas fa-heart" style="color: grey;"></i>
            </div>
          </div>
        </div>
    </div>`
  })

  products.innerHTML = y.join("")
  pri.innerHTML = "";
  pri.innerHTML += `<h2> total price is ${price()} $</h2>`

  let icon = document.querySelectorAll(".fa-heart")
for (let index = 0; index < icon.length; index++) {
 icon[index].addEventListener('click',()=>
 {
      if(icon[index].style.color == "red"){
        icon[index].style.color = "grey";
      }
    else{
      icon[index].style.color = "red";
   
    }
  })
}

}

function loadCart23() {
  arr = JSON.parse(localStorage.getItem("carts")) || [];
  arrt = JSON.parse(localStorage.getItem("pric")) || [];
}
function removeToCart(id)
{
  let fert = JSON.parse(localStorage.getItem("pric"));
  const index = fert.findIndex(number => number === id);
  if(index !== -1)
           fert.splice(index,1);
  localStorage.setItem("pric" , JSON.stringify(fert));

  ////////////////////////////////////////////////////////////////
  let defr2 = JSON.parse(localStorage.getItem("carts"));
  let choose_item = defr2.find((item)=> item.id === id);
  const index2 = defr2.findIndex(number => number === choose_item);
      if(index2 !== -1)
           defr2.splice(index2,1);
  localStorage.setItem("carts" , JSON.stringify(defr2));
  //console.log(index2);
  //////////////////////////////////////////////////////////////
  loadCart23();
  products.innerHTML = "";
  draw();
}


function quantity1(id)
{
  let sdw = JSON.parse(localStorage.getItem("carts"))
  for (let i = 0; i < sdw.length; i++) {
    if (sdw[i].id===id) {
        sdw[i].a++;
    }
  }
  localStorage.setItem("carts",JSON.stringify(sdw))
  draw()
}

function quantity2(id)
{
  let fert = JSON.parse(localStorage.getItem("carts"))
  let choose_item = fert.find((item)=> item.id === id);
      choose_item.a=0;
      const index = fert.findIndex(number => number === choose_item)
      fert[index].a = 0;
      if(index !== -1){ 
          fert.splice(index,1);
      }
  localStorage.setItem("carts" , JSON.stringify(fert))
  //////////////////////////////////////////////////////////////////////

  let def = JSON.parse(localStorage.getItem("pric"))
  const index3 = def.findIndex(number => number === id)
  if(index3 !== -1){
    def.splice(index3,1);
  }               
  localStorage.setItem("pric" , JSON.stringify(def))
  loadCart23();
  draw()
}

function price() {
  let sum = 0;
  let fert = JSON.parse(localStorage.getItem("carts"))
  for (let i = 0; i < fert.length; i++) {
    let c = fert[i].p2
    sum += parseInt(c*fert[i].a);
  }
  return sum;
}


   



