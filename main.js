let cources = [
  {
    id: 1,
    name: "JS COMPLEX",
    img: "./image/JS1.png",
    text: "Курс JS Complex - це комплексний курс, під час якого студенти вивчають Node.js, React,Redux, React Native, версій GIT та англійську мову. Об’єм курсу - 6 занять в тиждень, 909 годин, 6 - 11 місяців.",
  },
  {
    id: 2,
    name: "JAVA COMPLEX",
    img: "./image/Java2.png",
    text: "Курс JAVA Complex - це комплексний курс, під час якого студенти вивчають Java, Spring, Hibernate,  React, Redux, React Native, Angular, Javascript, MySQL, MongoDB,  HTML/CSS, Amazon Web Services, ситему контролю версій GIT та англійську мову.Об’єм курсу - 6 занять в тиждень, 909 годин, 6 - 11 місяців. ",
  },
  {
    id: 3,
    name: "PYTHON COMPLEX",
    img: "./image/cource3.png",
    text: "Курс PYTHON Complex - це комплексний курс, під час якого студенти вивчають Python, Django, Flask,  React, Redux, React Native, Angular, Javascript, MySQL, MongoDB,  HTML/CSS, Amazon Web Services, ситему контролю версій GIT та англійську мову.Об’єм курсу - 6 занять в тиждень, 909 годин, 6 - 11 місяців. ",
  },
  {
    id: 4,
    name: "FRONTEND",
    img: "./image/cource4.png",
    text: "Курс FRONTEND - це  курс, під час якого студенти вивчають   фронтенд технології React, Redux, React Native, Angular, Javascript, MySQL, MongoDB,  HTML/CSS, Amazon Web Services, ситему контролю версій GIT та англійську мову.Об’єм курсу - 6 занять в тиждень, 600 годин, 4 - 9 місяців. ",
  },
  {
    id: 5,
    name: "FULLSTACK",
    img: "./image/cource5.png",
    text: "Курс FULLSTACK - найбільший курс в СНД, під час якого студенти вивчають Node.js, Python, Django, Java, Spring, Hibernate,  React, Redux, React Native, Angular, Javascript, MySQL, MongoDB,  HTML/CSS, Amazon Web Services, ситему контролю версій GIT та англійську мову.Об’єм курсу - 6 занять в тиждень, 1048 годин, 10 - 15 місяців..",
  },
  {
    id: 6,
    name: "QA COMPLEX",
    img: "./image/cource6.png",
    text: "Курс QA Complex - це комплексний курс, під час якого студенти вивчають Manual testing, Javascript, MySQL, MongoDB, HTML/CSS, Amazon Web Services, ситему контролю версій GIT та англійську мову. Об’єм курсу - 6 занять в тиждень, 450 годин, 4 - 9 місяців.",
  },
];

let box = document.querySelector(".reviews__wrap-cource");
let cards = document.querySelectorAll("card_cource");

cources.map((item) => {
  let newDiv = document.createElement("div");
  newDiv.className = "card_cource";
  newDiv.innerHTML = `<img src="${item.img}" class="card-img-top" alt="person three"><div class="card-body"><h3 class="card-title">${item.name}</h3><p class="card-text">${item.text}</p></div>`;
  box.append(newDiv);
});
