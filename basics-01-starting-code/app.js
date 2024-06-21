const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the Course and learn VUE!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');

