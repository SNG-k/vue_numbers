export function numbers() {
    var typying =new Vue({
        el:'#app',
        data:{
            ruleShow:false,
            start:false,
            number:['0','1','2','3','4','5','6','7','8','9'],
            correct:'',
            inputNumber:'',
            answer1:'',
            answer2:'',
            answer3:'',
            eat:0,
            bite:0,
            answerList:[],
            answeredCount:0,
            cleared:false
        },
        beforeMount(){
            const correct = new Array(3);
            correct[0] = Math.floor(Math.random() * 10);
            do{
                correct[1] = Math.floor(Math.random() * 10);
            } while (correct[0] === correct[1] );
            do{
                correct[2] = Math.floor(Math.random() * 10);
            } while (correct[0] === correct[2] ||correct[1] === correct[2] );
            this.correct1 = correct[0];
            this.correct2 = correct[1];
            this.correct3 = correct[2];
            this.correct = String(this.correct1) + String(this.correct2) + String(this.correct3);
        },
        methods:{
            startBtn:function(){
                this.start=true;
            },
            input:function(e){
                e.currentTarget.disabled = true;
                this.inputNumber+= e.currentTarget.textContent;
            },
            reset:function(){
                this.inputNumber='';
                var li = document.querySelectorAll(".numPanel>button");
                for (var i = 0; i < li.length; i++) {
                    li[i].disabled = false;
                }
            },
            send:function(){
                var a = Math.floor(this.inputNumber / 100);
                var b = Math.floor(this.inputNumber % 100 / 10);
                var c = Math.floor(this.inputNumber % 10);
                if(this.inputNumber === this.correct){
                    this.answeredCount++;
                    this.cleared = true;
                }　else{
                    if(this.correct1 == a){
                        this.eat++;
                    }
                    if(this.correct2 == b){
                        this.eat++;
                    }
                    if(this.correct3 == c){
                        this.eat++;
                    }
                    if(this.correct1 == b || this.correct1 == c){
                        this.bite++;
                    }
                    if(this.correct2 == a || this.correct2 == c){
                        this.bite++;
                    }
                    if(this.correct3 == a || this.correct3 == b){
                        this.bite++;
                    }
                    this.answeredCount++;
                    this.answerList.push({out:this.inputNumber,Eat:this.eat,Bite:this.bite});
                    this.eat = 0;
                    this.bite = 0;
                    this.inputNumber = '';
                    this.anawer = '';
                }
            }
        }
    })
}