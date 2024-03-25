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
    // Contenu HTML du composant
    template: `
    <a :href="lien">{{ contenu || lien }}</a>
    `
}
