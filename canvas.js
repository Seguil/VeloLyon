class Sign {
    constructor (id, radius) { //id ciblé, taille du rayon du dot
        this.html = document.getElementById(id);
        this.radius = radius; 

        this.context = this.html.getContext('2d');
        this.draw = false;

        this.touchX;
        this.touchY;

        this.html.width = this.html.clientWidth; //offsetWidth = mesure qui comprend les bordures de l'élément, ses marges internes horizontales (padding), la barre de défilement verticale si présente et affichée, et la largeur CSS de l'élément.
        this.html.height = this.html.clientHeight; //clientWidth = largeur intérieure d'un élément. Celle-ci inclut les espaces intérieurs éventuels (padding), mais pas la barre de défilement vertical (si présente), ni la bordure ou les marges extérieures (margin).

        this.html.addEventListener('mousedown', this.drawSign.bind(this));
        this.html.addEventListener('touchstart', this.drawSign.bind(this));

        this.html.addEventListener('mousemove', this.desktopDrawDot.bind(this));
        this.html.addEventListener('touchmove', this.mobileDrawDot.bind(this));

        this.html.addEventListener('mouseup', this.stopSign.bind(this));
        this.html.addEventListener('touchend', this.stopSign.bind(this));
    }

    mobileDrawDot(e) {
        e.preventDefault();
        this.touchX = e.changedTouches[0].clientX - this.html.getBoundingClientRect().left;
        this.touchY = e.changedTouches[0].clientY - this.html.getBoundingClientRect().top;
        this.drawDot();
    }
      
    desktopDrawDot(e) {
        this.touchX = e.offsetX;
        this.touchY = e.offsetY;
        this.drawDot();
    }

    drawDot() {
        if(this.draw) {
            this.context.lineWidth = this.radius*2;//Taille de la ligne
            this.context.fillStyle = '#e78200';
            this.context.strokeStyle = '#e78200';
            this.context.lineTo(this.touchX, this.touchY);//connecte le dernier point du sous-chemin en cours aux coordonnées x, y spécifiées avec une ligne droite (sans tracer réellement le chemin).
            this.context.stroke(); //permet de rendre la ligne visible
            
            //1er chemin
            this.context.beginPath();//permet de créer un nouveau chemin
            this.context.arc(this.touchX, this.touchY, this.radius, 0, Math.PI*2);
            this.context.fill();//remplit le chemin courant ou donné avec la couleur de fond en cours,

            //2nd chemin
            this.context.beginPath();
            this.context.moveTo(this.touchX, this.touchY);//permet de déplacer le crayon sans poursuivre le trait
        }
    }

    drawSign() {
        this.draw = true;
    }

    stopSign() {
        this.draw = false;
        this.context.beginPath();//un nouveau chemin commence ensuite
        document.getElementById('clear').style.visibility = 'visible';
        document.getElementById('submit_button').style.visibility = 'visible';
    }

    clearSign() {
        this.context.clearRect(0, 0, this.html.width, this.html.height);
        document.getElementById('clear').style.visibility = 'hidden';
        document.getElementById('submit_button').style.visibility = 'hidden';
    }
}

