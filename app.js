const DB = [
  {id:1,nombre:"Samsung Galaxy S25 Ultra",marca:"Samsung",cat:"Smartphones",gama:"Gama Alta",precio:4799,old:5299,disc:10,img:"SAMSUNG GALAXY S25 ULTRA.webp",ram:"12 GB",rom:"256 GB",cam:"200 MP",bat:"5000 mAh",pan:'6.9\" AMOLED',cpu:"Snapdragon 8 Elite",so:"Android",rat:4.9,rev:312},
  {id:2,nombre:"iPhone 16 Pro",marca:"Apple",cat:"Smartphones",gama:"Gama Alta",precio:4699,old:4999,disc:6,img:"IPHONE 16 PRO.jpg",ram:"8 GB",rom:"256 GB",cam:"48 MP",bat:"Todo el día",pan:'6.3\" OLED',cpu:"Apple A18 Pro",so:"iOS",rat:4.9,rev:284},
  {id:3,nombre:"Xiaomi 15T",marca:"Xiaomi",cat:"Smartphones",gama:"Gama Media-Alta",precio:2499,old:2799,disc:11,img:"Xiaomi 15T.jpg",ram:"12 GB",rom:"256 GB",cam:"50 MP",bat:"5500 mAh",pan:'6.83\" AMOLED',cpu:"MediaTek Dimensity",so:"Android",rat:4.8,rev:174},
  {id:4,nombre:"Honor 400 Pro 5G",marca:"Honor",cat:"Smartphones",gama:"Gama Alta",precio:2999,old:null,disc:0,img:"HONOR 400 PRO 5G.jpg",ram:"12 GB",rom:"512 GB",cam:"200 MP",bat:"5300 mAh",pan:'6.7\" OLED',cpu:"Snapdragon",so:"Android",rat:4.7,rev:128},
  {id:5,nombre:"Huawei Pura 80 Pro",marca:"Huawei",cat:"Smartphones",gama:"Gama Alta",precio:4299,old:4599,disc:7,img:"HUAWEIE  PURA 80 PRO.webp",ram:"12 GB",rom:"512 GB",cam:"50 MP",bat:"5170 mAh",pan:'6.8\" OLED',cpu:"Kirin",so:"HarmonyOS",rat:4.8,rev:96},
  {id:6,nombre:"Redmi Note 14 Pro",marca:"Xiaomi",cat:"Smartphones",gama:"Gama Media",precio:1299,old:1499,disc:13,img:"Redmi Note 14 Pro.webp",ram:"8 GB",rom:"256 GB",cam:"200 MP",bat:"5110 mAh",pan:'6.67\" AMOLED',cpu:"MediaTek",so:"Android",rat:4.6,rev:218},
  {id:7,nombre:"AirPods Pro",marca:"Apple",cat:"Accesorios",gama:"Audio",precio:599,old:null,disc:0,img:"AUDIFONOS AIR PRO IPHONE.webp",rat:4.8,rev:234},
  {id:8,nombre:"Huawei FreeBuds Pro 4",marca:"Huawei",cat:"Accesorios",gama:"Audio",precio:549,old:629,disc:13,img:"Audifonos inalambricos HUAWEI FREEBUDS PRO 4 BLANCO.webp",rat:4.8,rev:152},
  {id:9,nombre:"JBL Wave Beam",marca:"JBL",cat:"Accesorios",gama:"Audio",precio:279,old:null,disc:0,img:"AUDIFONOS JBL WAVE BEAM.jpeg",rat:4.7,rev:196},
  {id:10,nombre:"Xiaomi Redmi Buds 6",marca:"Xiaomi",cat:"Accesorios",gama:"Audio",precio:189,old:229,disc:17,img:"Audifonos XIAOMI Redmi buds 6.webp",rat:4.6,rev:177},
  {id:11,nombre:"Samsung Galaxy A17",marca:"Samsung",cat:"Smartphones",gama:"Gama Media",precio:899,old:null,disc:0,img:"samsung- galaxy-A17.jpg",ram:"8 GB",rom:"128 GB",cam:"50 MP",bat:"5000 mAh",pan:'6.7\" AMOLED',cpu:"Octa-core",so:"Android",rat:4.5,rev:83},
  {id:12,nombre:"Honor Magic 8 Lite",marca:"Honor",cat:"Smartphones",gama:"Gama Media-Alta",precio:1799,old:null,disc:0,img:"HONOR MAGIC 8 LITE.webp",ram:"8 GB",rom:"256 GB",cam:"108 MP",bat:"6600 mAh",pan:'6.79\" OLED',cpu:"Snapdragon",so:"Android",rat:4.7,rev:91},
  {id:13,nombre:"iPhone 15 Pro",marca:"Apple",cat:"Smartphones",gama:"Gama Alta",precio:3899,old:4299,disc:9,img:"IPHONE 15 PRO.jpg",ram:"8 GB",rom:"256 GB",cam:"48 MP",bat:"Todo el día",pan:'6.1\" OLED',cpu:"Apple A17 Pro",so:"iOS",rat:4.8,rev:346},
  {id:14,nombre:"iPhone 13 Pro",marca:"Apple",cat:"Smartphones",gama:"Gama Media-Alta",precio:2599,old:null,disc:0,img:"IPHONE 13 PRO.jpg",ram:"6 GB",rom:"128 GB",cam:"12 MP",bat:"Todo el día",pan:'6.1\" OLED',cpu:"Apple A15",so:"iOS",rat:4.7,rev:421},
  {id:15,nombre:"Huawei Mate X6",marca:"Huawei",cat:"Smartphones",gama:"Gama Alta",precio:6999,old:null,disc:0,img:"HUAWEI Mate X6 Red.jpg",ram:"12 GB",rom:"512 GB",cam:"50 MP",bat:"5110 mAh",pan:'7.93\" OLED',cpu:"Kirin",so:"HarmonyOS",rat:4.8,rev:54},
  {id:16,nombre:"Honor X6C",marca:"Honor",cat:"Smartphones",gama:"Gama Media",precio:699,old:null,disc:0,img:"HONOR X6C.jpg",ram:"6 GB",rom:"128 GB",cam:"50 MP",bat:"5300 mAh",pan:'6.61\" LCD',cpu:"MediaTek",so:"Android",rat:4.5,rev:112},
  {id:17,nombre:"Huawei P50 Pro",marca:"Huawei",cat:"Smartphones",gama:"Gama Alta",precio:2399,old:null,disc:0,img:"Huaewi P50 PRO.jpg",ram:"8 GB",rom:"256 GB",cam:"50 MP",bat:"4360 mAh",pan:'6.6\" OLED',cpu:"Snapdragon",so:"HarmonyOS",rat:4.7,rev:203},
  {id:18,nombre:"Huawei Mate 10 Pro",marca:"Huawei",cat:"Smartphones",gama:"Gama Media",precio:999,old:null,disc:0,img:"Huawei mate 10 pro.jpg",ram:"6 GB",rom:"128 GB",cam:"20 MP",bat:"4000 mAh",pan:'6.0\" OLED',cpu:"Kirin",so:"Android",rat:4.4,rev:264},
  {id:19,nombre:"Xiaomi Mi 11 Lite",marca:"Xiaomi",cat:"Smartphones",gama:"Gama Media",precio:1099,old:null,disc:0,img:"XIAOMI MI 11 LITE.jpg",ram:"8 GB",rom:"128 GB",cam:"64 MP",bat:"4250 mAh",pan:'6.55\" AMOLED',cpu:"Snapdragon",so:"Android",rat:4.5,rev:188},
  {id:20,nombre:"Samsung Galaxy S26 Ultra",marca:"Samsung",cat:"Smartphones",gama:"Gama Alta",precio:5299,old:null,disc:0,img:"SAMSUNG GALAXY S26 ULTRA.webp",ram:"12 GB",rom:"512 GB",cam:"200 MP",bat:"5000 mAh",pan:'6.9\" AMOLED',cpu:"Snapdragon",so:"Android",rat:4.9,rev:61}
];

