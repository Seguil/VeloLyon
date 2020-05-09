//Lancement des fonctions au chargement de la page
window.addEventListener('load', () => { //fonction fléchée sur 2 lignes = accolades/ fonction fléchée sur 1 ligne = pas d'accolades
    diapo1.choiceType(), //chargement du diaporama
    diapo2.choiceType(),
    lyon.displayMarkers() //chargement de la map
});


//Slide
document.getElementById('slides').addEventListener('click', e => {
    document.getElementById('transition_down').style.display = 'none';
    document.getElementById('transition_up').style.display = 'flex';
    document.getElementById('macarte').scrollIntoView({behavior: 'smooth', block: "start"})    
});
document.getElementById('nextBtn').addEventListener('click', e => {
    diapo1.nextSlide(),
    diapo2.nextSlide()
});
document.getElementById('prevBtn').addEventListener('click', e => {
    diapo1.prevSlide(),
    diapo2.prevSlide()
});
document.getElementById('pauseBtn').addEventListener('click', e => {
    diapo1.pauseSlide(),
    diapo2.pauseSlide()
});
document.getElementById('playBtn').addEventListener('click', e => {
    diapo1.playSlide(),
    diapo2.playSlide()
});
document.addEventListener('keydown', e => {
    diapo1.keyboard(e),
    diapo2.keyboard(e)
});


//Bouton de transition
document.getElementById('transition_down').addEventListener('click', e => {
    document.getElementById('transition_down').style.display = 'none';
    document.getElementById('transition_up').style.display = 'flex';
    document.getElementById('macarte').scrollIntoView({behavior: 'smooth', block: "start"})
});

document.getElementById('transition_up').addEventListener('click', e => {
    document.getElementById('transition_up').style.display = 'none';
    document.getElementById('transition_down').style.display = 'flex';
    document.getElementById('fonctionnement').scrollIntoView({behavior: "smooth", block: "end"})
});


//Au click sur le bouton réserver, le formulaire de réservation s'affiche
document.getElementById('reservation_button').addEventListener('click', e => {
    document.getElementById('formulaire').style.visibility = 'visible';
    document.getElementById('voilebleu').style.display = 'flex';
    document.getElementById('clear').style.visibility='hidden';
    document.getElementById('submit_button').style.visibility='hidden';
    document.getElementById('idname').value = localStorage.getItem('name');
    document.getElementById('idfirstname').value = localStorage.getItem('firstname');
});


//Annulation du formulaire de réservation
document.getElementById('annulation_button').addEventListener('click', e => {
    document.getElementById('formulaire').style.visibility = 'hidden';
    document.getElementById('voilebleu').style.display = 'none';
    document.getElementById('clear').style.visibility='hidden';
    document.getElementById('submit_button').style.visibility='hidden';
});

//Effacement de la signature
document.getElementById('reservation_button').addEventListener('click', e => signReservation.clearSign());
document.getElementById('clear').addEventListener('click', e => signReservation.clearSign());
document.getElementById('annulation_button').addEventListener('click', e => signReservation.clearSign());
document.getElementById('annulation_reservation').addEventListener('click', e => signReservation.clearSign());


//Validation de la réservation
document.getElementById('submit_button').addEventListener('click', e => {
    localStorage.setItem('name', document.getElementById('idname').value);
    localStorage.setItem('firstname', document.getElementById('idfirstname').value);
    sessionStorage.setItem('station', document.getElementById('name_station').innerHTML);
    timer1.startTimer(Date.now() + 20*60*1000);
    document.getElementById('reservation_etat').scrollIntoView({behavior: "smooth", block: "start"});
    document.getElementById('formulaire').style.visibility = 'hidden';
    document.getElementById('clear').style.visibility='hidden';
    document.getElementById('submit_button').style.visibility='hidden';
    document.getElementById('voilebleu').style.display = 'none';
});


//Annulation de la réservation
document.getElementById('annulation_reservation').addEventListener('click', e => timer1.stopTimer());


