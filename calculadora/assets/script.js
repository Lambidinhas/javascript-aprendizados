function createCalculator() {
    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },

        deleteLastChar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        init() {
            this.clickBtn();
        },

        clickBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnTodisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteLastChar();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calculate();
                }
            });
        },

        btnTodisplay(value) {
            this.display.value += value;
        },

        calculate() {
            try {
                this.display.value = eval(this.display.value);
            } catch (error) {
                this.display.value = 'Erro';
            }
        },
    };
}

const calculator = createCalculator();
calculator.init();
