
 let timeNdate = new Date();


const loadData = () =>

{

    fetch('https://openapi.programming-hero.com/api/ai/tools')
     .then(res => res.json())
     
     .then( data => displayUsers(data.data.tools));
}


const displayUsers=users=>{

           
    // console.log(users.data.tools)

          



    users.forEach(user=>{


         console.log()
               





    })










}

loadData()