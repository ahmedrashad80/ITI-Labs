class Counter {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  increase(): void {
    this.counter += 1;
    this.updateDOM();
  }

  decrease(): void {
    this.counter -= 1;
    this.updateDOM();
  }

  reset(): void {
    this.counter = 0;
    this.updateDOM();
  }

  updateDOM(): void {
    const counterElement = document.getElementById("counter");
    if (counterElement) {
      counterElement.textContent = this.counter.toString();
    }
  }
}

const counterInstance = new Counter();
const incrementButton = document.getElementById("inc")!;

incrementButton.addEventListener("click", () => counterInstance.increase());

const decrementButton = document.getElementById("dec")!;

decrementButton.addEventListener("click", () => counterInstance.decrease());

const resetButton = document.getElementById("reset")!;

resetButton.addEventListener("click", () => counterInstance.reset());
