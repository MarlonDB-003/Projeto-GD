// Configurações do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD5-hFBsnZm4vjdt07RaYSNI5k_bt0LoF8",
    authDomain: "gestante-web-123.firebaseapp.com",
    databaseURL: "https://gestante-web-123-default-rtdb.firebaseio.com",
    projectId: "gestante-web-123",
    storageBucket: "gestante-web-123.appspot.com",
    messagingSenderId: "119918730717",
    appId: "1:119918730717:web:adf6598370b9351ecd2a34",
    measurementId: "G-0CMHBT0H9J"
};

// Inicializar o app do Firebase
firebase.initializeApp(firebaseConfig);

// Referência para o formulário
var form = document.getElementById('signup-form');

// Quando o formulário for enviado
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Pega os valores dos campos de input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Cria um novo usuário com e-mail e senha
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Define o nome do usuário
            var user = userCredential.user;
            user.updateProfile({
                displayName: name
            }).then(function() {
                // Cadastro realizado com sucesso
                console.log("Cadastro realizado com sucesso!");
                alert("Cadastro realizado com sucesso!");
            }).catch(function(error) {
                // Erro ao definir o nome do usuário
                console.log(error.message);
                alert("Erro ao definir o nome do usuário: " + error.message);
            });
        })
        .catch(function(error) {
            // Erro no cadastro do usuário
            console.log(error.message);
            alert("Erro no cadastro do usuário: " + error.message);
        });
});

/**/
// Referência ao Realtime Database
const database = firebase.database();

// Formulário de cadastro
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obter informações do formulário
    const nome = signupForm['name'].value;
    const email = signupForm['email'].value;
    const end = signupForm['end'].value;
    const hora = signupForm['hora'].value;
    const serv = signupForm['serv'].value;
    const password = signupForm['password'].value;

    // Salvar informações do usuário no Realtime Database
    database.ref('userslogin').push().set({
            nome: nome,
            email: email,
            end: end,
            hora: hora,
            serv: serv,
            password: password
        })
        .then(() => {
            // Limpar formulário
            signupForm.reset();
            alert('Cadastro realizado com sucesso!');
        })
        .catch((error) => {
            // Tratar erros
            console.log(error);
            alert('Ocorreu um erro durante o cadastro. Por favor, tente novamente.');
        });
});