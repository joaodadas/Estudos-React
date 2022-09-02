function Evento({numero}) {
function meuEvento() {
    console.log(`Fui ativado! ${numero} `)
}

    return (
        <div>
            <p>Clique para disparar o evento</p>
            <button text="Primeiro evento"></button>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento