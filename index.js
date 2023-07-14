const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())

    .then((data) => displayUsers(data.data.tools));
};

const displayUsers = (users) => {
  console.log(users);

  // step-1:  set container

  const container = document.getElementById("card-container");

  // display 6 cards

  users = users.slice(0, 6);

  users.forEach((user) => {
    console.log(user);

    // step-2: set div for every children

    const cardDiv = document.createElement("div");

    cardDiv.classList.add("col");

    cardDiv.innerHTML = `
          
          
          <div class="card h-100">
          <img src="${user.image}" class="card-img-top img-fluid "  alt="...">
          <div class="card-body ">
        
           
           
          <h6 class="fw-bold fs-4 mt-3">Features

           <ol id="ol"> </ol>
             
       
       
       
       </h6>
           
           
           
           </div>
          
            <div class="card-footer ">
            
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

loadData();
