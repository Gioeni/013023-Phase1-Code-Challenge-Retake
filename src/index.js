const apiUrl = 'http://localhost:3000/characters'
const characterBar = document.getElementById('character-bar')
const voteForm = document.getElementById('votes-form')
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach((data) => {
            renderNames(data)
        })
    });
    function renderNames(cuties){
        const characterBar = document.getElementById('character-bar')
        const characterDiv = document.createElement('div')
        characterBar.appendChild(characterDiv)
        characterDiv.innerText = cuties.name

        characterDiv.addEventListener('click', () => {
            renderCutiesInfo(cuties)
    })
    }
    function renderCutiesInfo(cuties){
    const detailedInfo = document.getElementById('detailed-info')
    
    const cutieName = document.getElementById('name')
    cutieName.innerText = cuties.name
    const cutieImage = document.getElementById('image')
    cutieImage.src = cuties.image
    const voteCount = document.getElementById('vote-count')
    voteCount.innerHTML = cuties.votes 
    }
    function votes(voteForm){
    voteForm.addEventListener('submit', (event) => {
        event.preventDefault()
        addVotes(event.target)
    })
}
//     function addVotes(voteForm){

// }
    

    


