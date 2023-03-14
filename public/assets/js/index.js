
window.onload = function() {
    const worldMapObject = document.querySelector('#world-map-object');
    const wolrdMapContent = worldMapObject.contentDocument;
    const popup = document.getElementById("popup");
    const countryName = document.getElementById("country-name");
    const recipeName = document.getElementById("recipe-name");
    const description = document.getElementById("description");
    const ingredientList = document.getElementById("ingredient-list");
    const instructionList = document.getElementById("instruction-list");
    
    wolrdMapContent.addEventListener('click', function(event) {

    // in the svg image of the world some countries have thier name saved as a class and some as a name attribute, which is why an if else statement is needed. IDK why they did that I didn't make the SVG.

        const name = event.target.getAttribute('name');
        const className = event.target.classList.value;

        if (name == null){
            popup.classList.toggle("hidden");
            countryName.innerHTML = className;

            fetch('/data')
            .then(response => response.json())
            .then(data => {
                const result = Object.keys(data).filter(key => key === className);
                if (result.length > 0) {
                  console.log(`Found '${className}' with value '${data[className]}'`);
                } else {
                  console.log(`Could not find '${className}'`);
                }
              })
            .catch(error => console.error(error));
        }
        else {
            countryName.innerHTML = name;

            fetch('/data')
            .then(response => response.json())
            .then(data => {
                // searching the JSON data for the country name 
                const result = Object.keys(data).filter(key => key === name);
                if (result.length > 0) {
                    
                    // chooses random recipe from the array of recipes
                    const randomIndex = Math.floor(Math.random() * data[result].recipes.length);

                    resultPath = data[result].recipes[randomIndex];

                    recipeName.innerHTML = resultPath.name;
                    description.innerHTML = resultPath.description;
                    ingredientList.innerHTML = resultPath.ingredients;
                    instructionList.innerHTML = resultPath.instructions;


                    popup.classList.toggle("hidden");
                } else {
                  console.log(`Could not find '${name}'`);
                }
              })
            .catch(error => console.error(error));
        }


    });
    
  }

