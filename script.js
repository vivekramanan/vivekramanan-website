// ---- performance data (from resume) ----
const PERFORMANCES = [
  {year:2026,name:"Synesthesia Festival",loc:"Chicago, IL",type:"solo"},
  {year:2026,name:"Surabhi by CIFA",loc:"Boston, MA",type:"solo"},
  {year:2026,name:"ForPlay Society",loc:"Kochi, IN",type:"solo"},
  {year:2026,name:"Krishna Gana Sabha",loc:"Chennai, IN",type:"music"},
  {year:2026,name:"Madras Music Academy",loc:"Chennai, IN",type:"music"},
  {year:2025,name:"Shilparamam Amphitheater",loc:"Hyderabad, IN",type:"solo"},
  {year:2025,name:"Punyah Theater Double Bill",loc:"Bangalore, IN",type:"solo"},
  {year:2025,name:"Trinity Arts Festival",loc:"Chennai, IN",type:"solo"},
  {year:2025,name:"Yuva Bharati: Pratibha Margam",loc:"Palo Alto, CA",type:"solo"},
  {year:2025,name:"Richmond Folk Festival",loc:"Richmond, VA",type:"music"},
  {year:2025,name:"Kalpana: Original Choreography",loc:"Portland, OR",type:"solo"},
  {year:2025,name:"Montana Folk Festival",loc:"Butte, MT",type:"music"},
  {year:2025,name:"Kalaavidya Foundation: Nayaka",loc:"Austin, TX",type:"solo"},
  {year:2025,name:"Samskriti Foundation",loc:"Houston, TX",type:"solo"},
  {year:2025,name:"Tapas Natyotsava",loc:"Bengaluru, IN",type:"solo"},
  {year:2025,name:"KG1 Studio Showcase",loc:"Chennai, IN",type:"solo"},
  {year:2025,name:"Krishna Gana Sabha: Kritya",loc:"Chennai, IN",type:"music"},
  {year:2025,name:"Krishna Gana Sabha",loc:"Chennai, IN",type:"music"},
  {year:2024,name:"Aalaap Diaspora Festival",loc:"Chennai, IN",type:"trio"},
  {year:2024,name:"National Folk Festival",loc:"Jackson, MS",type:"music"},
  {year:2024,name:"World Music Series",loc:"Los Angeles, CA",type:"music"},
  {year:2024,name:"IDIA Festival",loc:"Palo Alto, CA",type:"trio"},
  {year:2024,name:"Dance Complex",loc:"Cambridge, MA",type:"solo"},
  {year:2024,name:"Oberlin College",loc:"Oberlin, OH",type:"music"},
  {year:2024,name:"Fire Museum Presents",loc:"Philadelphia, PA",type:"solo"},
  {year:2024,name:"Medai: The Stage",loc:"Bengaluru, IN",type:"solo"},
  {year:2024,name:"Kartik Fine Arts",loc:"Chennai, IN",type:"solo"},
  {year:2023,name:"Art on Terrace: Kritya",loc:"Chennai, IN",type:"music"},
  {year:2023,name:"Art on Terrace",loc:"Chennai, IN",type:"solo"},
  {year:2023,name:"CFAA Prakriti Festival",loc:"Denver, CO",type:"solo"},
  {year:2023,name:"Erasing Borders",loc:"New York, NY",type:"trio"},
  {year:2023,name:"Starting Arts",loc:"San Jose, CA",type:"trio"},
  {year:2023,name:"IFAA Youth Festival",loc:"San Diego, CA",type:"solo"},
  {year:2023,name:"Balance Arts Center",loc:"New York, NY",type:"solo"},
  {year:2023,name:"Geeva Arts Festival",loc:"Louisville, KY",type:"solo"},
  {year:2023,name:"ICMCA",loc:"Durham, NC",type:"trio"},
  {year:2023,name:"IFAA Dallas",loc:"Dallas, TX",type:"trio"},
  {year:2023,name:"Happy Valley Festival",loc:"Penn State, PA",type:"music"},
  {year:2023,name:"Ravindra Bharati",loc:"Hyderabad, IN",type:"music"},
  {year:2022,name:"Rasika Ranjani Sabha",loc:"Chennai, IN",type:"solo"},
  {year:2022,name:"Hamsadhwani Festival",loc:"Chennai, IN",type:"solo"},
  {year:2022,name:"IDIA Festival",loc:"Palo Alto, CA",type:"solo"},
  {year:2022,name:"Mudra Festival of Dance",loc:"Albany, NY",type:"solo"},
  {year:2021,name:"10 Tiny Dances",loc:"Cambridge, MA",type:"solo"},
  {year:2021,name:"Varnam Salon CA",loc:"Online",type:"solo"},
  {year:2020,name:"Dance Complex",loc:"Cambridge, MA",type:"solo"},
  {year:2019,name:"Saptami Festival",loc:"Dallas, TX",type:"trio"},
  {year:2019,name:"Yuva Bharati",loc:"San Jose, CA",type:"trio"},
  {year:2019,name:"Spring2Dance",loc:"St. Louis, MO",type:"trio"},
];

