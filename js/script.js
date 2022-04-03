
// question 1

const cat = {
  property1: "complain",
  catSounds: function () {
    //return "meow!";
  }
};
console.log("meow!");


// Question 2 and 3 

const heading = document.querySelector("h3");
heading .innerHTML =  "Updated heading";

heading.style.fontSize= "2em";



//Question 4

const subheading = document.querySelector("h3")
console.log(subheading.className);

subheading.className = "subheading";

console.log(subheading.className);

//Question 5

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {

  console.log(paragraphs [i]);
  
  //paragraphs.style.color = "red";

}

//Question 6

const resultsContainer = document.querySelector(".results")

console.log(resultsContainer.innerHTML);

resultsContainer .innerHTML +=`<p>New paragraph</p>`;

console.log(resultsContainer.innerHTML);

//question 7

const cats = [
  {
      name: "Blob",
      age: 10
  },
  {
      name: "Harold",
  },
  {
      name: "Blurt",
      age: 21
  }
];

console.log(cats);


function animal(list){

  for(let i = 0 ; i <cats.length ; i++){

    console.log(cats[i].name);
    }
  };

  animal(cats)


  //Question 8
  const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
  ];

  function createCats(cats) {
      
      let catNames = "";
      
      for(let i = 0; i < cats.length; i++) {
          // console.log(items[i]);
          
          catNames = catNames + "<p>" + items[i] + "</p>";
          // console.log(listItems);
      }
      
      const catHtml = "<p>" + catNames + "</p>";
      
      // console.log(finalHtml);
      
      return catHtml;
      
  }
  
  const catHtml = createList(colours);
  
  console.log(catHtml);
  
  const container = document.querySelector("cat-container");
  container.innerHTML = newHtml;