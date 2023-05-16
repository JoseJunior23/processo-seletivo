let elemGender = document.querySelector("#gender");
let elemAge = document.querySelector("#age");
let elemButton = document.querySelector("#btn");
let elemPreview = document.querySelector("#preview");

function ageGroup() {
  const gender = elemGender.value;
  const age = elemAge.value;

  if (age <= 0) {
    return 'A Idade deve ter um valor maior que: 0'
  }

  if (gender === "men" && age >= 65) {
    return "APOSENTADO";
  } else if (gender === "woman" && age >= 60) {
    return "APOSENTADA";
  } else if ((gender === "men" || gender === "woman") && (age >= 13 && age <= 18)) {
    return "ADOLESCENTE";
  } else if ((gender === "men" || gender === "woman") && (age >= 0 && age < 13)) {
    return "CRIANÇAS";
  } else {
    return "ADULTOS";
  }
}

elemButton.addEventListener("click", ageGroup);

function preview() {
  elemPreview.innerText = "";

  let info =  ageGroup();

  parag = document.createElement("p");
  parag.innerHTML = info;

  elemPreview.appendChild(parag);
}

elemButton.addEventListener("click", preview);