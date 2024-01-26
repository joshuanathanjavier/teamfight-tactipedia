function show(elementID) {
    var a = document.getElementById(elementID);
    if (!a) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    var pages = document.getElementsByClassName('subpage');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    a.style.display = 'block';
}

function showSubpage(elementID) {
    var a = document.getElementById(elementID);
    if (!a) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('subpage');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    a.style.display = 'block';
}

