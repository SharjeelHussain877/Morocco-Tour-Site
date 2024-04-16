let footerElem = document.getElementById("footer");

footerElem.innerHTML = "";

footerElem.innerHTML = `
<div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Company</h4>
              <a class="btn btn-link" href="index.html#about">About Us</a>
              <a class="btn btn-link" href="contact.html">Contact Us</a>
              <a class="btn btn-link" href="index.html#destination">Destination</a>
              <a class="btn btn-link" href="index.html#activities"
                >Activities</a
              >
              <a class="btn btn-link" href="package.html">Packages</a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Contact</h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, Karachi,
                PAK
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-outline-light btn-social" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-outline-light btn-social" href=""
                  ><i class="fab fa-youtube"></i
                ></a>
                <a class="btn btn-outline-light btn-social" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Gallery</h4>
              <div class="row g-2 pt-2">
                <div class="col-4">
                  <img class="img-fluid p-1" src="img/package-1.jpg" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid p-1" src="img/package-2.jpg" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid p-1" src="img/package-3.jpg" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid p-1" src="img/package-2.jpg" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid p-1" src="img/package-3.jpg" alt="" />
                </div>
                <div class="col-4">
                  <img class="img-fluid p-1" src="img/package-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-3">Newsletter</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, corrupti!
              </p>
              <div class="position-relative mx-auto" style="max-width: 400px">
                <input
                  class="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; Designed and developed by Sharjeel Husssain
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                </div>
              </div>
            </div>
          </div>
        </div>
`;
