
const container = document.querySelector(".container");
const title = document.getElementById("title");
const description = document.getElementById("description");

function showalltasks(){
    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

         const innerdiv = document.createElement("innerdiv");
        div.append(innerdiv);

        const p = document.createElement("p");
         p.innertext = value.title;
         innerdiv.append(p);

         const span = document.createElement("span");
         span.innertext = value.description;
         innerdiv.append(span);

         div.append(innerdiv);

        const btn = document.createElement("btn");
         btn.setAttribute("class","deletebtn");

          btn.innertext = "remove";

          btn.addEventListener("click",()=>{ //onclicking remove btn it will work
            removetasks();                   //same chizz hamm onclick event dekkar bhi kr skte thae html mae
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks)); //local storage se delete hoga
            showalltasks();
          });

        div.append(btn);
        container.append(div);

    });
};

function removetasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task"); //.task means will select all div present
        div.remove();                                            // this div is differnt from upperwalla bcz uska scope is end .
    });
}



const tasks = [];
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    
    e.preventDefault();   //when we press button to submit form page will not reload
    removetasks();
    tasks.push({
        title : title.value,
        description : description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks)); // tasks ko store kr denge bcz i dont want to loose my data on reloading
        console.log(tasks);                              // local storage mae object store hote h toh convert it into string
        showalltasks();   //function ko call krne pae title show hoga but 
                          //agar mae firse kuch type kru toh phle walla title
                          //wahi pae remain hoga toh ussko hatana h ess function ko 
                          //call krne se phle , means joh render hua h phle se remove it.

    
});

