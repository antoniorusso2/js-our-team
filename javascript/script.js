console.log('our team');

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

// elemento html row che conterra' le col con le card
const row = document.getElementById('card-row');


for (let i = 0; i < teamMembers.length; i++) {
  // creazione div card
  const card = document.createElement('div');
  card.classList = 'card';

  card.innerHTML =
    `<div class="card-img">
      <img src = "${teamMembers[i].img}" alt = "first member photo" >
    </div >
    <div class="card-body">
      <a class="name" href="#">
        ${teamMembers[i].name}
      </a>

      <p class="role">
        ${teamMembers[i].role}
      </p>

      <a href="#">
        <p class="e-mail">
          ${teamMembers[i].email}
        </p>
      </a>

    </div>
  </div > `;

  row.appendChild(card);

}