let postLike = document.querySelector('#post-like')
postLike.addEventListener('click', addLike)
let date = new Date()
let postDate = document.querySelector('#post-date')
postDate.innerHTML = `today at   ${date.getHours()}:${date.getMinutes()}`
let form = document.forms.addComment
form.userName.addEventListener('focus', removeWrong)
form.commentText.addEventListener('focus', removeWrong)

function addLike(event) {
    let likeCounter = event.target.nextElementSibling
    if (event.target.tagName != 'BUTTON') return
    let postLike = event.target
    postLike.classList.toggle('post-not-liked')
    postLike.classList.toggle('post-liked')
    if (postLike.classList.contains('post-liked')) {
        likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1 + ' likes'
    } else {
        likeCounter.innerHTML = parseInt(likeCounter.innerHTML) - 1 + ' likes'
    }
}

function removeWrong(event) {
    if (event.target.classList.contains('wrong')) event.target.classList.remove('wrong')
}

function deleteComment(event) {
    let currentComment = event.target.closest('.comment')
    currentComment.remove()
}

form.addEventListener('submit', function (event) {
    let userName = form.userName.value
    let commentText = form.commentText.value
    if (commentText == '') {
        form.commentText.classList.add('wrong')
        event.preventDefault()
        return
    } else if (userName == '') {
        form.userName.classList.add('wrong')
        event.preventDefault()
        return
    } else {
        event.preventDefault()
        addComment(event)
    }
})


function addComment(event) {
    let newComment = document.createElement('div')
    let userName = form.userName.value
    form.userName.value = ''
    let dateAtString = "";
    let commentTime = new Date()
    let commentDate = form.commentDate.value == '' ? new Date() : form.commentDate.valueAsDate
    form.commentDate.value = ''
    if (commentDate.getMonth() == date.getMonth() && commentDate.getFullYear() == date.getFullYear()) {
        if (commentDate.getDate() == date.getDate()) dateAtString = `today`
        else if (commentDate.getDate() == date.getDate() - 1) dateAtString = `yesterday`
        else dateAtString = `${commentDate.getDate()}.${commentDate.getMonth() + 1}.${commentDate.getYear()}`
    } else dateAtString = `${commentDate.getDate()}.${commentDate.getMonth() + 1}.${commentDate.getYear()}`
    dateAtString += ` at ${commentTime.getHours()}:${commentTime.getMinutes()}`
    let commentText = form.commentText.value
    form.commentText.value = ''
    newComment.className = 'comment'
    newComment.innerHTML = `<div class="comment-user"><img src="./src/profile.svg" alt="profile-image" /><p>${userName}</p><p>•</p><p id="comment-date">${dateAtString}</p><img src="./src/bin.svg" alt="bin" class="bin" /></div><p class="comment-text">${commentText}</p><div class="comment-likes"><div class="likes"><button class="post-not-liked comment-like"></button><p class="like-counter">0 likes</p></div></div></div>`
    newComment.addEventListener('click', event => {
        if (event.target.classList.contains('comment-like')) addLike(event)
        else if (event.target.classList.contains('bin')) deleteComment(event)
    })
    document.body.append(newComment)
    return
}
