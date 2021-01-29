// import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import { useRouter } from 'next/router' //não é do react, é do next

import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHub from '../src/components/GitHubCorner'
import Input from  '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `


export default function Home() {
  const router = useRouter();
  const [name, setName ]= React.useState(''); // estado inicial - o setName é uma função
  console.log('estado inicia', name, setName);

  return (
    <QuizBackground backgroundImage = {db.bg}> 
      <Head>
        <title>Alura Quiz</title>
      </Head>
      
      <QuizContainer>
          <Widget> 
              <Widget.Header>
                <h1>The Legend Of Zelda</h1>
              </Widget.Header>
              
              <Widget.Content>
                <form onSubmit= {function (evento) {
                  evento.preventDefault();
                  router.push(`/quiz?name=${name}`)
                  console.log("teste");
                  //router encaminha para a próxima página
                }}>
                  <Input 
                    name = 'username'
                    placeholder="Coloque seu nome"
                    onChange = {(evento) => {
                      //State
                        // name = evento.target.value;
                        setName(evento.target.value);
                    }}
                    value = {name}
                  />
                    <Button type="submit" disabled = {name.length === 0}>
                      {`Jogar ${name}`}
                    </Button>
                </form>
              </Widget.Content>
          </Widget>    

        <Widget>  
          <Widget.Content>
            <h1>Quiz</h1>
            <p>dsdsaf</p>
           </Widget.Content> 
        </Widget>

        <Footer/>
      </QuizContainer>

      <GitHub/>
    </QuizBackground>
  )
}
