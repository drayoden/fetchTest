
function getText() {
    
    // non-arrow function way
    // fetch('sample.txt')
    //     .then(function (res) {
    //         return res.text();
    //     }) 
    //     .then( function(data) {
    //         console.log(data)
    //     })

    // arrow function way
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err))
    
}

function getUsers() {

    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<p>Users are in users.json</p><br><h3>Users</h3>';
            data.forEach(function(user){
                output += `
                  <ul class="collection">
                    <li class="collection-item">ID: ${user.id}</li>
                    <li class="collection-item">Name: ${user.name}</li>
                    <li class="collection-item">Email: ${user.email}</li>
                  </ul>
                `;
            });   
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err))
    
}

function getPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<p>Posts from https://jsonplaceholder.typicode.com/posts</p><br><h2>Posts</h2>';
            data.forEach(function(post){
                output += `
                  <div class="card blue-grey">
                    <div class="card-content white-text">
                        <span class="card-title">${post.title}</span>
                        <p>${post.body}</p>
                    </div>
                  </div>  
                `;
            });   
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err))
    
}

function addPost(e) {
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

}



document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);
