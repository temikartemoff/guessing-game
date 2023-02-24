class GuessingGame {
    
    constructor() {}

    setRange(min, max){
        this.max = max
        this.min = min
    }

    guess() {
        if (this.min+1 == this.max-1){
            return this.min + 1
        } else {
            return Math.ceil((this.max+this.min)/2)
        }
    }

    lower() {
        return this.max=this.guess()
    }

    greater() {
        return this.min=this.guess()
    }
}

module.exports = GuessingGame;
