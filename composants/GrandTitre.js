export default { // Exportation du module
    props: { // Propriétés du composant
        contenu: { // Nom de la propriété
            type: String, // Type de la propriété
            required: true // Propriété obligatoire
        }
    },
    // Contenu HTML du composant
    template: `
    <h1>{{ contenu.toUpperCase() }}</h1>
    `
}
