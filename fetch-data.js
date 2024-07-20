// Initialize the async function
async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';    // define the api url
    const dataContainer = document.getElementById('api-data');      //storage for api data     

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');   //getting data from apiUrl
        const users = await response.json();
        dataContainer.innerHTML = '';   //clear the loading message
        // create ul element
        const userList = document.createElement('ul');
        users.forEach(user=> {      //loop through users to create li element
            //create and append the li element
            document.createElement('li').textContent=user.name;
            userList.appendChild('li');
        });

        // Appen ul element/userlist to the data container for display
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = '';       //clear the loading message
        dataContainer.textContent = 'Failed to load user data.';        //indicates an eror occured during fetching data        
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);     //Invoke fetchUserData