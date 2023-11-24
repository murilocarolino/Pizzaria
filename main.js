function enviarEmail() {
    var email = document.getElementById('emailInput');

    if (validateEmail(email)) {
        alert('E-mail enviado com sucesso para ' + email);      
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
}

function validateEmail(email) {

    var re = /\S+\S+\.\S+/;
    return re.test(email);

}

function enviarEmailSenha() {

    if (validateSenha(email)) {
        alert('Senha correta  ' + email);
    } else {
        alert('Por favor, insira a senha válida.');
    }

}

function validateSenha(senha) {
   
    var re = /\S+\S+\.\S+/;
    return re.test(senha);
    
}