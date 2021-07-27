// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            const jsonPromise = response.json();
            jsonPromise.then(function(json) {
                let container = document.querySelector('#container');
                let astronautList = "";
                for(i of json){
                
                  astronautList +=  
                  `
                  <div class="astronaut">
                    <div class="bio">
                        <h3> ${i.firstName} ${i.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${i.hoursInSpace}</li>
                            <li class=${i.active} >Active: ${i.active}</li>
                            <li>Skills: ${i.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${i.picture}>
                </div>
                  `
                }
                astronautList += `Count: ${i.length}`;
                container.innerHTML = astronautList;
                
      
                
            })
        });
    

    });