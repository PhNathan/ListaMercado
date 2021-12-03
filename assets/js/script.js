let items = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    let nomeProduto = document.querySelector('input[name=nome]');
    let precoProduto = document.querySelector('input[name=valor]');

    if (nomeProduto.value == "" || precoProduto.value == "") {
        alert('Preencha os campos')
    }else{

    items.push({
        nome: nomeProduto.value,
        preco: precoProduto.value 
    });

    

        
        let listaProdutos = document.getElementById('lista-produtos');
        let soma = 0;
        listaProdutos.innerHTML = "";
       
   

        items.map((val)=>{
            soma+=parseFloat(val.preco);
            listaProdutos.innerHTML += `
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price">R$ `+val.preco+`</h3>
            </div>
            `;
        });
        soma = soma.toFixed(2);
       
        nomeProduto.value = "";
        precoProduto.value = "";

        let elementoSoma = document.querySelector('.total h1');

        elementoSoma.innerHTML = `R$${soma}`;
    }
});


document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    items = [];

    document.getElementById('lista-produtos').innerHTML = "";

    document.querySelector('.total h1').innerHTML = "R$ 0";


});



