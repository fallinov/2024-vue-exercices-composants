export default { // Exportation du module
    props: { // Propriétés du composant
        titre: { // Nom de la propriété
            type: String, // Type de la propriété
            required: true // Propriété obligatoire
        }
    },
    // Contenu HTML du composant
    template: `
    <h1>{{ titre }}</h1>
    `
}
