function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var button = document.getElementById('noButton');

    // Remove focus to prevent highlight issue
    button.blur();
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}
document.getElementById('noButton').addEventListener('mouseover', moveButton);
document.getElementById('noButton').addEventListener('touchstart', moveButton);