// Toda la tienda participa en la campaña de ofertas.
DB.forEach(product=>{
  if(!product.old){
    product.disc=10;
    product.old=Math.ceil((product.precio/0.9)/10)*10;
  }
});

const productImage = (p, cls="product-img") => `<img class="${cls}" src="${encodeURI(p.img)}" alt="${p.nombre}" loading="lazy">`;
const getCart = () => JSON.parse(localStorage.getItem("ms_cart") || "[]");
const saveCart = c => { localStorage.setItem("ms_cart", JSON.stringify(c)); syncCart(); };

function addCart(id){
  const c=getCart(), i=c.findIndex(x=>x.id===id);
  i>=0 ? c[i].qty++ : c.push({id,qty:1});
  saveCart(c); openCart();
}
function changeQty(id,d){
  const c=getCart(),i=c.findIndex(x=>x.id===id);
  if(i<0)return; c[i].qty+=d; if(c[i].qty<=0)c.splice(i,1); saveCart(c);
}
function syncCart(){
  const c=getCart(), badge=document.getElementById("cart-badge"), body=document.getElementById("cart-body"), total=document.getElementById("cart-total");
  const qty=c.reduce((s,i)=>s+i.qty,0); if(badge){badge.textContent=qty;badge.classList.toggle("show",qty>0)}
  if(!body)return;
  if(!c.length){body.innerHTML='<div class="cart-empty"><span>🛒</span>Tu carrito está vacío</div>';if(total)total.textContent="S/ 0";return}
  let sum=0;
  body.innerHTML=c.map(item=>{const p=DB.find(x=>x.id===item.id);if(!p)return"";sum+=p.precio*item.qty;return `<div class="ci"><div class="ci-img">${productImage(p,"ci-product-img")}</div><div class="ci-info"><div class="ci-name">${p.nombre}</div><div class="ci-price">S/ ${p.precio.toLocaleString()}</div><div class="ci-qty"><button class="qb" onclick="changeQty(${p.id},-1)">−</button><span class="ci-q">${item.qty}</span><button class="qb" onclick="changeQty(${p.id},1)">+</button></div></div></div>`}).join("");
  if(total)total.textContent=`S/ ${sum.toLocaleString()}`;
}
function openCart(){document.getElementById("cart-bg").classList.add("open");document.getElementById("cart").classList.add("open");syncCart()}
function closeCart(){document.getElementById("cart-bg").classList.remove("open");document.getElementById("cart").classList.remove("open")}

