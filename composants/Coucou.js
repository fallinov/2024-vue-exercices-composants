export default { // Exportation du module
    props: {
        prenom: {
            type: String,
            required: true
        },
    },
    methods: {
        coucou() {
            alert("Coucou " + this.prenom);
        }
    },
    // Contenu HTML du composant
    template: `
    <button @click="coucou">Coucou</button>
    `
}
