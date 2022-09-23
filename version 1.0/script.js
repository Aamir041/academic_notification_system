
const week = document.querySelector('.weekdays');
const Day = document.querySelector('.days');

let week1="";
let day1="";

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
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

let Date1 =(month,year)=>new Date(year, month, 0).getDate();
let day =(year,month,date)=>new Date(`${month},${date},${year}`).getDay();

let startprev =(month,year)=>Date1(month-1,year)-day(year,month,1) + 1;
let endprev =(month,year)=>Date1(month-1,year);
let endpresent =(month,year)=>Date1(month,year);

let presentyear = new Date().getFullYear();
let presentmonth = new Date().getMonth() + 1;
let presentdate = new Date().getDate();
let presentday = new Date().getDay();

//print all months
const printmonth =()=>{
    const month = document.querySelector('.month');
    let month1 = ""; 
    for (let i=0;i<12;i++){
        month1 +=`<div class="child2">${months[i]}</div>`;
    }
    month.innerHTML = month1;
}

//print date
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

//print all weekdays
for (let i=0;i<7;i++){
        week1 +=`<div>${weekday[i]}</div>`;
}
week.innerHTML= week1;
let week2 = document.querySelectorAll(".weekdays div");
week2[presentday].style.backgroundColor = '#167e56';

//print all days
let countor1=0;
const printdays =()=>{
    let countor=0;
    for(let i=startprev(presentmonth,presentyear);i<=endprev(presentmonth,presentyear);i++){
        countor++;    
        day1 +=`<div>${i}</div>`;
    }
    countor1 = countor;
    for (let i=1;i<=endpresent(presentmonth,presentyear);i++){
        countor++;      
        day1 +=`<div>${i}</div>`;
    }
    for(let i=1;i<=42-countor;i++){
        day1 +=`<div>${i}</div>`;
    }
    Day.innerHTML = day1;

}

printdays();
printmonth();
showdata(presentdate,presentmonth,presentyear);


const cssmonth= document.querySelectorAll(".child2");
cssmonth[presentmonth -1].style.backgroundColor = "#167e56";

const cssday = document.querySelectorAll(".days div");
cssday[presentdate+countor1-1].style.backgroundColor = "#167e56";