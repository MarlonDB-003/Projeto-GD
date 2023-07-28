// Configurar a inicialização do Firebase
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

// Referência ao Realtime Database
const database = firebase.database();

// Formulário de cadastro
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obter informações do formulário
    const name = signupForm['name'].value;
    const nsus = signupForm['nsus'].value;
    const prof = signupForm['prof'].value;
    const data = signupForm['data'].value;
    const hora = signupForm['hora'].value;
    const status = signupForm['status'].value;

    // Salvar informações do usuário no Realtime Database
    database.ref('users').push().set({
            name: name,
            nsus: nsus,
            prof: prof,
            data: data,
            hora: hora,
            status: status,
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