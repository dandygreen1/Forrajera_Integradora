document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginform");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Evita que el formulario se envíe normalmente
        
        const usuario = loginForm.usuario.value;
        const password = loginForm.password.value;
        
        // Enviar datos al servidor mediante Fetch API
        fetch('login/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'usuario': usuario,
                'password': password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                window.location.href = "indexadmin.html";
            } else {
                alert("Credenciales incorrectas");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    const volverLink = document.querySelector(".inferior a");
    
    volverLink.addEventListener("click", function(event) {
        event.preventDefault();  // Evita que el enlace navegue normalmente
        window.location.href = "index.html";
    });
});