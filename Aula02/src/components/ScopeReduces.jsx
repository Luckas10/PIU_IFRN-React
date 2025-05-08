import "./ScopeReduces.css"

const ScopeReduces = () => {
    function handleClick () {
        let container = document.getElementById('container')
        let cor = ''
        if (container.style.backgroundColor == 'red') {
            cor = 'yellow'
        } else {
            cor = 'red'
        }
        return (
            container.style.backgroundColor = cor
        )
    }

    return (
        <>
            <button onClick={() => console.log("You clicked!")}>Click </button>
            <div>
                <button onClick={() => alert("You clicked!")}>New button</button>
            </div>
            <div>
                <button onClick={handleClick}>Handle Click</button>
            </div>
            <div id="container" className="container" onClick={() => alert("Container")}>
                <p>aasdasdas</p>
            </div>
        </>
    )
}

export default ScopeReduces