const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())

    .then((data) => displayUsers(data.data.tools))
    .catch((error) => {
      console.log(error);
    });
};

const displayUsers = (users) => {
  console.log(users);

  // step-1:  set container

  const container = document.getElementById("card-container");

  // no card found

  // const  noFound = document.getElementById('no-card-found');

  // if(users.length === 0)
  // {
  //   noFound.classList.remove('d-none')
  // }
  // else{
  //   noFound.classList.add('d-none')
  // }

  // display 6 cards
  // show all button here implemented


  const showAll = document.getElementById("show-all");

  if (users.length > 6) {

    users = users.slice(0, 6);

  

    showAll.classList.remove("d-none");
  } else {

    showAll.classList.add("d-none");
  }




  users.forEach((user) => {
    console.log(user);



    //  extract make a list of  features array
          
               let feature = user.features;

          function listOfItems(feature){
            let items = "";

            for(let i=0; i<user.features.length; i++)
            {

              items+= `<li>${user.features[i]} </li>`;
              // console.log(items)



            }
            return items;
          }
         

    // step-2: set div for every children

    const cardDiv = document.createElement("div");

    cardDiv.classList.add("col");

    cardDiv.innerHTML = `
          
          
          <div class="card h-100">
          <img src="${user.image}" class="card-img-top img-fluid "  alt="...">
          <div class="card-body ">
                  
          <h6 class="mt-3">Features

           <ol id="ol" class="mt-4">${listOfItems()} </ol>
       </h6>              
           </div>

            <div class="card-footer">
            
            <h5 class="card-title">${user.name}</h5>
            <small id="demo">time</small>
          </div>
         
            </div>
        </div>
          

          `;

    // let  allFeatures = `<li>${user.features} </li>`;

    // document.querySelector('ol').insertAdjacentHTML('beforeend', allFeatures);

    // step-4: appendchild with container(parent)

    container.appendChild(cardDiv);
  });
};



// loadData();


// not the best way to load show all




loadData();


