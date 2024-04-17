let footerElem = document.getElementById("footer");

footerElem.innerHTML = "";

footerElem.innerHTML = `<div
class="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
data-wow-delay="0.1s"
style="
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.5)),
      to(rgba(0, 0, 0, 0.5))
    ),
    url(https://awesomemoroccotours.com/wp-content/themes/awesomemoroccotours/assets/images/images/footer-bg.jpg)
      no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://awesomemoroccotours.com/wp-content/themes/awesomemoroccotours/assets/images/images/footer-bg.jpg)
      no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
"
>
<div class="container py-5">
  <div class="row g-5">
    <div class="col-lg-4 col-md-6 social">
      <h4 class="text-white mb-3">Follow us</h4>
      <div>
        <a class="btn" href="">
          <i class="text-primary me-3 fab fa-instagram"></i> Instagram
        </a>
      </div>
      <div>
        <a class="btn" href="">
          <i class="text-primary me-3 fab fa-facebook-f"></i> Facebook
        </a>
      </div>
      <div>
        <a class="btn" href="">
          <i class="text-primary me-3 fab fa-twitter"></i> Twitter
        </a>
      </div>
      <div>
        <a class="btn" href="">
          <i class="text-primary me-3 fab fa-tripadvisor"></i>
          Tripadvison
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 social">
      <h4 class="text-white mb-3">Contact</h4>
      <div>
        <a class="btn" href="">
          <i class="fa fa-phone-alt me-3 text-primary"></i> (929)
          399-6203
        </a>
      </div>
      <div>
        <a class="btn" href="">
          <i
            class="fab fa-whatsapp me-3 text-primary"
            style="font-size: 20px"
          ></i>
          +212 673-244028
        </a>
      </div>
      <div>
        <a class="btn" href="">
          <i class="fa fa-envelope me-3 text-primary"></i>
          awesomemoroccotour@gmail.com
        </a>
      </div>
      <div>
        <a class="btn" href="">
          <i class="fa fa-map me-3 text-primary"></i>Marrakech -
          Morocco
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 quick-links">
      <h4 class="text-white mb-3">Quick Links</h4>
      <p class="mb-2"><a href="index.html">Home</a></p>
      <p class="mb-2">
        <a href="index.html#destination">Destination</a>
      </p>
      <p class="mb-2">
        <a href="index.html#activities">Activities</a>
      </p>
      <p class="mb-2"><a href="index.html#reviews">Reviews</a></p>
      <p class="mb-2"><a href="package.html">Packages</a></p>
      <p class="mb-2"><a href="contact.html">Contact</a></p>
    </div>
  </div>
</div>
<div class="container">
  <div class="copyright">
    <div class="row">
      <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
        &copy; Copyright by Awesome Morocco Tours company 2010-2022
      </div>
      <div class="col-md-6 text-center text-md-end">
        <div class="footer-menu">
          Designed and Developed by
          <a
            href="https://sharjeelhussain877.vercel.app/"
            class="shar"
            >Sharjeel Husssain</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;
