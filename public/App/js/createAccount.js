//Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');

//Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

//Display
var displayName = document.getElementById('displayName');

//Criação de um novo usuário
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem Vindo ' + emailInput.value);
            window.location.href = "/fbteste/public/app/authentication.html";
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar ' + error.message + ' e ' + error.code);

        });
});

//Autenticação com E-mail e Senha
authEmailPassButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            displayName.innerText = 'Bem Vindo, ' + emailInput.value;
            alert('Autenticado ' + emailInput.value);
            window.location.href = "https://icummenical.firebaseapp.com/dashboard/pages/index.html";

        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar ' + error.message + '.')


        });
});

//Logout
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            displayName.innerText = 'Você não está autenticado';
            alert('Você se deslogou');
            window.location.href = "home.html"
        }, function (error) {
            console.error(error);
        });
});

//Autenticar Anonimo
/* authAnonymouslyButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {
            console.log(result);
            displayName.innerText = 'Bem Vindo, desconhecido';
            alert('Autenticado Anonimamente');
            window.location.href = "https://icummenical.firebaseapp.com/dashboard/pages/index.html";

        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')

        });
}); */

//Autenticar GitHub
authGitHubButton.addEventListener('click', function () {
    //Providers
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

//Autenticar Google
authGoogleButton.addEventListener('click', function () {
    //Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

//Autenticar Twitter
authTwitterButton.addEventListener('click', function () {
    //Providers
    var provider = new firebase.auth.TwitterAuthProvider();
    signIn(provider);
});

//Autenticar Facebook
authFacebookButton.addEventListener('click', function () {
    //Providers
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
});


function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem Vindo, ' + result.user.displayName;
            window.location.href = "https://icummenical.firebaseapp.com/dashboard/pages/index.html";
        }).catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}