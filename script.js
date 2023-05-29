// function getTimeTelaviv() {
//   fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=293397&M=on")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const shabbatTimeFull = data.items[0].title;
//       const shabbatTime = shabbatTimeFull.split(": ")[1];

//       const havdalaTime = data.items[2].title;
//       const havdala = havdalaTime.split(": ")[1];

//       const dateFull = data.date;
//       const dateParts = dateFull.split("T")[0].split("-");
//       const date = dateParts.reverse().join("-");

//       const parashatSHavoua = data.items[1].hebrew;
//       document.getElementById("shabbatTime").textContent = shabbatTime;
//       document.getElementById("havdala").textContent = havdala;
//       document.getElementById("date").textContent = date;
//       document.getElementById("parashatSHavoua").textContent = parashatSHavoua;
//     })
//     .catch((error) => console.error(error));
// }

// function getTimeJerusalem() {
//   fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&M=on")
//     .then((response) => response.json())
//     .then((data) => {
//       const shabbatTimeFull = data.items[0].title;
//       const shabbatTime = shabbatTimeFull.split(": ")[1];

//       const havdalaTime = data.items[2].title;
//       const havdala = havdalaTime.split(": ")[1];

//       const dateFull = data.date;
//       const dateParts = dateFull.split("T")[0].split("-");
//       const date = dateParts.reverse().join("-");

//       const parashatSHavoua = data.items[1].hebrew;
//       document.getElementById("shabbatTime").textContent = shabbatTime;
//       document.getElementById("havdala").textContent = havdala;
//       document.getElementById("date").textContent = date;
//       document.getElementById("parashatSHavoua").textContent = parashatSHavoua;

//       console.log(data);
//     })
//     .catch((error) => console.error(error));
// }
// function getTimeAsdod() {
//   fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=295629&M=on")
//     .then((response) => response.json())
//     .then((data) => {
//       const shabbatTimeFull = data.items[0].title;
//       const shabbatTime = shabbatTimeFull.split(": ")[1];

//       const havdalaTime = data.items[2].title;
//       const havdala = havdalaTime.split(": ")[1];

//       const dateFull = data.date;
//       const dateParts = dateFull.split("T")[0].split("-");
//       const date = dateParts.reverse().join("-");

//       const parashatSHavoua = data.items[1].hebrew;
//       document.getElementById("shabbatTime").textContent = shabbatTime;
//       document.getElementById("havdala").textContent = havdala;
//       document.getElementById("date").textContent = date;
//       document.getElementById("parashatSHavoua").textContent = parashatSHavoua;

//       console.log(data);
//     })
//     .catch((error) => console.error(error));
// }
// function getTimeLondon() {
//   fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=2643743&M=on")
//     .then((response) => response.json())
//     .then((data) => {
//       const shabbatTimeFull = data.items[0].title;
//       const shabbatTime = shabbatTimeFull.split(": ")[1];

//       const havdalaTime = data.items[2].title;
//       const havdala = havdalaTime.split(": ")[1];

//       const dateFull = data.date;
//       const dateParts = dateFull.split("T")[0].split("-");
//       const date = dateParts.reverse().join("-");

//       const parashatSHavoua = data.items[1].hebrew;
//       document.getElementById("shabbatTime").textContent = shabbatTime;
//       document.getElementById("havdala").textContent = havdala;
//       document.getElementById("date").textContent = date;
//       document.getElementById("parashatSHavoua").textContent = parashatSHavoua;

//       console.log(data);
//     })
//     .catch((error) => console.error(error));
// }

// let selectedCity = document.getElementById("citySelect");

// const table = document.querySelector(".table");
// table.classList.add("display");
// document.addEventListener("click", function () {
//   let selectedCity = document.getElementById("citySelect");

//   selectedCity.addEventListener("change", function () {
//     if (selectedCity.value === "option2") {
//       table.classList.remove("display");

//       getTimeJerusalem();
//     } else if (selectedCity.value === "option1") {
//       table.classList.remove("display");

//       getTimeTelaviv();
//     } else if (selectedCity.value === "option4") {
//       table.classList.remove("display");

//       getTimeAsdod();
//     } else if (selectedCity.value === "option5") {
//       table.classList.remove("display");

//       getTimeLondon();
//     }
//   });
// });

function getTime(city, geonameid) {
  fetch(`https://www.hebcal.com/shabbat?cfg=json&geonameid=${geonameid}&M=on`)
    .then((response) => response.json())
    .then((data) => {
      const shabbatTimeFull = data.items[0].title;
      const shabbatTime = shabbatTimeFull.split(": ")[1];

      const havdalaTime = data.items[2].title;
      const havdala = havdalaTime.split(": ")[1];

      const dateFull = data.date;
      const dateParts = dateFull.split("T")[0].split("-");
      const date = dateParts.reverse().join("-");

      const parashatSHavoua = data.items[1].hebrew;
      document.getElementById("shabbatTime").textContent = shabbatTime;
      document.getElementById("havdala").textContent = havdala;
      document.getElementById("date").textContent = date;
      document.getElementById("parashatSHavoua").textContent = parashatSHavoua;

      console.log(data);
    })
    .catch((error) => console.error(error));
}

let selectedCity = document.getElementById("citySelect");
const table = document.querySelector(".table");
table.classList.add("display");

document.addEventListener("click", function () {
  selectedCity.addEventListener("click", function () {
    table.classList.remove("display");

    if (selectedCity.value === "option2") {
      getTime("Jerusalem", 281184);
    } else if (selectedCity.value === "option1") {
      getTime("Tel Aviv", 293397);
    } else if (selectedCity.value === "option4") {
      getTime("Asdod", 295629);
    } else if (selectedCity.value === "option5") {
      getTime("London", 2643743);
    } else if (selectedCity.value === "option3") {
      table.classList.add("display");
    } else if (selectedCity.value === "option6") {
      getTime("Los Angeles", 5368361);
    } else if (selectedCity.value === "option7") {
      getTime("Paris", 2988507);
    }
  });
});
