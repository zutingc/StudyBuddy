// Menu side toggle
$('document').ready(function () {
    $('button.navbar-toggle').click(function () {
        var navbar_obj = $($(this).data("target"));
        navbar_obj.toggleClass("open");
    });
});

// Highlights current page
jQuery(function ($) {
    var path = window.location.href;
    $('ul li a').each(function () {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});


function addCollapse() {
    for (let i = 0; i < document.getElementsByClassName("eachPost").length; i++) {
        // for each class .btnUI i, add "href="#collapseCommenti" to .collapseBtn and id="collapseBtni" to each .collapseComments
        let commentBtn = document.getElementsByClassName("collapseBtn")[i]; // grab the HTML code for node of nodeNumber
        let commentContent = document.getElementsByClassName("collapseComments")[i];
        commentBtn.href = "#collapseBtn" + i.toString();
        commentContent.setAttribute("id", "collapseBtn" + i.toString());
        // for post, add unique numLikes id
        document.getElementsByClassName("likeCount")[i].setAttribute("id", "numLikes" + i.toString());
        // like button actions
        let likeElem = document.getElementsByClassName("likeBtn")[i];
        let dislikeElem = document.getElementsByClassName("dislikeBtn")[i];
        likeElem.addEventListener('click', function (event) { // add likes
            var numLikes = parseInt(document.getElementById('numLikes' + i.toString()).innerHTML);
            if (likeElem.classList.contains('liked')) { // already liked
                likeElem.classList.remove('liked');
                numLikes--;
            } 
            else if (dislikeElem.classList.contains('disliked')) { // already disliked
                dislikeElem.classList.remove('disliked');
                likeElem.classList.add('liked');
                numLikes += 2;
            } 
            else { // no like/dislike
                likeElem.classList.add('liked');
                numLikes++;
            } 
            document.getElementById("numLikes" + i.toString()).innerHTML = numLikes;
        });
        dislikeElem.addEventListener('click', function (event) { // add likes
            var numLikes = parseInt(document.getElementById('numLikes' + i.toString()).innerHTML);
            if (dislikeElem.classList.contains('disliked')) { // already disliked
                dislikeElem.classList.remove('disliked');
                numLikes++;
            } 
            else if (likeElem.classList.contains('liked')) { // already liked
                likeElem.classList.remove('liked');
                dislikeElem.classList.add('disliked');
                numLikes -= 2;
            } 
            else { // no like/dislike
                dislikeElem.classList.add('disliked');
                numLikes--;
            } 
            document.getElementById("numLikes" + i.toString()).innerHTML = numLikes;
        });
    }
}
addCollapse();

// add event listener for activeBtn
let elementsArray = document.querySelectorAll(".activeBtn");
elementsArray.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active');
        } else {
            elem.classList.add('active');
        }
    });
});

const button = document.getElementById('postButton');

button.onclick = function toggleDisplay() {
    document.getElementById("eraseForm").value = "";
    const post = document.getElementById("togglePost");
    if (post.style.display == "none") {
        post.style.display = "block";
    }
};