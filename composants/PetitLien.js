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
        confirmer() {
            if(confirm("T'es sûr de vouloir ouvrir ce lien: " + this.lien + " ?")) {
                window.open(this.lien, "_blank");
            }
        }
    },
    // Contenu HTML du composant
    template: `
    <a :href="lien" @click.prevent="confirmer">{{ contenu || lien }}</a>
    `
}
