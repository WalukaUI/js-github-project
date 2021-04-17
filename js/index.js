
function fetchserchUsers(value) {
    fetch(`https://api.github.com/search/users?q=${value}&per_page=10`, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    })
        .then(res => res.json())
        .then(json => {
            document.getElementById('user-list').innerHTML = '';
            json.items.forEach(element => {
            createName(element.login)
            createAvatar(element.avatar_url)
            createLink(element.html_url, element.avatar_url)
            catchClickOnSerch.value=""
        })})
}

function fetchserchRepos(value){
    fetch(`https://api.github.com/search/repositories?q=${value}&per_page=10`, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    })
        .then(res => res.json())
        .then(json => {
            document.getElementById('user-list').innerHTML = '';
            json.items.forEach(res => {
            createName(res.name)
            createAvatartoRepo(res.description,res.id)
            createLinktorepo(res.html_url, res.id)
            catchClickOnSerch.value=""
        })})
}
const parentUl = document.getElementById('user-list')

function createName(x) {
    let newLi = document.createElement('h3')
    parentUl.appendChild(newLi)
    newLi.innerHTML = x
}

function createAvatar(y) {
    let newp = document.createElement('a')
    parentUl.appendChild(newp)
    newp.href = y
    newp.id = y
    newp.innerHTML = "Profile Picture"
}

function createLink(z, r) {
    const newplink = document.getElementById(r)
    newplink.appendChild(document.createElement("br"));
    let newUrl = document.createElement('a')
    parentUl.appendChild(newUrl)
    newUrl.href = z
    newUrl.innerHTML = "Checkout my Repo's"
    newUrl.target = "blank"
}


//Serchby repo name functions//

function createAvatartoRepo(y,d) {
    let newp = document.createElement('p')
    parentUl.appendChild(newp)
    newp.id = d
    newp.innerHTML =`DISCRIPTION: ${y}`
}

function createLinktorepo(z, r) {
    const newplink = document.getElementById(r)
    newplink.appendChild(document.createElement("br"));
    let newUrl = document.createElement('a')
    parentUl.appendChild(newUrl)
    newUrl.href = z
    newUrl.innerHTML = "Checkout the Repo"
    newUrl.target = "blank"
}
//Event listners//

const catchClickOnSerch = document.getElementById("search")
const submitBtn = document.getElementById("submit-button")
const repoBtn = document.getElementById("repo-serch")
const divcontainer=document.getElementsByTagName('ul')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchserchUsers(catchClickOnSerch.value)
})
repoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchserchRepos(catchClickOnSerch.value)
})
catchClickOnSerch.addEventListener('click',(e) => {

    //window..reload(divs);

})

//const divs=document.getElementById('github-container')
//const aaa=document.getElementsByTagName('a')
// if(aaa.length!==0){
//     divs.removeChild(document.getElementById('user-list'))
//     let newUl=document.createElement('ul')
//     divs.appendChild(newUl)
//     newUl.id='user-list'
//     fetchserchUsers(catchClickOnSerch.value)
// }else{
// fetchserchUsers(catchClickOnSerch.value)
// }