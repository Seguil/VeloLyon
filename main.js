//slider.js
const diapo1 = new Diaporama (
    'slides',
    [
        'images/slides/slide1.jpg',
        'images/slides/slide2.jpg',
        'images/slides/slide3.jpg',
        'images/slides/slide4.jpg',
    ],
    'images',
    5000
);

const diapo2 = new Diaporama (
    'legend',
    [
        "Choisissez votre station",
        "Vérifiez qu'un vélo est disponible",
        "Complétez le formulaire, signez et validez",
        "Vous avez 20 min pour récupérer votre vélo"
    ],
    'text',
    5000
);

//map.js
const lyon = new Map (
    'macarte',
    [45.774204, 4.867512],
    10,
    18,
    'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=21d0e2687a8cb3eabd00b7ab43f9d65ea0e59860'
);


//canvas.js
const signReservation = new Sign ('sign_reservation', 2);


//timer.js
const timer1 = new Timer ('reservation_timer');


