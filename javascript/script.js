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

//elementi DOM
const col = document.getElementById('col');

// elemento html row che conterra' le col con le card
const row = document.getElementById('card-row');

//!!! SOLUZIONE CON CREATE ELEMENT E INNER HTML
// for (let i = 0; i < teamMembers.length; i++) {
//   // creazione div card
//   const card = document.createElement('div');
//   card.classList = 'card';

//   card.innerHTML =
//     `<div class="col">
//       <div class="card-img">
//         <img src = "${teamMembers[i].img}" alt = "first member photo" >
//       </div >
//       <div class="card-body">
//         <a class="name" href="#">
//           ${teamMembers[i].name}
//         </a>

//         <p class="role">
//           ${teamMembers[i].role}
//         </p>

//         <a href="#">
//           <p class="e-mail">
//             ${teamMembers[i].email}
//           </p>
//         </a>

//       </div>
//     </div > `;

//   row.appendChild(card);

// }


//!!! FUNZIONE PER OGNI ELEMENTO DELLA CARD

//il parametro element rappresenta l'elemento al quale si andrà ad appendere la card nell' html;
for (let i = 0; i < teamMembers.length; i++) {

  let currentMember = teamMembers[i];

  let card = createCard();
  let cardHeader = createCardHead(currentMember['img']);

  let cardBody = createCardBody(currentMember['name'], currentMember['role'], currentMember['email']);

  card.append(cardHeader);
  card.append(cardBody);



}
function createCard() {

  const card = document.createElement('div');
  card.classList = 'card'; //creazione della card

  col.append(card);

  return card;
}


function createCardHead(string) {

  //header della card con append alla card
  const cardHeader = document.createElement('div');
  cardHeader.classList = 'card-header';

  //immagine profilo
  const cardImg = document.createElement('img');
  cardImg.classList = 'card-img';
  cardImg.src = string;
  cardHeader.append(cardImg); //immagine profilo

  return cardHeader;
}


function createCardBody(name, role, email) {

  //body della card
  const cardBody = document.createElement('div');
  cardBody.classList = 'card-body';

  //nome
  const nameLink = document.createElement('a');
  nameLink.classList = 'name';
  nameLink.innerText = name;
  cardBody.appendChild(nameLink);

  // ruolo
  const memberRole = document.createElement('p');
  memberRole.classList = 'role';
  memberRole.innerText = role;
  cardBody.appendChild(memberRole);

  //email
  const memberEmail = document.createElement('a');
  memberEmail.classList = 'e-mail';
  memberEmail.innerText = email;
  cardBody.appendChild(memberEmail);

  return cardBody;
}