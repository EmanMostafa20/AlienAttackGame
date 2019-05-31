new Vue({
    el: '#game',
    data: {
        showButtons: false,
        showStart: true,
        showAttackResult: false,
        showFastAttackResult: false,
        showHealResult: false,
        youPercent: 100,
        alienPercent: 100,
        you: [{ a: 'You attack with 5', fa: 'You attack with 10', h: 'You heal with 8' }],
        alien: [{ a: 'Alien attacks back with 3', fa: 'Alien attacks back with 5', h: 'Alien attacks back with 3' }],
    },
    methods: {
        start: function () {
            this.showStart = false;
            this.showButtons = true;
           
        },
        attack: function () {
            if (this.alienPercent > 0 && this.youPercent > 0 && this.alienPercent <= 100 && this.youPercent <= 100) {
                var damage1 = this.calculateDamage(3, 10);
                var damage2 = this.calculateDamage(5, 15);
                    this.alienPercent -= damage2;
                    this.youPercent -= damage1;
                    this.showAttackResult = true;
              
                
            }
            else{
                this.end();
            }
            if((this.alienPercent<0 || this.youPercent<0))
            {
                this.alienPercent=0;
                
            }
  
        },
        fAttack: function () {
            if (this.alienPercent > 0 && this.youPercent > 0 && this.alienPercent <= 100 && this.youPercent <= 100) {
                var damage1 = this.calculateDamage(5, 10);
                var damage2 = this.calculateDamage(10, 20);
                    this.alienPercent -= damage2;
                    this.youPercent -= damage1;
                    this.showFastAttackResult = true;
                }
               
            
            else{
                this.end(); 
            }
            if((this.alienPercent<0 || this.youPercent<0))
                {
                    this.alienPercent=0;
                  
                }
        
        },
        heal: function () {
            if ( this.youPercent <50 && this.youPercent < 90  )
             {
                var healed = this.calculateDamage(3, 10);
                this.youPercent += healed;
                this.showHealResult = true;
            }
            else{
                alert('Uhh,looks like you reached the limit!');
            }
            
        },
        quit: function () {
            this.showButtons = false;
            this.showStart = true;
            this.showAttackResult = false;
            this.showFastAttackResult = false;
            this.showHealResult = false;
            this.clicked = false;
            this.alienPercent = 100;
            this.youPercent = 100;
           
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        end: function () {
            alert('You win!');
            this.showButtons = false;
            this.showStart = true;
            this.showAttackResult = false;
            this.showFastAttackResult = false;
            this.showHealResult = false;
            this.alienPercent = 100;
            this.youPercent = 100;
            
        }
        
    }

});