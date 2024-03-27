export default { // Exportation du module
    props: {
        lien: {
            type: String,
            required: true
        },
        contenu: {
            type: String,
            required: false
        }
    },
    methods: {
        coucou(prenom) {
            alert("Coucou" + prenom);
        },
        confirmer() {
            if(confirm("T'es sûr de vouloir ouvrir ce lien: " + this.lien + " ?")) {
                window.open(this.lien, "_blank");
            }
        }
    },
    // Contenu HTML du composant
    template: `
    <a :href="lien" @click.prevent="coucou('steve')">{{ contenu || lien }}</a>
    `
}
