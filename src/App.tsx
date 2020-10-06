import React, {useState, useEffect, FormEvent} from 'react';
import api from './services/api';
import GlobalStyles from './styles/globalStyles'
import { FaUserSecret } from 'react-icons/fa'
import { FiLock, FiUnlock} from 'react-icons/fi'
import { VscGistSecret} from 'react-icons/vsc'

import { Card, Container, Form, Header, Options } from './styles';

const App: React.FC = () => {
  const [inputEncrypt, setInputEncrypt] = useState('');
  const [decrypted, setDecrypted] = useState();
  const [encrypted, setEncrypted] = useState();
  const [appState, setAppState] = useState(true);

  const [inputDecrypt, setInputDecrypt] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [inputIv, setInputIv] = useState('');
  const [inputCipherTag, setInputCipherTag] = useState('');

  async function handleEncrypt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post('/encrypt', { texto: inputEncrypt });

      if( response.data ) {
        setEncrypted(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  async function handleDecrypt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post('/decrypt', {
        encrypted: inputDecrypt,
        keyHex: inputKey,
        iv: inputIv,
        cipherTagHex: inputCipherTag
      });

      if (response.data) {
        setDecrypted(response.data)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  function handleOptionEncrypt() {
    setAppState(true);
  }

  function handdleOptionDecrypt() {
    setAppState(false);
  }
  // "cipherTagHex": "cf858ad9176511a2fc7a1eecb2629e72",
  // "keyHex": "4c3d77e515deeeb7291647e431407bbb",
  // "iv": "5e03ede49fee5d50415beaeebf9c4744",
  // "encrypted": "e2e9a3ff23c6ac802e1761fe7a78a8",

  return (
    <Container>
      <Header>
        <FaUserSecret size={200} color="#fff" />
        <p>Safe Vault</p>
      </Header>

      <Options>
        <button onClick={handleOptionEncrypt}>Quero Encriptar</button>
        <button onClick={handdleOptionDecrypt}>Quero Decriptar</button>
      </Options>

      {appState ? (
        <>
          <Form onSubmit={handleEncrypt}>
        <textarea rows={6} placeholder="Digite o texto a ser encriptado" value={inputEncrypt} onChange={(e) => setInputEncrypt(e.target.value)}/>
        <button type="submit"><FiLock size={40} style={{ marginRight: 8}}/> Encriptar!</button>
      </Form>

  { encrypted && (<Card>
    
      <div>
      <VscGistSecret  size={40}/>
      <p>Informações Encriptadas</p>
      </div>

      <section>
      <p>Mensagem Encriptada: {encrypted.encrypted}</p>
      <br />
      <p>Key: {encrypted.keyHex}</p>
      <p>IV: {encrypted.iv}</p>
      <p>CipherTag: {encrypted.cipherTagHex}</p>
      </section>
      
    
      
    </Card>)}
        </>
      ) : (
        <>
          <Form onSubmit={handleDecrypt}>
            <textarea rows={6} placeholder="Mensagem para decifrar" value={inputDecrypt} onChange={(e) => setInputDecrypt(e.target.value)} />
            <input placeholder="Key" value={inputKey} onChange={(e) => setInputKey(e.target.value)}/>
            <input placeholder="IV" value={inputIv} onChange={(e) => setInputIv(e.target.value)} />
            <input placeholder="CypherTag" value={inputCipherTag} onChange={(e) => setInputCipherTag(e.target.value)} />
            <button type="submit"><FiUnlock size={40} style={{marginRight: 8}} />Decriptar</button>
          </Form>

          { decrypted && (
            <Card>
              <div>
              <VscGistSecret  size={40}/>
              <p>Informações Decriptadas</p>
              </div>

              <section>
              <p>Mensagem: {decrypted.result}</p>
              </section>
            </Card>
          )}
        </>
      )}
      
      
      <GlobalStyles />
    </Container>
  );
}


export default App;
