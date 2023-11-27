const btn = document.getElementById('sbtn');
const input = document.getElementById('inp')
const moviesDiv = document.getElementById("movieData")
btn.addEventListener('click', fetchData)
async function fetchData ()
{
    const searchTerm = input.value
    const apikey = "a2a0e103"
    
    // fetch(`https://www.omdbapi.com/?s="${searchTerm}"&apikey=${apikey}`)
    // .then((res) => res.json())
    //     .then((data) => displayData(data))
    
    const res = await fetch(`https://www.omdbapi.com/?s="${searchTerm}"&apikey=${apikey}`)
    const data = await res.json()
    displayData(data)
}
function displayData (data)
{
    const movies = data.Search;
    console.log(movies)
    movies.forEach((ele) =>
    {
        console.log(ele)
        const div = document.createElement('div') 
        const image = document.createElement('img')
        image.src = ele.Poster;
        image.alt = ele.Title;
        image.classList.add('image')
        const para = document.createElement('p')
        para.textContent = ele.Title;
        div.appendChild(image)
        div.appendChild(para)
        moviesDiv.appendChild(div)  
    });
    
}