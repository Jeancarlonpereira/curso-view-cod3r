new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("botão foi clicado")
        },
        guardarValor(event){
            this.valor = event.target.value
        },
        guardarValorEnter(event){
            this.valor = event.target.value
        }
    }
})