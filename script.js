const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A day on Venus is longer than a year on Venus."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

document.getElementById('new-fact').addEventListener('click', function() {
    document.getElementById('fact').innerText = getRandomFact();
});

// Load a fact when the page is first loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fact').innerText = getRandomFact();
});
