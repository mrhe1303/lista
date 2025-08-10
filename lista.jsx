const { useState, useEffect } = React;

const ToDoList = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ chores, setChores ] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setChores([...chores, { id: Date.now(), text: inputValue }]);
            setInputValue('');
        }
    };

    const deleteChore = (id) => {
        setChores(chores.filter(chore => chore.id !== id));
    };
    
    return (
        <div className="caja">
            <h1 className="titulo">Quehaceres</h1>
            <div className="lista">
                <input className="barra"
                type="text"
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                value={inputValue}
                placeholder="¿Qué vas a hacer?"
                />
                <div className="listaTareas">
                    {chores.length === 0 ? (
                        <p className="mensaje">No hay quehaceres, añadir quehacer</p>
                    ) : (
                        <ul>
                            {chores.map(chore => (
                                <li key={chore.id} className="item">
                                    {chore.text}
                                    <button
                                    className="eliminar"
                                    onClick={() => deleteChore(chore.id)}
                                    >
                                        x
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDoList />);
