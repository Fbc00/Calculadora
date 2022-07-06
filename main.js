// praticando factory function


function criaCalculadora() {
    const numeros = ['1','2','3','4','5','6','7','8','9','0', '+', '-', '*', '/', '(', ')'];
    return {
        display: document.querySelector('.display'),
        
        inicia () {
            this.clickBtn();
            this.clickKeyboard();
        },

        clickBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el);
                }   
                
                if (el.classList.contains('btn-del')) {
                    this.btnDel();

                }
                if (el.classList.contains('btn-eq')) {
                    this.btnEq();
                
                 }
                if (el.classList.contains('btn-clear')) {
                    this.btnClear();
                }

            })
        },

        clickKeyboard() { 
            window.addEventListener('keydown', (e) => { 
                const key = e.key;
                if (key === 'Enter') { 
                    this.btnEq();
                }
                if (key === 'Backspace') { 
                    this.btnDel();
                }
                if (key === 'Delete') {
                    this.btnClear();
                }
             for (let i = 0; i < numeros.length; i++) {
                if (key === numeros[i]) {
                    this.btnParaDisplay(key);
                        }
                    }       
            })
          
            },


        btnParaDisplay(el) { 
            if (typeof el === 'string') {
                this.display.value += el;
                return; 
            }
            this.display.value += el.innerText;
        },

        btnDel() { 
            this.display.value = this.display.value.slice(0, -1);
        },

        btnEq() { 
            this.display.value = eval(this.display.value);
        },

        btnClear() { 
            this.display.value = '';
        }
    };
}



const calculadora = criaCalculadora();
calculadora.inicia();