const INITIAL_SHOWN = 16;
let currentFilter = "all";
let expanded = false;

function renderPerf(){
  const list = document.getElementById("perfList");
  const filtered = PERFORMANCES.filter(p => currentFilter==="all" || p.type===currentFilter);
  const limit = expanded ? filtered.length : INITIAL_SHOWN;
  list.innerHTML = filtered.slice(0,limit).map(p => `
    <div class="prow">
      <span class="prow__year">${p.year}</span>
      <span class="prow__name">${p.name}</span>
      <span class="prow__loc">${p.loc}</span>
      <span class="prow__type">${p.type}</span>
    </div>`).join("");
  const more = document.getElementById("perfMore");
  more.style.display = filtered.length > INITIAL_SHOWN ? "block" : "none";
  more.textContent = expanded ? "Show fewer" : "Show earlier seasons";
}

document.getElementById("perfFilters").addEventListener("click", e=>{
  if(!e.target.classList.contains("pf")) return;
  document.querySelectorAll(".pf").forEach(b=>b.classList.remove("active"));
  e.target.classList.add("active");
  currentFilter = e.target.dataset.filter;
  expanded = false;
  renderPerf();
});
document.getElementById("perfMore").addEventListener("click",()=>{expanded=!expanded;renderPerf();});
renderPerf();

// ---- nav ----
const nav = document.getElementById("nav");
window.addEventListener("scroll",()=>{ nav.classList.toggle("scrolled", window.scrollY>40); });
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click",()=>{
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  links.classList.remove("open"); toggle.setAttribute("aria-expanded",false);
}));

// ---- scroll reveal ----
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
},{threshold:0.12,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".reveal").forEach((el,i)=>{
  el.style.transitionDelay = `${(i%4)*70}ms`;
  io.observe(el);
});

// ---- count up ----
const counters = document.querySelectorAll(".stat__num[data-count]");
const cio = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.count;
    let n = 0; const step = Math.max(1, Math.round(target/40));
    const t = setInterval(()=>{
      n += step;
      if(n>=target){ n=target; clearInterval(t); }
      el.textContent = n + "+";
    },24);
    cio.unobserve(el);
  });
},{threshold:0.6});
counters.forEach(c=>cio.observe(c));

// ---- form ----
const form = document.getElementById("bookingForm");
const note = document.getElementById("formNote");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if(!name || !/^[^@]+@[^@]+\.[^@]+$/.test(email)){
    note.hidden=false; note.style.color="#e6a07a";
    note.textContent="Please add your name and a valid email.";
    return;
  }
  // mailto fallback — works on any static host with no backend
  const subject = encodeURIComponent(`Booking inquiry — ${form.type.value}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nType: ${form.type.value}\n\n${form.message.value}`
  );
  window.location.href = `mailto:vivek.ramanan14@gmail.com?subject=${subject}&body=${body}`;
  note.hidden=false; note.style.color="";
  note.textContent="Opening your email app… if nothing happens, write to vivek.ramanan14@gmail.com directly.";
  form.reset();
});

// ---- year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- video gallery (click to load player) ----
document.querySelectorAll(".vcard").forEach(card=>{
  const id = card.dataset.id;
  const thumb = card.querySelector(".vcard__thumb");
  // hqdefault is always available; maxresdefault may 404 for some videos
  thumb.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  const test = new Image();
  test.onload = ()=>{ if(test.naturalWidth>=1000) thumb.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/maxresdefault.jpg)`; };
  test.src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  const play = ()=>{
    if(card.querySelector("iframe")) return;
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    f.title = card.querySelector("h3").textContent;
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    f.allowFullscreen = true;
    card.appendChild(f);
  };
  card.addEventListener("click", play);
  card.setAttribute("role","button");
  card.setAttribute("tabindex","0");
  card.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();play();} });
});