function goto(page,extra){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+page)?.classList.add("active");
  document.querySelectorAll(".nav-a").forEach(a=>a.classList.remove("active"));
  const navKey=page==="products"&&extra==="Accesorios"?"accessories":page==="products"&&extra==="Ofertas"?"offers":page;
  document.getElementById("lnk-"+navKey)?.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"}); closeCart();
  if(page==="products")renderProds(extra||"Todos"); if(page==="detail")renderDetail(extra||1);
}

const F={tipo:"Todos",gama:"",marca:""};
function filt(btn,key,val){
  const active=btn.classList.contains("active");
  btn.closest(".fg").querySelectorAll(".fpill").forEach(b=>b.classList.remove("active"));
  F[key]=active ? (key==="tipo"?"Todos":"") : val;
  if(!active)btn.classList.add("active"); renderProds();
}
function renderProds(prefilter){
  if(prefilter){
    F.tipo=prefilter;F.gama="";F.marca="";
    const typeGroup=document.querySelector(".fg");
    typeGroup?.querySelectorAll(".fpill").forEach(button=>button.classList.toggle("active",button.textContent.trim()===prefilter));
    document.querySelectorAll(".fg").forEach((group,index)=>{if(index>0)group.querySelectorAll(".fpill").forEach(button=>button.classList.remove("active"))});
  }
  const offersMode=F.tipo==="Ofertas";
  const list=DB.filter(p=>(offersMode||F.tipo==="Todos"||p.cat===F.tipo)&&(!F.gama||p.gama===F.gama)&&(!F.marca||p.marca===F.marca));
  const activeNav=F.tipo==="Accesorios"?"accessories":offersMode?"offers":"products";
  document.querySelectorAll(".nav-a").forEach(link=>link.classList.remove("active"));
  document.getElementById("lnk-"+activeNav)?.classList.add("active");
  const title=document.getElementById("products-title"),subtitle=document.getElementById("products-subtitle");
  if(title&&subtitle){
    if(offersMode){title.textContent="Ofertas futuristas";subtitle.textContent="Todos nuestros productos con precios especiales por tiempo limitado"}
    else if(F.tipo==="Accesorios"){title.textContent="Audífonos y audio";subtitle.textContent="Encuentra AirPods, FreeBuds, JBL y Redmi Buds para disfrutar tu música"}
    else{title.textContent="Todos los productos";subtitle.textContent="Explora nuestra colección completa de smartphones y accesorios premium"}
  }
  const grid=document.getElementById("pgrid"); if(!grid)return;
  grid.innerHTML=list.length?list.map(cardHTML).join(""):'<div class="empty-results">No hay productos con esos filtros</div>';
}
function cardHTML(p){
  const disc=p.disc?`<div class="pcard-disc">−${p.disc}%</div>`:"";
  const old=p.old?`<span class="pcard-old">S/ ${p.old.toLocaleString()}</span>`:"";
  return `<article class="pcard" onclick="goto('detail',${p.id})"><div class="pcard-img">${productImage(p)}${disc}<button class="pcard-wish" aria-label="Favorito" onclick="event.stopPropagation()">♡</button></div><div class="pcard-body"><div class="pcard-meta"><span>${p.gama.toUpperCase()}</span><span>${p.marca}</span></div><div class="pcard-name">${p.nombre}</div><div class="pcard-prices"><span class="pcard-price">S/ ${p.precio.toLocaleString()}</span>${old}</div><div class="pcard-foot"><button class="btn-add" onclick="event.stopPropagation();addCart(${p.id})">Agregar</button><span class="pcard-rat">★ ${p.rat}</span></div></div></article>`;
}
function renderDetail(id){
  const p=DB.find(x=>x.id===id),wrap=document.getElementById("detail-wrap");if(!p||!wrap)return;
  const old=p.old?`<span class="d-price-old">S/ ${p.old.toLocaleString()}</span><span class="d-save">Ahorras S/ ${(p.old-p.precio).toLocaleString()}</span>`:"";
  const specs=p.cpu?`<div class="d-specs"><div class="d-spec"><label>Pantalla</label><span>${p.pan}</span></div><div class="d-spec"><label>Procesador</label><span>${p.cpu}</span></div><div class="d-spec"><label>Cámara principal</label><span>${p.cam}</span></div><div class="d-spec"><label>RAM / Almacenamiento</label><span>${p.ram} / ${p.rom}</span></div><div class="d-spec"><label>Batería</label><span>${p.bat}</span></div><div class="d-spec"><label>Sistema operativo</label><span>${p.so}</span></div></div>`:"";
  wrap.innerHTML=`<div class="dgrid"><div><div class="d-img-main">${productImage(p,"detail-product-img")}</div><div class="d-thumbs"><div class="d-thumb active">${productImage(p,"thumb-product-img")}</div></div></div><div><div class="d-bread"><a onclick="goto('home')">Inicio</a> › <a onclick="goto('products','${p.cat}')">${p.cat}</a> › ${p.nombre}</div><div class="d-brand">${p.marca} · ${p.gama}</div><div class="d-name">${p.nombre}</div><div class="d-rat"><span class="d-stars">${"★".repeat(Math.floor(p.rat))}${"☆".repeat(5-Math.floor(p.rat))}</span>${p.rat} · ${p.rev} reseñas</div><div class="d-price-row"><span class="d-price">S/ ${p.precio.toLocaleString()}</span>${old}</div>${specs}<div class="d-actions"><button class="btn-buy" onclick="addCart(${p.id})">Agregar al carrito →</button><button class="btn-wish2">♡</button></div><div class="d-guarantee"><div class="dg">🚚 Envío gratis Lima</div><div class="dg">🛡️ Garantía 1 año</div><div class="dg">↩️ 30 días devolución</div></div></div></div>`;
}
function renderHome(){
  const featured=document.getElementById("home-products");
  if(featured)featured.innerHTML=DB.slice(0,3).map(cardHTML).join("");
  const audio=document.getElementById("home-accessories");
  if(audio)audio.innerHTML=DB.filter(p=>p.cat==="Accesorios").slice(0,4).map(p=>`<article class="acard" onclick="goto('detail',${p.id})"><div class="acard-img">${productImage(p,"accessory-product-img")}</div><div class="acard-body"><div class="acard-name">${p.nombre}</div><div class="acard-type">Audio · ${p.marca}</div><div class="acard-row"><span class="acard-price">S/ ${p.precio.toLocaleString()}</span><button class="btn-add" onclick="event.stopPropagation();addCart(${p.id})">+</button></div></div></article>`).join("");
}
function cartTotal(){
  return getCart().reduce((sum,item)=>{
    const product=DB.find(p=>p.id===item.id);
    return sum+(product?product.precio*item.qty:0);
  },0);
}

