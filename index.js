Vue.component('commentli', {
    props: ['comment'],
    template: '<li>{{comment.content}}</li>',
})
var app = new Vue({
    el: '#app',
    methods: {
        logMessage() {
            console.log(this.message)
        }
    },
    data: {
        message: 'Hello',
        title: 'Title',
        welcome: true,
        comments: [
            { content: 'nice~' },
            { content: 'great~' },
            { content: 'awesome~' },
        ]
    },
})