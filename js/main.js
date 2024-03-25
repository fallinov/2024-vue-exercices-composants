const appli = Vue.createApp({
    data() {
        return {
            nouvelArticle: "",
            dernierId: 4,
            listeCourses: [
                {id: 1, libelle: "Pommes"},
                {id: 2, libelle: "Poires"},
                {id: 3, libelle: "Oranges"},
                {id: 4, libelle: "Bananes"}
            ]
        }
    },
    methods: {
        ajouterArticle() {
            if (this.nouvelArticle === "") {
                alert("Veuillez saisir un article");
                return;
            }

            this.listeCourses.push({id: ++this.dernierId, libelle: this.nouvelArticle});
            this.nouvelArticle = "";
        },
        supprimerArticle(id) {
            this.listeCourses = this.listeCourses.filter(art => art.id !== id);
        }
    }
})