function startCheckout(){
  if(!getCart().length){
    const empty=document.querySelector(".cart-empty");
    if(empty){empty.classList.add("shake");setTimeout(()=>empty.classList.remove("shake"),450)}
    return;
  }
  closeCart();
  document.getElementById("checkout-main").style.display="block";
  document.getElementById("purchase-success").classList.remove("show");
  document.getElementById("checkout-form").reset();
  document.getElementById("pay-total").textContent=`S/ ${cartTotal().toLocaleString()}`;
  document.getElementById("payment-error").textContent="";
  selectPayment("yape",document.querySelector('[data-method="yape"]'));
  document.getElementById("checkout-bg").classList.add("open");
  document.body.classList.add("modal-open");
}

function closeCheckout(){
  document.getElementById("checkout-bg")?.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function selectPayment(method,button){
  document.getElementById("payment-method").value=method;
  document.querySelectorAll(".payment-method").forEach(el=>el.classList.toggle("active",el===button));
  document.querySelectorAll(".payment-panel").forEach(el=>el.classList.toggle("active",el.id===`panel-${method}`));
  document.getElementById("payment-error").textContent="";
}

function onlyDigits(value){return value.replace(/\D/g,"")}
function formatCardNumber(input){
  input.value=onlyDigits(input.value).slice(0,16).replace(/(.{4})/g,"$1 ").trim();
  document.getElementById("card-preview-number").textContent=input.value||"•••• •••• •••• ••••";
}
function formatExpiry(input){
  let value=onlyDigits(input.value).slice(0,4);
  if(value.length>2)value=value.slice(0,2)+"/"+value.slice(2);
  input.value=value;
}

function validatePayment(method){
  if(method==="yape"||method==="plin"){
    const phone=onlyDigits(document.getElementById(`${method}-phone`).value);
    const code=onlyDigits(document.getElementById(`${method}-code`).value);
    if(!/^9\d{8}$/.test(phone))return "Ingresa un número celular válido de 9 dígitos.";
    if(!/^\d{6}$/.test(code))return "El código de verificación debe tener 6 dígitos.";
    return "";
  }
  const name=document.getElementById("card-name").value.trim();
  const number=onlyDigits(document.getElementById("card-number").value);
  const expiry=document.getElementById("card-expiry").value;
  const cvv=onlyDigits(document.getElementById("card-cvv").value);
  if(name.length<3)return "Ingresa el nombre completo del titular.";
  if(!/^\d{16}$/.test(number))return "El número de tarjeta debe tener 16 dígitos.";
  if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry))return "Ingresa un vencimiento válido en formato MM/AA.";
  if(!/^\d{3}$/.test(cvv))return "El CVV debe tener 3 dígitos.";
  return "";
}

