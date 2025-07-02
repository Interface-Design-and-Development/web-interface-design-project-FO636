function layout() {
    // This function is used to set up the layout of the web pages.
    // It includes the navigation bar and other common elements.
    if (document.querySelector('nav')) {
        // If a nav element already exists, do not create another one.
        return;
    }
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    const homeLink = document.createElement('li');
    homeLink.innerHTML = '<a href="index.html">Home</a>';
    
    const questionLink = document.createElement('li');
    questionLink.innerHTML = '<a href="question.html">Question</a>';
    
    const favoriteLink = document.createElement('li');
    favoriteLink.innerHTML = '<a href="favorite.html">My Favorite</a>';
    
    ul.appendChild(homeLink);
    ul.appendChild(questionLink);
    ul.appendChild(favoriteLink);
    
    nav.appendChild(ul);
    
    document.body.insertBefore(nav, document.body.firstChild);
}

function resize() {
    // This function is used to adjust the layout based on the window size.
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.innerWidth < 600) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'flex';
        }
    }
}

window.addEventListener('DOMContentLoaded', layout);
window.addEventListener('resize', resize);