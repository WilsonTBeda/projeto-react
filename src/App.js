import { useState, useEffect } from 'react';


function App() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [input, setInput] = useState('');
  const [nomes, setNomes] = useState([
   'teste',
    'teste2'
  ]);

  useEffect(() => {
    const nomesStorage = localStorage.getItem('@nomes');
  
  if(nomesStorage){
    setNomes(JSON.parse(nomesStorage))
  }
  }, []);

  const [user, setUser] = useState({});

  useEffect(() => {
    localStorage.setItem('@nomes', JSON.stringify(nomes))
  }, [nomes]);

  function handleRegister(e) {
    // bloqueia a atualização automática da página
    e.preventDefault();

    setNomes([...nomes, input]);
    setInput('');

    alert("Usuário registrado com sucesso!")
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <h1> Cadastro de Usuário: </h1>

      <form onSubmit={handleRegister}>

        <label>Nome:</label><br />
        <input placeholder='Digite seu Nome'
          value={nome}
          onChange={(e) => setInput(e.target.value)}

        /><br />

        <label>Email:</label><br />
        <input placeholder='Digite seu Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Idade:</label><br />
        <input placeholder='Digite sua Idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br />

        <button type="submit"> Registrar </button>
      </form>
      <br /><br />
      <div>
        <span>Bem vindo: {user.nome}</span> <br />
        <span>Idade: {user.idade}</span> <br />
        <span>Email: {user.email}</span> <br />

        <ul>
          <h1>Nomes Salvos</h1>
          {nomes.map(nomes => (
            <li key={nomes}>{nomes}</li>
          ))}
        </ul>

      </div>
    </div>

    
  );
}

function App2() {

  const [nutri, setNutri] = useState([])

  useEffect(() => {

      function loadApi(){
          let url = '// https://sujeitoprogramador.com/rn-api/?api=posts';
          
          
          fetch(url)
          .then((r) => r.json())
          .then((json) => {
              console.log(json);
          })
      }

      loadApi();

  }, []);

  return (

      < div >
          <h1> teste </h1>
      </div >

  );
}


export default App;
