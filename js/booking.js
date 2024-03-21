let bookingData = {
    stayDuration: "",
    person: "",
    towns: {},
    activities: {},
    contacts: {},
}

const duration = document.querySelectorAll('input[name="stay-duration"]');
const selectedDuration = document.getElementById('selected-duration');

duration.forEach(radio => {
    radio.addEventListener('change', function() {
        selectedDuration.textContent = `Selected duration: ${this.value}`;
        bookingData.stayDuration = this.value;
        console.log(bookingData)
    });
});

const personCount = document.querySelectorAll('input[name="person-count"]');
const selectedpersonCount = document.getElementById('person-count');

personCount.forEach(radio => {
    radio.addEventListener('change', function() {
        selectedpersonCount.textContent = `Selected person: ${this.value}`;
        bookingData.person = this.value;
        console.log(bookingData)
    });
});

const town = document.querySelectorAll('input[name="town"]');
const selectedTowns = document.getElementById('town-set');

town.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            bookingData.towns[this.value] = true;
        } else {
            delete bookingData.towns[this.value];
        }
        updateSelectedTowns();
        console.log(bookingData)
    });
});

function updateSelectedTowns() {
    const selectedTownsText = Object.keys(bookingData.towns).join(', ');
    selectedTowns.textContent = `Selected Towns: ${selectedTownsText}`;
}


const activity = document.querySelectorAll('input[name="activity"]');
const selectedActivities = document.getElementById('activity-set');

activity.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            bookingData.activities[this.value] = true;
        } else {
            delete bookingData.activities[this.value];
        }
        updateSelectedActivities();
        console.log(bookingData)
    });
});

function updateSelectedActivities() {
    const selectedActivitiesText = Object.keys(bookingData.activities).join(', ');
    selectedActivities.textContent = `Selected Activities: ${selectedActivitiesText}`;
}

const contact = document.querySelectorAll('input[name="contact"]');
const selectedContact = document.getElementById('contact-set');

contact.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            bookingData.contacts[this.value] = true;
        } else {
            delete bookingData.contacts[this.value];
        }
        updateSelectedContact();
        console.log(bookingData)
    });
});

function updateSelectedContact() {
    const selectedContactText = Object.keys(bookingData.contacts).join(', ');
    selectedContact.textContent = `Selected Contact: ${selectedContactText}`;
}




// Data structure for inputs
// const inputs = {
//     stayDuration: {
//       elements: document.querySelectorAll('input[name="stay-duration"]'),
//       selected: document.getElementById('selected-duration'),
//       values: '',
//     },
//     personCount: {
//       elements: document.querySelectorAll('input[name="person-count"]'),
//       selected: document.getElementById('person-count'),
//       values: '',
//     },
//     town: {
//       elements: document.querySelectorAll('input[name="town"]'),
//       selected: document.getElementById('town-set'),
//       values: {},
//     },
//     activity: {
//       elements: document.querySelectorAll('input[name="activity"]'),
//       selected: document.getElementById('activity-set'),
//       values: {},
//     },
//     contact: {
//       elements: document.querySelectorAll('input[name="contact"]'),
//       selected: document.getElementById('contact-set'),
//       values: {},
//     },
//   };
  
//   // Function to handle input selection
//   function handleInputChange(input) {
//     input.elements.forEach(checkbox => {
//       checkbox.addEventListener('change', function() {
//         if (this.checked) {
//           input.values[this.value] = true;
//         } else {
//           delete input.values[this.value];
//         }
//         updateSelected(input);
//       });
//     });
//   }
  
//   // Function to update selected input values
//   function updateSelected(input) {
//     const selectedText = Object.keys(input.values).join(', ');
//     input.selected.textContent = `Selected ${input.name}: ${selectedText}`;
//   }
  
//   // Refactoring input handling
//   for (const key in inputs) {
//     if (inputs.hasOwnProperty(key)) {
//       const input = inputs[key];
//       input.name = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize input name
//       handleInputChange(input);
//     }
//   }
  
