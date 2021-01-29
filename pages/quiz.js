import QuizBackground from "../src/components/QuizBackground";
import QuizContainer  from "../src/components/QuizContainer"
import Widget from "../src/components/Widget";
import Button from '../src/components/Button';

import db from '../db.json'

function LoadingScreen(){ //scopo de um card
    return(
        <Widget>
            <Widget.Header>
                LOADING...
            </Widget.Header>

            <Widget.Content>
                [Loading Quiz...]
            </Widget.Content>
        </Widget>
    )
}

function QuestionWidget({question, questionIndex, totalQuestions, onSubmit}){
    const questionId = `question__${questionIndex}`

    return(
         <Widget>
                    <Widget.Header>
                        <h3>
                            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`} 
                        </h3>
                    </Widget.Header>

                    <img
                        alt="Descriçao"
                        style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                        }}
                        src={question.image}
                    />

                    <Widget.Content>
                        <h2>{question.title}</h2>
                        <p>{question.description}</p>

                        <form onSubmit={(evento) => {
                            evento.preventDefault();
                            onSubmit();
                        }}>
                            {question.alternatives.map((alternativa, alternativeIndex) => {
                            const alternativId = `alternative__${alternativeIndex}`
                            return (
                                <Widget.Topic as="label" htmlFor={alternativId}>
                                    <input
                                        // style={{ display: "none"}}
                                        id={alternativId}
                                        type="radio"
                                        name={questionId}
                                    />
                                    {alternativa}
                                </Widget.Topic>
                            )
                            })}
                            <Button type="submit">Confirmar</Button>
                        </form>
                    </Widget.Content>    
                </Widget>
    );

}

const screenStates = {
    QUIZ : 'quiz',
    LOADING : 'loading',
    RESULT : 'result'
};

export default function QuizPage(){
    const [screenState, setScreenState] = React.useState(screenStates.LOADING); // muda de tela de acordo com a condição
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    // CICLO DE VIDA DOS COMPONENTES
    // [React chama de Efeitos || Effects]
    // React.useEffect
    // nasce === didMount
    // atualiza === willUpdate
    // morre === willUnmount
    
    // entra apenas uma vez
    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
    },[]);
    

    function handleSubmit(){
        const nextQuestion = questionIndex + 1;
        if(nextQuestion < totalQuestions){
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
        
    }

    return (
        <QuizBackground backgroundImage = {db.bg}>
            <QuizContainer>
               { screenState === screenStates.QUIZ && (<QuestionWidget
               questionIndex = {questionIndex}
               question = {question}
               totalQuestions = {totalQuestions}
               onSubmit = {handleSubmit}
               />) }

               {screenState === screenStates.LOADING && <LoadingScreen/>}

               {screenState === screenStates.RESULT && <div>Acertou</div>}
                
            </QuizContainer>
        </QuizBackground>
    );
}