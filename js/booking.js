document.addEventListener('DOMContentLoaded', function() {
    // const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const stayRadios = document.querySelectorAll('input[name="stay-duration"]');
    const crowdRadios = document.querySelectorAll('input[name="crowd-size"]');
    const townCheckBoxes = document.querySelectorAll('input[name="town"]');
    const checkedValues = {}; 
    
    townCheckBoxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            toggleEffect(this);
            if (this.checked) {
                checkedValues[this.value] = true;  
            } else {
                delete checkedValues[this.value];
            }
            console.log(checkedValues);
        });
    });
    
    stayRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            toggleEffect(this);
            console.log(this.value);
        });
    });

    crowdRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            toggleEffect(this);
            console.log(this.value);
        });
    });
    
    function toggleEffect(element) {
        const label = element.nextElementSibling;
        const value = element.value;
        if (element.checked) {
            label.style.backgroundColor = 'var(--primary)';
            label.style.color = 'white';
        } else {
            label.style.backgroundColor = 'transparent';
            label.style.color = 'var(--dark)';
        }
        
        if (!element.checked) {
            label.style.backgroundColor = 'transparent';
            // Clear the value if the checkbox is unchecked
            element.value = '';
        }
    
        if (value === 'other') {
            // Here you can add additional handling specific to 'other' value
        } else {
            // Handle other values if needed
        }
    }
});
