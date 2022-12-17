
//2. Create two variables:
// 2. myLeads -> should be assigned to an empty array
//2.  inputEl -> should be assigned to the text input field

let myLeads = []


const inputEl = document.getElementById("input-el")   //why const to declare var? developers use both methods
//However, const cannot be reassigned e.g inputEl = "Hello!", meaning you can't assign another value

//1. create event listener to get our button to work//
let inputBtn = document.getElementById("input-btn")

//4. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

//16. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")

const tabBtn = document.getElementById("tab-btn")

// 13. // Get the leads from the localStorage - PS: JSON.parse(). Store it in a variable, leadsFromLocalStorage

//We have two tyoes of data, e.g ["lead1", "lead2"]-truthy or null - falsy
const leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads))
console.log(leadsFromLocalStorage)
// 14. Check if leadsFromLocalStorage is truthy

// 15. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads) 
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function() {
    //20. Grab the URL of the current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //19. save the url instead of logging it out
        //console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    //21. for the chrome API, we need to add permisions and other details to the manifest.JSON file.
    
})

// 9. Wrap the code below in a renderLeads() function; this shows all our leads
// 18. refactor the render code by adding a parameter. This makes it general and we can use the function for other arrays
function render(leads) {
    let listItems = ""

    for (let i=0; i<myLeads.length; i++) {
        //.7 Render the listItems inside the unordered list using ulEl.innerHTML
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"          //We want the inputs ordered, so we pass li as inner html.
        listItems += `   
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }//template strings

    // 8. Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems

}


// 16. Listen for double clicks on the delete button (google it!)
// 17. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


//3. Push the value "www.awesomelead.com" to myArray when the input button is clicked
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)  //3. Use the assigned variable for input to push the value into the array or use the text
    //11. Clear out the input field after putting the first lead
    inputEl.value = ""
    //12. store the values in a local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    //10. Call the renderLeads() function
    render(myLeads)
})




//5. Render the leads in the unordered list using ulEl.textContent / innerHTML
//6. Create a variable, listItems, to hold all the HTML for the list items. Assign it to an empty string to begin with



// 5. Other than innerHTML, there is another alternative to modify our HTML content.
    //create element
    // set text content
    // append to ul
    //const li = document.createElement("li")
    //li.textContent = myLeads[i]
    //ulEl.append(li)




//USE THIS



// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// const tabBtn = document.getElementById("tab-btn")

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

// function render(leads) {
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//     render(myLeads)
// })