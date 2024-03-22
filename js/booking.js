import { submitForm } from "./addData.js";

let bookingData = {
  stayDuration: "",
  person: "",
  towns: {},
  activities: {},
  contacts: {},
};

const duration = document.querySelectorAll('input[name="stay-duration"]');
const selectedDuration = document.getElementById("selected-duration");

duration.forEach((radio) => {
  radio.addEventListener("change", function () {
    selectedDuration.textContent = `Selected duration: ${this.value}`;
    bookingData.stayDuration = this.value;
  });
});

const personCount = document.querySelectorAll('input[name="person-count"]');
const selectedpersonCount = document.getElementById("person-count");

personCount.forEach((radio) => {
  radio.addEventListener("change", function () {
    selectedpersonCount.textContent = `Selected person: ${this.value}`;
    bookingData.person = this.value;
  });
});

const town = document.querySelectorAll('input[name="town"]');
const selectedTowns = document.getElementById("town-set");

town.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      bookingData.towns[this.value] = true;
    } else {
      delete bookingData.towns[this.value];
    }
    updateSelectedTowns();
  });
});

function updateSelectedTowns() {
  const selectedTownsText = Object.keys(bookingData.towns).join(", ");
  selectedTowns.textContent = `Selected Towns: ${selectedTownsText}`;
}

const activity = document.querySelectorAll('input[name="activity"]');
const selectedActivities = document.getElementById("activity-set");

activity.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      bookingData.activities[this.value] = true;
    } else {
      delete bookingData.activities[this.value];
    }
    updateSelectedActivities();
  });
});

function updateSelectedActivities() {
  const selectedActivitiesText = Object.keys(bookingData.activities).join(", ");
  selectedActivities.textContent = `Selected Activities: ${selectedActivitiesText}`;
}

const contact = document.querySelectorAll('input[name="contact"]');
const selectedContact = document.getElementById("contact-set");

contact.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      bookingData.contacts[this.value] = true;
    } else {
      delete bookingData.contacts[this.value];
    }
    updateSelectedContact();
  });
});

function updateSelectedContact() {
  const selectedContactText = Object.keys(bookingData.contacts).join(", ");
  selectedContact.textContent = `Selected Contact: ${selectedContactText}`;
}

const bookTour = document.getElementById("book-tour");
bookTour.addEventListener("submit", submitBookingData);

function submitBookingData(e) {
  e.preventDefault();
  const full_name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone_number = document.getElementById("phone-number").value;
  const arrival_date = document.getElementById("arrival-date").value;

  if (
    full_name == "" ||
    email == "" ||
    phone_number == "" ||
    arrival_date == ""
  ) {
    swal({
      title: "Please fill all the required fields!",
      icon: "warning",
      buttons: {
        cancel: 'OK'
      },
    });
  } else {
    bookingData.full_name = full_name;
    bookingData.email = email;
    bookingData.phone_number = phone_number;
    bookingData.arrival_date = arrival_date;

    const missingOptions = [];

    if (!bookingData.stayDuration) {
      missingOptions.push("stay duration");
    }

    if (!bookingData.person) {
      missingOptions.push("person count");
    }

    if (Object.keys(bookingData.towns).length === 0) {
      missingOptions.push("towns");
    }
    if (Object.keys(bookingData.activities).length === 0) {
      missingOptions.push("activity");
    }
    if (Object.keys(bookingData.contacts).length === 0) {
      missingOptions.push("contact");
    }

    if (missingOptions.length > 0) {
      swal({
        title: `Please select ${missingOptions.join(', ')}!`,
        icon: "warning",
        buttons: {
          cancel: 'OK'
        },
      });
    } else {
      submitForm(bookingData);
      bookTour.reset()
    }
  }
}
