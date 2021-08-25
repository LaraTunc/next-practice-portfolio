// this allows access directly to the document  

import Document, {Html, Head, Main, NextScript} from 'next/document'; 

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          <meta name="description" content="My programming portfolio"/>
          <meta charset="utf-8"/>
          <meta name="robots" content="noindex, nofollow"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
          <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
          `}</style>
        </body>
      </Html>
    )
  }
}