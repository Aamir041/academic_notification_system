const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const h = document.querySelector(".child1 h1");
let yeartoday = 2022;

let presentday = new Date().getDay();
let presentyear = new Date().getFullYear();
let presentmonth = new Date().getMonth() + 1;
let presentdate = new Date().getDate();


const nextYear = () => {
  yeartoday++;
  h.innerHTML = yeartoday;
};

const prevYear = () => {
  yeartoday--;
  h.innerHTML = yeartoday;
};

//printing months
const Cssmonth =(j,month2)=>{
    for(let a=0;a<12;a++){
        if(j===a){
            month2[a].style.border = "3.5px solid #167e56";
            month2[a].style.opacity = 1;
        }
        else if(j!==a){
            month2[a].style.border = "none";
            month2[a].style.opacity = 0.5;
        }
    }
}

//printing dates
const Printdate = (j,yeartoday1)=>{
    let countor = 0;
    let day1 = "";
    for (let i = startprev(j + 1, yeartoday1);i <= endprev(j + 1, yeartoday1);i++) {
      countor++;
      day1 += `<div value="${i}">${i}</div>`;
    }
    for (let i = 1; i <= endpresent(j + 1, yeartoday1); i++) {
        countor++;
        day1 += `<div value="${i}">${i}</div>`;
        
    }
    for (let i = 1; i <= 42 - countor; i++) {
        day1 += `<div value="${i}">${i}</div>`;
    }
      
    Day.innerHTML = day1;
}

//show css of weekdays
const cssweekdays =(presentday1)=>{
    let week2 = document.querySelectorAll(".weekdays div");
    week2[presentday1].style.backgroundColor = '#167e56';
}

//show date month year in message
const showdata =(presentdate,presentmonth,presentyear)=>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let messagedate = document.querySelector(".message-nav");
    messagedate.innerHTML = `<div>${presentdate} ${months[presentmonth]} ${presentyear}<div>`; 
    console.log(presentdate,presentmonth,presentyear);
}

const month2 = document.querySelectorAll(".child2");
for (let j = 0; j < month2.length; j++) {
  month2[j].addEventListener("click",()=> {
    
    Cssmonth(j,month2);
    Printdate(j,yeartoday);
    cssweekdays(presentday);
    showdata(presentdate,presentmonth,presentyear);
  });
}

next.addEventListener("click", nextYear);

prev.addEventListener("click", prevYear);
