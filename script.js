    class rectangleClass {
        hauteur = 0; /*Champs publics  */
        #largeur = 0; /*Champs privés */
        constructor(hauteur, largeur) {
            this.hauteur = hauteur;
            this.largeur = largeur;
        }

        static staticProprety = "Global target ?";

        static{
            console.log(rectangleClass.staticProprety);
        } 

        static staticProprety = "Global target V2 ?"
    };

    console.log(`Preuve : ${rectangleClass.staticProprety}`)

    /*Sous-classe*/

class animal {
    constructor(nom, prenom) {
        this.nom = "Sébastien";
        this.prenom = "Doberman";
    }

    static parle() {
        console.log(`${this.nom} fait beaucoup de bruit`);
    }
}

class chien extends animal {
    constructor(nom, prenom) {
        super(nom, prenom);
    }

    parle() {
        console.log(`${this.nom} n'arrête pas d'aboyer.`);
    }
}

const monChien = new chien();
monChien.parle();