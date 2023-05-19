function validarDados() {
    let msgErro = document.getElementById('mensagemErro');
    let nome = frmcontato.inName.value;
    let id = frmcontato.inId.value;
    let endereco = frmcontato.inEndereco.value;
    let cidade = frmcontato.inCidade.value;
    let uf = frmcontato.inUf.value;
    let email = frmcontato.inEmail.value;
    let senha = frmcontato.inSenha.value;
    let data = frmcontato.inData.value;
    let telefone = frmcontato.inTelefone.value;
    let pet = frmcontato.inPet.value;
    let tipo = frmcontato.inTipoAnimal.value;
    let idadepet = frmcontato.inidade.value;
    msgErro.style.display = 'none';


    if (email == '') {
        msgErro.innerHTML = "O campo e-mail não pode ser vazio!";
        frmcontato.inEmail.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (!validarEmail(email)) {
        msgErro.innerHTML = "Por favor, insira um e-mail válido!";
        frmcontato.inEmail.focus();
        msgErro.style.display = 'block';
        return false;
    }


    if (nome == '') {
        msgErro.innerHTML = "O campo nome não pode ser vazio!";
        frmcontato.inName.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (nome.length < 3) {
        msgErro.innerHTML = "O campo nome não pode ter menos que 3 caracteres!";
        frmcontato.inName.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (nome.length > 100) {
        msgErro.innerHTML = "O campo nome não pode ter mais que 100 caracteres!";
        frmcontato.inName.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (senha == '') {
        msgErro.innerHTML = "O campo senha não pode ser vazio!";
        frmcontato.inSenha.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (senha.length < 8) {
        msgErro.innerHTML = "A senha deve ter pelo menos 8 caracteres!";
        frmcontato.inSenha.focus();
        msgErro.style.display = 'block';
        return false;
    }

    

    if (data.trim() == '') {
        msgErro.innerHTML = "O campo data não pode ser vazio!";
        frmcontato.inData.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (endereco == '') {
        msgErro.innerHTML = "O campo endereço não pode ser vazio!";
        frmcontato.inEndereco.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (endereco.length < 3) {
        msgErro.innerHTML = "O campo endereço não pode ter menos que 3 caracteres!";
        frmcontato.inEndereco.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (endereco.length > 100) {
        msgErro.innerHTML = "O campo endereço não pode ter mais que 100 caracteres!";
        frmcontato.inEndereco.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (cidade == '') {
        msgErro.innerHTML = "O campo cidade não pode ser vazio!";
        frmcontato.inCidade.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (cidade.length < 3) {
        msgErro.innerHTML = "O campo cidade não pode ter menos que 3 caracteres!";
        frmcontato.inCidade.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (cidade.length > 100) {
        msgErro.innerHTML = "O campo cidade não pode ter mais que 100 caracteres!";
        frmcontato.inCidade.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (uf == '') {
        msgErro.innerHTML = "O campo UF não pode ser vazio!";
        frmcontato.inUf.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (uf.length != 2) {
        msgErro.innerHTML = "O campo UF deve ter exatamente 2 caracteres!";
        frmcontato.inUf.focus();
        msgErro.style.display = 'block';
        return false;
    }


    if (id == '') {
        msgErro.innerHTML = "O campo ID não pode ser vazio!";
        frmcontato.inId.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (id < 0) {
        msgErro.innerHTML = "O campo ID não pode ser um número negativo!";
        frmcontato.inId.focus();
        msgErro.style.display = 'block';
        return false;
    }


    if (telefone == '') {
        msgErro.innerHTML = "O campo telefone não pode ser vazio!";
        frmcontato.inTelefone.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (!validarTelefone(telefone)) {
        msgErro.innerHTML = "Por favor, insira um número de telefone válido!";
        frmcontato.inTelefone.focus();
        msgErro.style.display = 'block';
        return false;
    }


    if (pet == '') {
        msgErro.innerHTML = "O campo nome do pet não pode ser vazio!";
        frmcontato.inPet.focus();
        msgErro.style.display = 'block';
        return false;
    }
    
    if (pet.length < 3) {
        msgErro.innerHTML = "O campo nome do pet não pode ter menos que 3 caracteres!";
        frmcontato.inPet.focus();
        msgErro.style.display = 'block';
        return false;
    }
    
    if (pet.length > 100) {
        msgErro.innerHTML = "O campo nome do pet não pode ter mais que 100 caracteres!";
        frmcontato.inPet.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (idadepet == '') {
        msgErro.innerHTML = "O campo idade não pode ser vazio!";
        frmcontato.inidade.focus();
        msgErro.style.display = 'block';
        return false;
    }

    if (!validarIdade(idadepet)) {
        msgErro.innerHTML = "O campo idade deve estar no formato: 99 Anos 99 Meses e 99 Dias!";
        frmcontato.inidade.focus();
        msgErro.style.display = 'block';
        return false;
    }

    
    if (!tipo) {
    msgErro.innerHTML = "Selecione o tipo de animal!";
    msgErro.style.display = 'block';
    return false;
}

if (tipo.value === 'Outros') {
    const tipoAnimal = frmcontato.inTipoAnimal.value;
    if (tipoAnimal.trim() === '') {
        msgErro.innerHTML = "O campo Tipo de Animal não pode ser vazio!";
        frmcontato.inTipoAnimal.focus();
        msgErro.style.display = 'block';
        return false;
    }
}

    return true;



}







function validarEmail(email) {
    // Expressão regular para validar o formato do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarTelefone(telefone) {
    // Expressão regular para validar o formato do telefone
    const regexTelefone = /^\d{10,11}$/;
    return regexTelefone.test(telefone);
}

function validarIdade(idade) {
    // Expressão regular para validar o formato da idade
    const regexIdade = /^\d{2} Anos \d{2} Meses e \d{2} Dias$/;
    return regexIdade.test(idade);
}


function mostrarCampo(){
    let tipo = frmcontato.inTipoAnimal.value;

    if(tipo == 'outros'){
        document.getElementById('inOutros').style.display = 'block';
    } else {
        document.getElementById('inOutros').style.display = 'none';
    }
}




//JS contato

function avisoContato() {
    let diverro = document.getElementById('msgerro');
    diverro.style.display = 'none';
    let divacerto = document.getElementById('msgAcerto');
    divErro.style.display = 'none';
    let emmail = frmContato2.emailContato.value;
    let tipo = frmContato2.duvidaContato.value;
    let nome = frmContato2.nomeContato.value;
    let Descricao = frmContato2.mensagemContato.value;

    if (emmail == '') {
        divErro.innerHTML = "O campo e-mail não pode estar vazio!";
        frmContato2.emailContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (emmail.length < 5) {
        divErro.innerHTML = "O campo e-mail não pode ter menos que 5 caracteres!";
        frmContato2.emailContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (emmail.length > 100) {
        divErro.innerHTML = "O campo e-mail não pode ter mais que 100 caracteres!";
        frmContato2.emailContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nome == '') {
        divErro.innerHTML = "O campo nome não pode estar vazio!";
        frmContato2.nomeContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nome.length < 3) {
        divErro.innerHTML = "O campo nome não pode ter menos que 3 caracteres!";
        frmContato2.nomeContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (nome.length > 100) {
        divErro.innerHTML = "O campo nome não pode ter mais que 100 caracteres!";
        frmContato2.nomeContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (tipo == '') {
        divErro.innerHTML = "O campo tipo não pode estar vazio!";
        frmContato2.duvidaContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (tipo.length < 5) {
        divErro.innerHTML = "O campo tipo não pode ter menos que 5 caracteres!";
        frmContato2.duvidaContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (tipo.length > 200) {
        divErro.innerHTML = "O campo tipo não pode ter mais que 100 caracteres!";
        frmContato2.duvidaContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Descricao == '') {
        divErro.innerHTML = "O campo Descrição não pode ser vazio!";
        frmContato2.mensagemContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Descricao.length < 5) {
        divErro.innerHTML = "O campo Descrição não pode ter menos que 5 caracteres!";
        frmContato2.mensagemContato.focus();
        divErro.style.display = 'block';
        return false;
    }

    if (Descricao.length > 100) {
        divErro.innerHTML = "O campo Descrição não pode ter mais que 100 caracteres!";
        frmContato2.mensagemContato.focus();
        divErro.style.display = 'block';
        return false;
    }


    divacerto.innerHTML = "Enviado!";
    return false;
}



//JS Dashboard

var animais = ["Cachorro", "Gato", "Passarinho", "Peixe", "Outros"];
var min = 1
var max = 37

//Função números
function sortearNumero(min, max) {
  var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroSorteado;
}
var numeroSorteado1 = sortearNumero(1, 100);
var numeroSorteado2 = sortearNumero(1, 100);
var numeroSorteado3 = sortearNumero(1, 100);
var numeroSorteado4 = sortearNumero(1, 100);
var numeroSorteado5 = sortearNumero(1, 100);


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico() {
  var data = google.visualization.arrayToDataTable([
    ['Animais', 'Quantidade'],
    ['Gato', numeroSorteado2],
    ['Cachorro', numeroSorteado1],
    ['Passaros', numeroSorteado3],
    ['Peixe', numeroSorteado4],
    ['Outros', numeroSorteado5]
  ]);

  var options = {
    title: 'Quantidade de animais que tratamos',
  };

  var chart = new google.visualization.PieChart(document.getElementById('pizza'));

  chart.draw(data, options);
}


google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(desenharTabela);

function desenharTabela() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Animal');
  data.addColumn('number', 'Quantidade');

  data.addRows([
    ['Cachorros', numeroSorteado1],
    ['Gatos', numeroSorteado2],
    ['Passaros', numeroSorteado3],
    ['Peixes', numeroSorteado4],
    ['Outros', numeroSorteado5]
  ]);

  var table = new google.visualization.Table(document.getElementById('tabela'));

  table.draw(data, { showRowNumber: true, }, {title: 'Tabela de Animais tratados no nosso pet shop'});
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(desenharLinhas);

function desenharLinhas() {
  var data = google.visualization.arrayToDataTable([
    ['Animal', 'Avaliação', 'Quantidade'],
    ['Gatos',  10, numeroSorteado2],
    ['Cachorros',  08, numeroSorteado1],
    ['Passaros',  06, numeroSorteado3],
    ['Peixes',  10, numeroSorteado4],
    ['Outros', 9, numeroSorteado5]
  ]);

  var options = {
    title: 'Avaliação dos nossos clientes',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('linha'));

  chart.draw(data, options);
}

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(desenharBarras);

      function desenharBarras() {
        var data = google.visualization.arrayToDataTable([
          ['Animal', 'Quantidade'],
          ['Cachorros', numeroSorteado1],
          ['Gatos',numeroSorteado2],
          ['Passaros', numeroSorteado3],
          ['Peixes', numeroSorteado4],
          ['Outros', numeroSorteado5]
        ]);

        var options = {
          chart: {
            title: 'Quantidade de Animais',

          }
        };

        var chart = new google.charts.Bar(document.getElementById('barra'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }


      //JS Agendamento

      function msgErroAgendamento() {
        let msgErro = document.getElementById('mensagem-erro');
        let nomedocliente = frmFormulario.nomeAgendamento.value;
        let email = frmFormulario.emailAgendamento.value;
        let telefone = frmFormulario.teleAgendamento.value;
        let pet = frmFormulario.petAgendamento.value;
        let data = frmFormulario.dataAgendamento.value;
        let hora = frmFormulario.horaAgendamento.value;
        msgErro.style.display = 'none';
    



        if (nomedocliente == '') {
            msgErro.innerHTML = "O nome não pode ser vazio"
            msgErro.style.display = 'block';
            frmFormulario.nomeAgendamento.focus();
            return false;
        }


        if (nomedocliente.length < 3) {
            msgErro.innerHTML = "O nome não pode ser vazio  ou menor que 3 caracteres!"
            msgErro.style.display = 'block';
            frmFormulario.nomeAgendamento.focus();
            return false;
        }
    
        if (nomedocliente.length > 100) {
            msgErro.innerHTML = "O nome não pode maior que 100 caracteres!"
            msgErro.style.display = 'block';
            frmFormulario.nomeAgendamento.focus();
            return false;
        }
    
        if (email == '') {
            msgErro.innerHTML = "O e-mail não pode ser vazio!"
            msgErro.style.display = 'block';
            return false;
        }


        if (!validarEmail(email)){
            msgErro.innerHTML = "Por favor, insira um e-mail válido!";
            frmFormulario.emailAgendamento.focus(); 
            msgErro.style.display = 'block'; 
            return false; 
        }   
        
        
        if (telefone.length == '') {
            msgErro.innerHTML = "O telefone não pode estar vazio!"
            msgErro.style.display = 'block';
            frmFormulario.teleAgendamento.focus();
            return false;
        }

        if (telefone.length < 5) {
            msgErro.innerHTML = "O telefone não pode estar vazio ou menor que 5 caracteres!"
            msgErro.style.display = 'block';
            frmFormulario.teleAgendamento.focus();
            return false;
        }


        if (pet == '') {
            msgErro.innerHTML = "O campo 'pet' não pode ser vazio!"
            msgErro.style.display = 'block';
            return false;
        }

        if (pet > 100) {
            msgErro.innerHTML = "O campo 'pet' não pode possuir mais de 100 caracteres!"
            msgErro.style.display = 'block';
            return false;
        }


        if (data == '') {
            msgErro.innerHTML = "O campo 'data' não pode ser vazia!"
            msgErro.style.display = 'block';
            return false;
        }
     // Verificar se a hora está entre 08:00 e 18:00
        let horaSplit = hora.split(':');
            let horaAgendamento = new Date();
            horaAgendamento.setHours(parseInt(horaSplit[0]));
            horaAgendamento.setMinutes(parseInt(horaSplit[1]));
 
        let horaInicio = new Date();
            horaInicio.setHours(8, 0, 0); // 08:00
 
            let horaFim = new Date();
            horaFim.setHours(18, 0, 0); // 18:00
 
        if (horaAgendamento < horaInicio || horaAgendamento > horaFim) {
            msgErro.innerHTML = "O horário deve estar entre 08:00 e 18:00!";
            msgErro.style.display = 'block';
            frmFormulario.horaAgendamento.focus();
            return false;
     }

     // Verificar se a data é um dia útil (de segunda a sexta-feira)
    let dataAgendamento = new Date(data);
    let diaSemana = dataAgendamento.getDay();

    if (diaSemana === 0 || diaSemana === 6) {
        msgErro.innerHTML = "Os agendamentos só podem ser feitos em dias úteis (de segunda a sexta-feira)!";
        msgErro.style.display = 'block';
        return false;
    }

    }

    function validarEmail(email) { 
    // Expressão regular para validar o formato do e-mail 
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regexEmail.test(email); 
}
    

    //JS Loginw
    let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm_password");

function validateFormulario() {

    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%*]).{8,}$/;

    let SenhaIsValid = padraoSenha.test(password);

    if (SenhaIsValid) {
        alert('Campo SENHA não corresponde ao padrão desejado!');
    }

    if (password.value != confirm_password.value) {
        alert("Senhas diferentes!");
    }


    let frmEmail = document.getElementById('frmEmail').value
    //aceitar somente e-mails com domínio "gmail.com", "sesisp.org.br","hotmail.com" ou qualquer dominio ".br".
    let padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/
    let emailValido = padraoEmail.test(frmEmail);
    if (emailValido) {
        console.log("Email valido");
    } else {
        console.log
        alert("Email não é valido");
    }

}

