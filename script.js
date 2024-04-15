/************  Part 2 Start: Random User data *********************/
let currentUsers = [];

/**
 * Clear the container of all its children
 */
function clearContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

/**
 * Create a card for a user
 * @param {Object} user - the user object
 * @returns {HTMLDivElement} - the card element
 */
function makeUserCard(user){
    let userCard = document.createElement('div');
    userCard.classList.add('card');

    //creating the user details div
    let userDetails = document.createElement('div');
    userDetails.classList.add('card-body');

    //making the user img   
    let userImg = document.createElement('img');
    userImg.src = user.picture.large;
    userImg.alt = user.name.first + ' ' + user.name.last;
    //styling the image
    userImg.style.width = '250px';
    userImg.classList.add('card-img-top');
    //adding it to the 'userDetails' div
    userDetails.appendChild(userImg);


    















    //adding the 'userDetails' div to the 'userCard' div
    userCard.appendChild(userDetails);
    return userCard;
}

/**
 *  Add the users to the page
 * @param {Array} users - an array of user objects to display 
 */
function displayUsers(users){

    //choose the container where to display the users
    let usersContainer = document.querySelector('#userCardsContainer');
    clearContainer(usersContainer);

    //create a card for each user

    

    
}

/**
 * An async function to fetch user data from the randomuser.me API
 * @returns {Promise} - a promise that resolves to the user data
 */
async function getUserData(){

    const baseURL = 'https://randomuser.me/api/?';



















    

    //fetch the data
    const response = await fetch(URL);
    if(!response.ok){
        alert(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

/**
 * An async function to handle the fetch users button click
 * @param {Event} event - the event object 
 */
async function handleFetchUsersBtn(event){

    //important to not reload the page
    event.preventDefault();
    console.log("Button clicked");

    //fetch the user data
    try {
        let usersData = await getUserData();
        console.log("User data:  ", usersData);
        //do something with the user data

        



        
    }
    //if there's an error, log it
    catch(error){
        console.error("Error fetching user data: ", error);
    }
}


/**
 * A function to filter users for only US users
 * @param {Array} users - an array of user objects 
 * @returns {Array} - an array of user objects that are from the US
 */
function filterForOnlyUS(users){
    let usUsers = [];
    for(const user of users){
        if(user.nat === 'US'){
            usUsers.push(user);
        }
    }
    return usUsers;
}

function filterCurrentUsers(filterValue){
    if(filterValue === 'all'){
        displayUsers(currentUsers);
    }
    else if(filterValue == 'onlyUS'){
        let usUsers = filterForOnlyUS(currentUsers);
        console.log("US users: ", usUsers);
        displayUsers(usUsers);
    }
    //try it out 3: Add other filters here
}

/************  Part 2 END: Random User data *********************/

/************  Part 1 START: Local JSON data *********************/
let jsonData = {};

function handleShowJSONDataBtn(){
    console.log("Show JSON data button clicked");
    console.log("JSON data: ", jsonData);
    let jsonDataOutput = document.querySelector('#jsonDataOutput');
    jsonDataOutput.textContent = JSON.stringify(jsonData, null, 2);
}

async function fetchJSONData(fileName){

    








}
/************  Part 1 END: local JSON data *********************/

function runProgram() {
    console.log("Program is running");

    /** Part 1: Getting local json data  */
    //getting the json data with/without await

    jsonData = fetchJSONData('astros');
    console.log("JSON data: ", jsonData);


    let fetchJSONDataButton = document.querySelector('#showJSONData');
    fetchJSONDataButton.addEventListener('click', handleShowJSONDataBtn);

    /** Part 2: Fetching users */

    // let fetchUsersButton = document.querySelector('#fetchUsers');
    // fetchUsersButton.addEventListener('click', (e) => handleFetchUsersBtn(e));

    // let filterUsersSelect = document.querySelector('#usersFilter');
    // filterUsersSelect.addEventListener('change', (event) =>{
    //     filterCurrentUsers(event.target.value);
    // });

}

document.addEventListener('DOMContentLoaded', runProgram);