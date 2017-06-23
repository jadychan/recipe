function getDataFromApi(){
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
            finalHTML += `      
                
                    <div class="col s3 m3">
                      <div class="card large">
                        <div class="card-image">
                          <img src="${item.recipe.image}"/>
                          <span class="card-title">${item.recipe.label}</span>
                        </div>
                        <div class="card-content">
                          <p>${item.recipe.ingredientLines}</p>
                        </div>
                        <div class="card-action">
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                    </div>`

        })
        
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML

    })
    
    .catch(function(error){
        console.log(error)
    })
}

