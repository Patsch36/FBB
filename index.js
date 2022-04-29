// !SCROLL REVEAL
const sr = ScrollReveal({
    distance: '500px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    // easing: 'ease-in-out',
    reset: true
});
    
sr.reveal('.scroll-reveal-top', {origin: 'top'})
sr.reveal('.scroll-reveal-bottom', {origin: 'bottom'});
sr.reveal('.scroll-reveal-left', {origin: 'left'});
sr.reveal('.scroll-reveal-right', {origin: 'right'});