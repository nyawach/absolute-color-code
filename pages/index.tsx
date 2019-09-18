import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import styled from "@emotion/styled"
import { getColors } from "~/lib/api"
import { Color } from "~/domains/color/entity"

const Default = dynamic(() => import("~/layouts/Default"))
const Head = dynamic(() => import("next/head"))

enum Answer {
  NoAnswer = null,
  Incorrect = 0,
  Correct = 1,
}

type ComponentWithInitialProps = Function & {
  getInitialProps?: () => Promise<{colors: Color[]}>
}

const Home: ComponentWithInitialProps = ({colors}) => {
  const color: string = colors[0].value
  const [result, setResult] = useState<Answer>(Answer.NoAnswer)
  const [answer, setAnswer] = useState<string>("")
  const [display, toggleDisplay] = useState<boolean>(false)
  const inputAnswer = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(evt.target.value)
  }
  const submit = () => {
    setResult(answer === color ? Answer.Correct : Answer.Incorrect)
    toggleDisplay(true)
  }
  return (
    <Default>
      <Head>
        <title>What's color?</title>
      </Head>
      <Background color={colors[0].value}></Background>
      <Wrapper>
        <h1>What's color?</h1>
        <Input type="text" onChange={inputAnswer} />
        <p>{answer}</p>
        <Button onClick={submit}>Submit!</Button>
        {display && <><Result>{result}</Result><p>{color}</p></>}
      </Wrapper>
    </Default>
  )
}

Home.getInitialProps = async () => {
  const colors = await getColors()
  return {
    colors
  }
}

const Input =styled.input`
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
`

const Wrapper = styled.div`
  position: relative;
`

const Button = styled.button`
  font-weight: bold;
`

const Result = styled.div`
`

export default Home
