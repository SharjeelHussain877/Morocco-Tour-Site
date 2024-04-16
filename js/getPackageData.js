const arr = [
  {
    id: 1234,
    image:
      "https://awesomemoroccotours.com/destinations/marrakech//images/316273400%20(1).jpg",
    package_name: "Morocco Gate way",
    location: "Marrakech",
    day: 8,
    night: 7,
    package_title: "Marrakech back to Marrakech",
    price: 750,
    package_description:
      "Arrival at Marrakech: You will be picked up from the airport upon your arrival and transferred to the Riad, located in the Medina, the historical center of Marrakech. It's just a two-minute walk from the famous Jamaa El Fna square. In the afternoon, we recommend exploring the Medina on your own, especially the square where you'll find narrators, jugglers, diviners, snake charmers, dancers, and more. Overnight stay at the Riad.",
    facilities: [
      {
        true: true,
        name: "Private Transportation with AC",
      },
      {
        true: true,
        name: "Driver & guide",
      },
      {
        true: true,
        name: "8 Luxury night accommodation",
      },
      {
        true: true,
        name: "8 Breakfast",
      },
      {
        true: true,
        name: "4 dinners",
      },
      {
        true: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        true: true,
        name: "Drinks",
      },
      {
        true: true,
        name: "Lunchs",
      },
    ],
  },
  {
    id: 1234,
    image:
      "https://awesomemoroccotours.com/destinations/marrakech/images/marrakech-areas.jpg",
    package_name:
      "Imperial Cities History and Culture 5 Stars Hotels Tour from Marrakech",
    location: "Marrakech",
    day: 4,
    night: 3,
    package_title: "Marrakech back to Marrakech",
    price: 1350,
    package_description:
      "Arrival at Marrakech: You will be picked up from the airport upon your arrival and transferred to the Riad, located in the Medina, the historical center of Marrakech. It's just a two-minute walk from the famous Jamaa El Fna square. In the afternoon, we recommend exploring the Medina on your own, especially the square where you'll find narrators, jugglers, diviners, snake charmers, dancers, and more. Overnight stay at the Riad.",
    facilities: [
      {
        true: true,
        name: "Private Transportation with AC",
      },
      {
        true: true,
        name: "Driver & guide",
      },
      {
        true: true,
        name: "8 Luxury night accommodation",
      },
      {
        true: true,
        name: "8 Breakfast",
      },
      {
        true: true,
        name: "4 dinners",
      },
      {
        true: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        true: true,
        name: "Drinks",
      },
      {
        true: true,
        name: "Lunchs",
      },
    ],
  },
  {
    id: 1234,
    image:
      "https://awesomemoroccotours.com/destinations/marrakech/images/f4.jpg",
    package_name: "Marrakech to Merzouga ending in Fes",
    location: "fes",
    day: 1,
    night: 1,
    package_title: "Marrakech back to Marrakech",
    price: 2000,
    package_description:
      "Arrival at Marrakech: You will be picked up from the airport upon your arrival and transferred to the Riad, located in the Medina, the historical center of Marrakech. It's just a two-minute walk from the famous Jamaa El Fna square. In the afternoon, we recommend exploring the Medina on your own, especially the square where you'll find narrators, jugglers, diviners, snake charmers, dancers, and more. Overnight stay at the Riad.",
    facilities: [
      {
        true: true,
        name: "Private Transportation with AC",
      },
      {
        true: true,
        name: "Driver & guide",
      },
      {
        true: true,
        name: "8 Luxury night accommodation",
      },
      {
        true: true,
        name: "8 Breakfast",
      },
      {
        true: true,
        name: "4 dinners",
      },
      {
        true: true,
        name: "Walking tour in Marrakech & Essouira",
      },
      {
        true: true,
        name: "Drinks",
      },
      {
        true: true,
        name: "Lunchs",
      },
    ],
  },
];

function renderPackages() {
  const container = document.getElementById("all-packages");
  container.innerHTML = "";

  arr.forEach(
    (el) =>
      (container.innerHTML += `
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="package-item">
              <div class="overflow-hidden p-img">
                <img class="img-fluid" src="${el.image}" alt="package-images" />
              </div>
              <div class="d-flex border-bottom">
                <small class="flex-fill text-center border-end py-2 text-capitalize"
                  ><i class="fa fa-map-marker-alt text-primary me-2"></i
                  >${el.location}</small
                >
                <small class="flex-fill text-center border-end py-2 text-capitalize"
                  ><i class="fa fa-calendar-alt text-primary me-2"></i>${el.day}
                  ${el.day == 1 ? "day" : "days"}</small
                >
                <small class="flex-fill text-center py-2 text-capitalize"
                  ><i class="fa fa-user text-primary me-2"></i>${el.night} ${
        el.day == 1 ? "night" : "nights"
      }</small  
                >
              </div>
              <div class="text-center p-4">
                <h3 class="mb-0">$${el.price}</h3>
               
                <p class="p-name text-capitalize">
                  ${el.package_name}
                </p>
                <div class="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    class="btn btn-sm btn-primary px-3 border-end"
                    style="border-radius: 30px 0 0 30px"
                    >Package Details</a
                  >
                  <a
                    href="#"
                    class="btn btn-sm btn-primary px-3"
                    style="border-radius: 0 30px 30px 0"
                    >Inquire Now</a
                  >
                </div>
              </div>
            </div>
          </div>
    `)
  );
}

renderPackages();

const removeElems = [
  `<div class="mb-3">
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                  <small class="fa fa-star text-primary"></small>
                </div>`,
];
