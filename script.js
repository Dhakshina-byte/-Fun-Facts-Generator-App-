const facts = [
    "Cats are crepuscular, which means they are most active during dawn and dusk.",
    "A cat's nose print is unique, just like a human fingerprint.",
    "Cats can jump up to six times their height.",
    "The average cat sleeps for about 12-16 hours a day.",
    "Cats have a third eyelid, called a nictitating membrane, that helps protect their eyes.",
    "A group of cats is called a clowder.",
    "Cats can make over 100 different vocalizations, while dogs can only make about 10.",
    "The oldest known cat lived to be 38 years old.",
    "Cats use their whiskers to help them navigate and sense their environment.",
    "Cats have a specialized 'purr box' in their throat that can vibrate at a variety of frequencies, and it's believed this can promote healing."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function showFactWithAnimation() {
    const factElement = document.getElementById('fact');
    factElement.classList.remove('fade-in'); // Reset the animation
    void factElement.offsetWidth; // Trigger reflow to restart the animation
    factElement.innerText = getRandomFact();
    factElement.classList.add('fade-in'); // Add the fade-in class
}

document.getElementById('new-fact').addEventListener('click', function() {
    showFactWithAnimation();
    this.classList.add('bounce'); // Add bounce effect to the button
    setTimeout(() => {
        this.classList.remove('bounce'); // Remove bounce effect after animation
    }, 700); // Duration of the bounce animation
});

// Load a fact when the page is first loaded
document.addEventListener('DOMContentLoaded', function() {
    showFactWithAnimation();
});
