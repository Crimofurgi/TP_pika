const app = Vue.createApp({
    data() {
        return {
            viePlayer: 100,
            vieEnnemy: 100,
            turn : 0,
            winner :''
        };
    },
    methods: {
        attack() {
            this.vieEnnemy -= 10;
            this.turn++
        },

        contreAttack() {
            this.viePlayer -= 15;
        },

        speAttack() {
            if(this.turn%3==0 && this.turn != 0 ) {
                this.vieEnnemy -= 20;
                this.turn++;
            }
        },

        soin() {
            this.viePlayer += 20;
            this.turn++;
        }

    },
    watch: {
        viePlayer (value) {
            if(value >= 100) {
                this.viePlayer = 100;
            }
            else if(value <= 0 && this.vieEnnemy > 0) {
                this.viePlayer = 0;
                this.winner = "Game Over"
            }
            else if(value <= 0 && this.vieEnnemy <= 0) {
                this.viePlayer = 0;
                this.vieEnnemy = 0;
                this.winner = "Draw"    
        }
        else if(value > 0 && this.vieEnnemy <= 0) {
                this.vieEnnemy = 0;
                this.winner = "Win" 
        }



    }},
    });
    app.mount('#monApp');