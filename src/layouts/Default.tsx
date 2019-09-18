import Head from "next/head"

const Default = ({children}) => {
  return (
    <>
      <Head>
        <title>Hello Title</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>test</header>
      {children}
      <footer>footer</footer>
    </>
  )
}
export default Default
