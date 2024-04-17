import data from "./data.js";

$(document).ready(function () {
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").addClass("highlight");
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-chevron-circle-down")
      .addClass("fa-chevron-circle-up");
  });

  $(".card-header .btn").click(function () {
    $(".card-header").not($(this).parents()).removeClass("highlight");
    $(this).parents(".card-header").toggleClass("highlight");
  });

  $(".collapse").on("show.bs.collapse", function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-chevron-circle-down")
      .addClass("fa-chevron-circle-up");
  });

  $(".collapse").on("hide.bs.collapse", function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-chevron-circle-up")
      .addClass("fa-chevron-circle-down");
  });
});

const packagesArr = data();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const current = packagesArr.find((el) => el.id == id);
console.log(current);

// all variables
let location = document.getElementById("location");
let carousel = document.getElementById("carousel-img");
let facilities = document.getElementById("facilities");
let faqs = document.getElementById("accordionExample");
let dynamicHero = document.getElementById("dynamic-hero");

if (
  dynamicHero &&
  current &&
  current.location &&
  current.location.trim() == "Marrakech"
) {
  dynamicHero.style.background = `linear-gradient(rgba(20, 20, 31, 0.7), rgba(20, 20, 31, 0.7)), url(../img/marrakech.jpg)`;
  dynamicHero.style.backgroundSize = "cover";
  dynamicHero.style.backgroundPosition = "center";
  dynamicHero.style.backgroundRepeat = "no-repeat";
}
if (
  dynamicHero &&
  current &&
  current.location &&
  current.location.trim() == "Casablanca"
) {
  dynamicHero.style.background = `linear-gradient(rgba(20, 20, 31, 0.7), rgba(20, 20, 31, 0.7)), url(../img/Casablanca.jpg)`;
  dynamicHero.style.backgroundSize = "cover";
  dynamicHero.style.backgroundPosition = "center";
  dynamicHero.style.backgroundRepeat = "no-repeat";
}

if (
  dynamicHero &&
  current &&
  current.location &&
  current.location.trim() == "Fes"
) {
  dynamicHero.style.background = `linear-gradient(rgba(20, 20, 31, 0.7), rgba(20, 20, 31, 0.7)), url(../img/fes.jpg)`;
  dynamicHero.style.backgroundSize = "cover";
  dynamicHero.style.backgroundPosition = "center";
  dynamicHero.style.backgroundRepeat = "no-repeat";
}
if (
  dynamicHero &&
  current &&
  current.location &&
  current.location.trim() == "Tanger"
) {
  dynamicHero.style.background = `linear-gradient(rgba(20, 20, 31, 0.7), rgba(20, 20, 31, 0.7)), url(../img/Tanger.jpg)`;
  dynamicHero.style.backgroundSize = "cover";
  dynamicHero.style.backgroundPosition = "center";
  dynamicHero.style.backgroundRepeat = "no-repeat";
}

carousel.innerHTML = "";
facilities.innerHTML = ``;
faqs.innerHTML = ``;

if (!current) {
  console.error("Package not found");
} else {
  location.innerHTML = current.location;
  let carousel = document.getElementById("carousel-img");
  carousel.innerHTML = "";
  current.img.forEach((el, index) => {
    carousel.innerHTML += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img
                    src="${el}"
                    class="d-block w-100"
                    width="1200px"
                    height="405px"
                    style="object-fit: cover"
                    alt="..."
                />
            </div>
        `;
  });
  current.facilities.forEach((el) => {
    facilities.innerHTML += `
            <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-${
                    el.type ? "check" : "times"
                  } text-secondary me-2"></i> ${el.name}
                </p>
            </div>
        `;
  });
  current.faq.forEach((el, i) => {
    faqs.innerHTML += `
        <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="clearfix mb-0">
            <a
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapse-${i}"
              aria-expanded="true"
              aria-controls="collapse-${i}"
              ><i class="fa fa-chevron-circle-down"></i>
              <b>${el.ques}</b>
            </a>
          </h2>
        </div>
        <div
          id="collapse-${i}"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <p class="mb-2">${el.ans}</p>
            <p class="mb-2 mt-4">${el._ans ? el._ans : ""}</p>
          </div>
        </div>
      </div>
        `;
  });
}
