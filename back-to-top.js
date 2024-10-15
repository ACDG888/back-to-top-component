// back-to-top.js

const button = document.createElement('button');
button.innerHTML = 'Back to Top';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.display = 'none';
button.style.zIndex = '1000';

// Append the button to the body
document.body.appendChild(button);

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

// Use parent to scroll to the top of the main page
button.onclick = function() {
    parent.window.scrollTo({ top: 0, behavior: 'smooth' });
};
