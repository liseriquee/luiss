function verificarLoginAdmin() {
    isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
}

function fazerLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        isAdminLoggedIn = true;
        localStorage.setItem('adminLoggedIn', 'true');
        alert('Login efetuado com sucesso.');
        location.href = 'admin.html';
    } else {
        alert('Login ou senha incorretos.');
    }
}

function fazerLogout() {
    isAdminLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
    alert('Logout efetuado com sucesso.');
    location.href = 'login.html';
}
document.addEventListener('DOMContentLoaded', function () {
    verificarLoginAdmin();
});
