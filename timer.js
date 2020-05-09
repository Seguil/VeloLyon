class Timer {
    constructor (id) {
        //properties
        this.id = document.getElementById(id);

        this.min = 0;
        this. sec = 0;
        this.interval = 0;
        
        //storage
        this.endTime = sessionStorage.getItem(this.id+'endTime');
        if (this.endTime) {
            this.startTimer(this.endTime);
        }

}

    startTimer(duration) {
        this.endTime = duration;
        if (this.min>=0 && this.sec>0) {//annule le timer précédent seulement s'il y en a un
            this.stopTimer();
        } else {
            this.countDown();//lance le nouveau décompte
}
        
        this.interval = setInterval(e => this.countDown(), 1000);//effectue le décompte toute les secondes

        document.getElementById('annulation_reservation').style.visibility = 'visible';

    }

    stopTimer() {
        clearInterval(this.interval);
        this.id.innerHTML = 'La réservation est annulée.';

        sessionStorage.removeItem(this.id+'endTime');

        document.getElementById('annulation_reservation').style.visibility = 'hidden';
    }

    endTimer() {
        clearInterval(this.interval);
        sessionStorage.clear();
        this.id.innerHTML = 'Le temps est écoulé. Votre réservation est annulée.';
        document.getElementById('annulation_reservation').style.visibility = 'hidden';
    }


    countDown() {        
        let timeNow = new Date(Math.ceil((this.endTime - Date.now()) / 1000) * 1000); //Math.ceil(a/1000) permet de récupérer l'entier supérieur en secondes pour éviter un décalage  de récup sur les ms. Il faut le récupérer sur les secondes
        this.min = timeNow.getMinutes();
        this.sec = timeNow.getSeconds();

        //affiche le temps restant en m et s avec le 0 devant les chiffres <10
        let m = this.min;
        let s = this.sec;
        if (m<10) {
            m = '0' + m;
        }
        if (s<10) {
            s = '0' + s;
        }
        this.id.innerHTML = 'La réservation de ' + localStorage.getItem('firstname') + ' ' + localStorage.getItem('name') + ' à la station ' + sessionStorage.getItem('station') + ' prendra fin dans ' + m + 'm' + s + 's.';

        sessionStorage.setItem(this.id+'endTime', this.endTime);//envoie le décompte au session storage

        //si le temps restant est 0 alors endTimer()
        if (this.min === 0 && this.sec === 0) {
            this.endTimer();
        }
    }

}