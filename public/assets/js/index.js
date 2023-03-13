
window.onload = function() {
    const worldMapObject = document.querySelector('#world-map-object');
    const wolrdMapContent = worldMapObject.contentDocument;
    const popup = document.getElementById("popup");
    const countryName = document.getElementById("country-name");
    
    wolrdMapContent.addEventListener('click', function(event) {

    // in the svg image of the world some countries have thier name saved as a class and some as a name attribute, which is why an if else statement is needed.

        const name = event.target.getAttribute('name');
        const className = event.target.classList.value;

        if (name == null){
            popup.classList.toggle("hidden");
            countryName.innerHTML = className;
        }
        else {
            popup.classList.toggle("hidden");
            countryName.innerHTML = name;
        }

    });
    
  }