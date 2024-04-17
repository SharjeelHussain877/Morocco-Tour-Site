import data from './data.js';
const packagesArr = data()

  const container = document.getElementById("all-packages");
  container.innerHTML = "";

  packagesArr.forEach(
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
                ${el.dayTrip ? (
                  `<small class="flex-fill text-center border-end py-2 text-capitalize"
                ><i class="fa fa-calendar-alt text-primary me-2"></i>Day Trip
                </small>`
            ) : (
              `<small class="flex-fill text-center border-end py-2 text-capitalize"
                  ><i class="fa fa-calendar-alt text-primary me-2"></i>${el.day}
                  ${el.day == 1 ? "day" : "days"}</small
                >
                <small class="flex-fill text-center py-2 text-capitalize"
                  ><i class="fa fa-user text-primary me-2"></i>
                  ${el.night} ${el.day == 1 ? "night" : "nights"}
                  </small>`
                )}
              </div>
              <div class="text-center p-4">
                <h3 class="mb-0">$${el.price}</h3>
               
                <p class="p-name text-capitalize">
                  ${el.package_name}
                </p>
                <div class="d-flex justify-content-center mb-2">
                  <a
                    href="packagedetail.html?id=${el.id}"
                    class="btn btn-sm btn-primary px-3 border-end"
                    style="border-radius: 30px 0 0 30px"
                    >Package Details</a
                  >
                  <a
                    href="booking.html"
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


// const currentPackage = packagesArr.find((el) => el.id == id);

