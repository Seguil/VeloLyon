class Diaporama {
    constructor (id, content, type, time) {
        this.id = document.getElementById(id); 
        this.content = content;
        this.type = type; //images ou text
        this.time = time;

        this.index === 0;
        this.img;


        this.setIntervalSlides = setInterval(this.nextSlide.bind(this), this.time);
    }

    choiceType() {//choisir le type de content: images, text
        if (this.type === 'images') {//si content = 'images'
            this.img = document.createElement("img"); //créer nouvelle img
            this.img.style.maxHeight = '80vh' ; //donner une hauteur à l'img
            this.img.style.maxWidth = '80vw' ; //donner une largeur à l'img
            this.img.src = this.content;//insérer les images dedans
            this.id.appendChild(this.img);//insérer la nouvelle img dans le dom
            this.nextSlide();
        } else if (this.type === 'text') {
            this.nextSlide();
        }
    }

    nextSlide() {
        if (this.index < this.content.length-1) {
            this.index++;
        } else {
            this.index = 0;
        }

        if(this.type === 'images') {
            this.img.src = this.content[this.index];
        } else {
            this.id.innerHTML = this.content[this.index];
        }
    }

    prevSlide() {
        if (this.index > 0) {
            this.index--;
        } else {
            this.index = (this.content.length-1);
        }

        if(this.type === 'images') {
            this.img.src = this.content[this.index];
        } else {
            this.id.innerHTML = this.content[this.index];
        }
    }

    pauseSlide() {
        clearInterval(this.setIntervalSlides);
    }

    playSlide() {
        this.nextSlide();
        this.setIntervalSlides = setInterval(this.nextSlide.bind(this), this.time); //Je dois redéfinir le setInterval car il a été annulé auparavent
    }

    keyboard(e) { 
        if (e.keyCode === 39) {
            this.nextSlide();
        } else if (e.keyCode === 37) {
            this.prevSlide();
        }

        if(this.type === 'images') {
            this.img.src = this.content[this.index];
        } else {
            this.id.innerHTML = this.content[this.index];
        }
    }
}


