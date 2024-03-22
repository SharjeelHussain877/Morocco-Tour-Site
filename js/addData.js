import { db, collection, addDoc } from "./firebase.config.js";

const submitContactForm = async (event) => {
    event.preventDefault();
    $("#spinner").addClass("show");

    const form = event.target;

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const subjectInput = form.querySelector("#subject");
    const messageInput = form.querySelector("#message");

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    let contactInput = {
        name,
        email,
        subject,
        message
    }

    if (navigator.onLine) {
        try {
            const docRef = await addDoc(collection(db, "contact"), contactInput);
            form.reset();
            $("#spinner").removeClass("show");
            swal({
                title: "Thanks for contacting us⚡",
                icon: "success",
                button: "Okay!",
              });
            } catch (e) {
                console.error("Error adding document: ", e);
            $("#spinner").removeClass("show");
            swal({
                title: "Please try again letter!",
                text: "There is something error 🔴" ,
                icon: "error",
                button: "Okay!",
              });
        }
      } else {
          $("#spinner").removeClass("show");
          swal("Please check your internet connection!")
      }
}

const contactForm = document.getElementById("contact-form");
contactForm?.addEventListener("submit", submitContactForm);


async function submitForm (inputData) {
    $("#spinner").addClass("show");
    
    if (navigator.onLine) {
        try {
            const docRef = await addDoc(collection(db, "booking"), inputData);
            $("#spinner").removeClass("show");
            swal({
                title: "Booked Your Tour🛫",
                icon: "success",
                button: "Okay!",
              });
            } catch (e) {
                console.error("Error adding document: ", e);
            $("#spinner").removeClass("show");
            swal({
                title: "Please try again letter!",
                text: "There is something error 🔴" ,
                icon: "error",
                button: "Okay!",
              });
        }
      } else {
        alert("Please check your internet connection!")
          $("#spinner").removeClass("show");
      }
}

export {submitForm}