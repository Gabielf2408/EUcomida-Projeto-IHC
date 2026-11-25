document.addEventListener("DOMContentLoaded", () => {

    function atualizarRelogio(){
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, "0");
        const minutos = String(agora.getMinutes()).padStart(2, "0");
        const segundos = String(agora.getSeconds()).padStart(2, "0");
        const relogio = document.getElementById("relogio");
        if (relogio) {
            relogio.textContent = `${horas}:${minutos}:${segundos}`;
        }
    }
    setInterval(atualizarRelogio, 1000); // 1 segundo
    atualizarRelogio();
    //fim do relogio

    //inicio da alteração do tema
    const btnTema = document.getElementById("btnTema");
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro'){
        document.body.classList.add('tema-escuro');
        if (btnTema)
            btnTema.innerHTML = '<i class="bi bi-sun-fill"></i>Tema';
    }

    if(btnTema){
        btnTema.addEventListener("click", ()=>{
            document.body.classList.toggle("tema-escuro");
            const estaEscuro = document.body.classList.contains("tema-escuro");

            if(estaEscuro){
                btnTema.innerHTML = '<i class="bi bi-sun-fill"></i>Tema';
                localStorage.setItem('tema', 'escuro');
            }
            else {
                btnTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i>Tema';
                localStorage.setItem('tema', 'claro');
            }
        });
    }
    //fim da alteração do tema

});