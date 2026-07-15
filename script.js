function abrirRegalo() {

    const regalo = document.querySelector(".regalo");

    regalo.classList.add("abrir");

    setTimeout(() => {

        document.body.innerHTML = `
            <div class="pantalla">
                <h1>❤️ ¡Feliz Cumpleaños! ❤️</h1>
                <p>Esta es una sorpresa hecha especialmente para ti.</p>

                <button onclick="mostrarCarta()">Continuar ❤️</button>
            </div>
        `;

    }, 800);

}
function mostrarCarta() {

    document.body.innerHTML = `
        <div class="pantalla">
            <h1>💌 Una carta para ti</h1>

            <div class="sobre" onclick="abrirCarta()">
                📩
            </div>

            <p>Toca el sobre para abrirlo.</p>
        </div>
    `;

}
function abrirCarta() {

    document.body.innerHTML = `
        <div class="pantalla">

            <h1>💖 Para ti 💖</h1>

            <p id="carta">
                ¡Ya 27 años! ya estás viejo, estamos, sé que esto no es lo abitual y te seré sincera no creo que te guste porque pues es muy mala calidad y todo pero creeme que lo hago con todo el amor, agradeciendo poder darte mi primer obsequio de cumpleaños para ti, con muy poco presupuesto pero con mucho amor, espero pases un agradable día, lo disfrutes con las oersonas que te quieren y aman y que todo te salga bien siempre pero hey esto apenas empieza sigue viendo.
                att:vampitriki 
            </p>

            <button>Siguiente ❤️</button>

        </div>
    `;

}