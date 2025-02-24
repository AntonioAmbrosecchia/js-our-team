const formEl = document.getElementById("member_form")
const cardsEl = document.getElementById("card");


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);


const name = document.querySelector('.nome')
console.log(name);
const role = document.querySelector('.mansione').value
console.log(role);
const email = document.querySelector('.email').value
console.log(email);
const img = document.querySelector('.img').value
console.log(img);



const markup =
  `
    <section class="card">
                <div>
                    <img class="img" src="${teamMembers.img}">
                </div>
                <div class="container_generalità">
                    <h4 class"nome">${teamMembers.name}</h4>
                    <p class="mansione">${teamMembers.role}</p>
                    <p class="email">${teamMembers.email}</p>
                </div>
            </section>
            `

console.log(markup);