function processPayment(event){
  event.preventDefault();
  const method=document.getElementById("payment-method").value;
  const error=validatePayment(method);
  const errorBox=document.getElementById("payment-error");
  if(error){
    errorBox.textContent=error;errorBox.classList.remove("pulse");void errorBox.offsetWidth;errorBox.classList.add("pulse");return;
  }
  const button=document.getElementById("pay-button");
  button.disabled=true;button.classList.add("loading");button.querySelector("span").textContent="Procesando pago";
  setTimeout(()=>{
    button.disabled=false;button.classList.remove("loading");button.querySelector("span").textContent="Pagar";
    const orderCode=`MS-${String(Date.now()).slice(-6)}`;
    document.getElementById("order-code").textContent=orderCode;
    saveCompletedOrder(orderCode,method);
    document.getElementById("checkout-main").style.display="none";
    document.getElementById("purchase-success").classList.add("show");
    localStorage.removeItem("ms_cart");syncCart();
  },900);
}

function finishPurchase(){closeCheckout();goto("home")}

const getUsers=()=>JSON.parse(localStorage.getItem("ms_users")||"[]");
const getOrders=()=>JSON.parse(localStorage.getItem("ms_orders")||"[]");
const getSession=()=>localStorage.getItem("ms_session")||"";

function currentUser(){return getUsers().find(user=>user.email===getSession())||null}
function openAccount(){
  renderAccountUI();
  document.getElementById("account-bg").classList.add("open");
  document.body.classList.add("modal-open");
}
function closeAccount(){
  document.getElementById("account-bg")?.classList.remove("open");
  document.body.classList.remove("modal-open");
}
function showAccountForm(type,button){
  document.querySelectorAll(".account-tab").forEach(tab=>tab.classList.toggle("active",tab===button));
  document.querySelectorAll(".account-form").forEach(form=>form.classList.toggle("active",form.id===`${type}-form`));
  document.querySelectorAll(".account-error").forEach(error=>error.textContent="");
}
function togglePassword(id,button){
  const input=document.getElementById(id),show=input.type==="password";
  input.type=show?"text":"password";button.textContent=show?"Ocultar":"Ver";
}
function validEmail(email){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
function registerAccount(event){
  event.preventDefault();
  const name=document.getElementById("register-name").value.trim();
  const phone=onlyDigits(document.getElementById("register-phone").value);
  const email=document.getElementById("register-email").value.trim().toLowerCase();
  const password=document.getElementById("register-password").value;
  const error=document.getElementById("register-error");
  if(name.length<3){error.textContent="Ingresa tu nombre completo.";return}
  if(!/^9\d{8}$/.test(phone)){error.textContent="Ingresa un celular válido de 9 dígitos.";return}
  if(!validEmail(email)){error.textContent="Ingresa un correo electrónico válido.";return}
  if(password.length<6){error.textContent="La contraseña debe tener al menos 6 caracteres.";return}
  const users=getUsers();
  if(users.some(user=>user.email===email)){error.textContent="Este correo ya tiene una cuenta registrada.";return}
  users.push({name,phone,email,password,createdAt:new Date().toISOString()});
  localStorage.setItem("ms_users",JSON.stringify(users));
  localStorage.setItem("ms_session",email);
  event.target.reset();renderAccountUI();
}
function loginAccount(event){
  event.preventDefault();
  const email=document.getElementById("login-email").value.trim().toLowerCase();
  const password=document.getElementById("login-password").value;
  const user=getUsers().find(item=>item.email===email&&item.password===password);
  const error=document.getElementById("login-error");
  if(!validEmail(email)){error.textContent="Ingresa un correo electrónico válido.";return}
  if(!user){error.textContent="Correo o contraseña incorrectos.";return}
  localStorage.setItem("ms_session",user.email);error.textContent="";event.target.reset();renderAccountUI();
}
function logoutAccount(){
  localStorage.removeItem("ms_session");renderAccountUI();
}
function initials(name){return name.split(/\s+/).slice(0,2).map(word=>word[0]).join("").toUpperCase()}
function renderAccountUI(){
  const user=currentUser(),auth=document.getElementById("account-auth"),profile=document.getElementById("account-profile"),dot=document.getElementById("account-dot");
  if(!auth||!profile)return;
  auth.style.display=user?"none":"block";profile.style.display=user?"block":"none";dot?.classList.toggle("online",!!user);
  if(!user)return;
  document.getElementById("profile-avatar").textContent=initials(user.name);
  document.getElementById("profile-name").textContent=user.name;
  document.getElementById("profile-email").textContent=user.email;
  const orders=getOrders().filter(order=>order.owner===user.email);
  document.getElementById("profile-orders-count").textContent=orders.length;
  document.getElementById("profile-spent").textContent=`S/ ${orders.reduce((sum,order)=>sum+order.total,0).toLocaleString()}`;
  const list=document.getElementById("orders-list");
  list.innerHTML=orders.length?orders.map(order=>`<article class="order-item"><b>${order.code}</b><strong>S/ ${order.total.toLocaleString()}</strong><span>${order.date} · ${order.items} producto${order.items===1?"":"s"} · ${order.method}</span><span class="order-status">Confirmado</span></article>`).join(""):'<div class="orders-empty">Todavía no tienes pedidos.<br>Tu próxima compra aparecerá aquí.</div>';
}
function saveCompletedOrder(code,method){
  const cart=getCart(),orders=getOrders(),user=currentUser();
  const methodNames={yape:"Yape",plin:"Plin",card:"Tarjeta"};
  orders.unshift({code,owner:user?user.email:"guest",date:new Date().toLocaleDateString("es-PE"),items:cart.reduce((sum,item)=>sum+item.qty,0),total:cartTotal(),method:methodNames[method]||method});
  localStorage.setItem("ms_orders",JSON.stringify(orders.slice(0,40)));
}

document.addEventListener("input",event=>{
  if(event.target.id==="card-name")document.getElementById("card-preview-name").textContent=event.target.value.toUpperCase()||"NOMBRE DEL TITULAR";
});

window.addEventListener("scroll",()=>document.getElementById("nav")?.classList.toggle("solid",scrollY>10));
document.addEventListener("DOMContentLoaded",()=>{renderHome();syncCart();renderAccountUI();goto("home")});
