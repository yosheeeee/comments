let postLike = document.querySelector('#post-like')
postLike.addEventListener('click', function(event){
    let likeCounter = postLike.nextElementSibling
    postLike.classList.toggle('post-not-liked')
    postLike.classList.toggle('post-liked')
    if (postLike.classList.contains('post-liked')){
        likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1 + ' likes'
    }else{
        likeCounter.innerHTML = parseInt(likeCounter.innerHTML) - 1 + ' likes'
    }
})

let date = new Date()
let postDate = document.querySelector('#post-date')
postDate.innerHTML = `today at   ${date.getHours()}:${date.getMinutes()}`

function addLike(event){
    if (event.target.tagName != 'IMG') return
    target = event.target
    console.log('hello')
    if (target.classList.contains('bin')){
        console.dir(target)
    }
}

document.querySelectorAll('.comment').forEach(elem => elem.addEventListener('click',addLike))