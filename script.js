function getDataFromApi(){
  
    var spinnerDiv = document.getElementById("spinner")
    spinnerDiv.innerHTML =  
     `  
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
      `
      
    var endpoint ='https://api.edamam.com/search?'

    
    var inputElement = document.getElementById('search')
    var value = inputElement.value
    
    var searchTerm = `q=${value.replace(" ","+")}&`
    var api_key = 'api_key=5e75da3239b58f4fb317d9c29d88d14f'
    var url = endpoint + searchTerm + api_key
    //get JSON data from url endpoint
    //JSON - JavaScript Object Notation
    fetch(url) //gets data from that url, issues GET requests, promises it'll return data 
    
    .then(function(data){
        return data.json()
    }) //then the data will come
    .then(function(json){
        console.log(json)

        var finalHTML = ''
        
        json.hits.forEach(function(item){
            finalHTML +=   `
            <div class="col s3 m3">    
              <div class="teal lighten-3 card medium">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${item.recipe.image}">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">${item.recipe.label}<i class="material-icons right">more_vert</i></span>
                  
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${item.recipe.label}<i class="material-icons right">close</i></span>
                  <p>${item.recipe.ingredientLines}</p>
                </div>
   
                <div class="card-action">
                  <a class = "white-text" href="${item.recipe.url}" target = "_blank">See More</a>
                </div>
              </div>
            </div>`

        })
        
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
        
        var spinnerDiv = document.getElementById('spinner')
        spinnerDiv.innerHTML = ''

    })
    
    .catch(function(error){
        console.log(error)
    })
}

function ClearFields() {
     document.getElementById("search").value = "";
}

var velocity = 0.5;
