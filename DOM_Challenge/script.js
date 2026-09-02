window.onload = function() {
    // Lyssna efter händelser
}
var editTitle = function(e) {
    var title = e.currentTarget;
    var newTitle = prompt('Skriv ny titel:', title.textContent);

    if (newTitle !== null && newTitle.trim() !== '') {
        title.textContent = newTitle.trim();
    }
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
}
const items = document.querySelectorAll('.team-member');

items.forEach(item => {
    item.querySelector('.team-title').addEventListener('click', editTitle);

    item.addEventListener('mouseenter', () => {
        item.classList.add('hovering');
        items.forEach(el => {
            if (el !== item) {
                el.classList.add('dimmed');
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovering');
        items.forEach(el => {
            el.classList.remove('dimmed');
        });
    });
});
