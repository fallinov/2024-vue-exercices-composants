// solution
appli.component('GrandTitre', {
    props: {
        titre: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `<h1>{{ titre }}</h1>`
})
// solution
