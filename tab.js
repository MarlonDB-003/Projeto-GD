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

firebase.initializeApp(firebaseConfig);

// Obter referência ao nó "dados" do Firebase Realtime Database
var database = firebase.database().ref('users');

// Recuperar os dados do Firebase e atualizar a tabela
database.on('value', function(snapshot) {
    var dataTable = document.getElementById('data-table');

    // Limpar a tabela
    while (dataTable.rows.length > 1) {
        dataTable.deleteRow(1);
    }

    // Preencher a tabela com os dados do Firebase
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var row = dataTable.insertRow(-1);
        var nome = row.insertCell(0);
        var nsus = row.insertCell(1);
        var prof = row.insertCell(2);
        var data = row.insertCell(3);
        var hora = row.insertCell(4);
        var status = row.insertCell(5);
        nome.innerHTML = childData.name;
        nsus.innerHTML = childData.nsus;
        prof.innerHTML = childData.prof;
        data.innerHTML = childData.data;
        hora.innerHTML = childData.hora;
        status.innerHTML = childData.status;
    });
});