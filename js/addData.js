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

    try {
        const docRef = await addDoc(collection(db, "contact"), contactInput);
        console.log("Document written with ID: ", docRef.id);
        form.reset();
        $("#spinner").removeClass("show");
    } catch (e) {
        console.error("Error adding document: ", e);
        $("#spinner").removeClass("show");
    }
}

const contactForm = document.getElementById("contact-form");
contactForm?.addEventListener("submit", submitContactForm);


const submitBookingForm = async (event) => {
    event.preventDefault();
    $("#spinner").addClass("show");

    const form = event.target;

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const subjectInput = form.querySelector("#select1");
    const messageInput = form.querySelector("#message");

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    let bookingFormInput = {
        name,
        email,
        subject,
        message
    }
    console.log(bookingFormInput)
    try {
        const docRef = await addDoc(collection(db, "booking"), bookingFormInput);
        console.log("Document written with ID: ", docRef.id);
        form.reset();
        $("#spinner").removeClass("show");
    } catch (e) {
        console.error("Error adding document: ", e);
        $("#spinner").removeClass("show");
    }
}

const bookingForm = document.getElementById("booking-form");
bookingForm?.addEventListener("submit", submitBookingForm);
