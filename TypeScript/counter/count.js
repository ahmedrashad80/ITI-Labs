var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype.increase = function () {
        this.counter += 1;
        this.updateDOM();
    };
    Counter.prototype.decrease = function () {
        this.counter -= 1;
        this.updateDOM();
    };
    Counter.prototype.reset = function () {
        this.counter = 0;
        this.updateDOM();
    };
    Counter.prototype.updateDOM = function () {
        var counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.textContent = this.counter.toString();
        }
    };
    return Counter;
}());
var counterInstance = new Counter();
var incrementButton = document.getElementById("inc");
incrementButton.addEventListener("click", function () { return counterInstance.increase(); });
var decrementButton = document.getElementById("dec");
decrementButton.addEventListener("click", function () { return counterInstance.decrease(); });
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () { return counterInstance.reset(); });
