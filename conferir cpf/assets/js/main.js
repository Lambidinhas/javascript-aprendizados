class ValidatorCpf {
    constructor() {
        this.formulario = document.querySelector('form');
        this.inputCpf = document.querySelector('#input-cpf');
        this.history = JSON.parse(localStorage.getItem('historyCpf')) || [];
        
        this.events();
        this.renderHistory();
    }

    events() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });

        this.inputCpf.addEventListener('input', e => {
            this.mask(e.target);
        });
    }

    mask(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3}\.\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3}\.\d{3}\.\d{3})(\d)/, '$1-$2');
        input.value = value;
    }

    handleSubmit(e) {
        e.preventDefault();

        const cpf = this.inputCpf.value;
        const clearCpf = cpf.replace(/\D/g, '');
        
        if (clearCpf.length !== 11) {
            alert('CPF incompleto!');
            return;
        }

        const isValid = this.valida(clearCpf); 

        if (isValid) {
            this.inputCpf.style.border = '2px solid green';
        } else {
            this.inputCpf.style.border = '2px solid red';
            alert('CPF inválido, tente novamente!');
        }
        
        this.savehistory(cpf, isValid); 

        this.inputCpf.value = '';
        this.inputCpf.focus();
    }

    valida(cpf) {
        if (!cpf || cpf.length !== 11 || this.isSequence(cpf)) return false;
        const parcialCpf = cpf.slice(0, 9);
        const digit1 = this.creatDigit(parcialCpf);
        const digit2 = this.creatDigit(parcialCpf + digit1); 
        const newCpf = parcialCpf + digit1 + digit2;
        return newCpf === cpf;        
    }
    
    creatDigit(parcialCpf) {
        const cpfArray = Array.from(parcialCpf);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    }

    isSequence(cpf) {
        return cpf[0].repeat(cpf.length) === cpf;
    }

    savehistory(cpf, isValid) {
        if (this.history.length > 0 && this.history[0].cpf === cpf) return;

        this.history.unshift({ cpf, isValid });
        
        if (this.history.length > 3) this.history.pop();

        localStorage.setItem('historyCpf', JSON.stringify(this.history));
        this.renderHistory();
    }

    renderHistory() {
        const listElement = document.querySelector('#list-history');
        if (!listElement) return;

        listElement.innerHTML = this.history
            .map(item => {
                const icon = item.isValid ? '✅' : '❌';
                const color = item.isValid ? 'green' : 'red';
                return `<li style="color: ${color}; margin-bottom: 5px;"> ${icon} ${item.cpf}</li>`;
            })
            .join('');
    }
}

const validate = new ValidatorCpf();
