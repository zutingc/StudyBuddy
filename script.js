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
            $(this).parent().addClass('active');
        }
    });
});

// for each class .btnUI i, add "href="#collapseCommenti" to .collapseBtn and id="collapseBtni" to each .collapseComments
function addCollapse() {
    for (let i = 0; i < document.getElementsByClassName("btnUI").length; i++) {
        // iterative approach, run through each one by nodeNumber, i
        let commentBtn = document.getElementsByClassName("collapseBtn")[i]; // grab the HTML code for node of nodeNumber
        let commentContent = document.getElementsByClassName("collapseComments")[i];
        // commentBtn.classList.add("collapseBtn" + i.toString());
        commentBtn.href = "#collapseBtn" + i.toString();
        commentContent.setAttribute("id", "collapseBtn" + i.toString());
    }
}
addCollapse();

function addCounter() {
    let elementsArray = document.querySelectorAll(".likeBtn");
    elementsArray.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        if (elem.classList.contains('liked')) {
            elem.classList.remove('liked');
        } 
        else if (elem.classList.contains('disliked')) {
            elem.classList.remove('liked');
        } 
        else {
            elem.classList.add('liked');
        }
    });
});
}

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

