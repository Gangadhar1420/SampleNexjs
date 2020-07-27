import Document, { Head, Main, NextScript } from "next/document"
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="Mla" key="twhandle" />
          <meta
            property="og:title"
            content="Meenakshi Law Associates"
            key="mlaTitle"
          />
          <meta
            property="og:description"
            content="The Meenakshi Law Associates is the leading
          authority on legal fees and legal fee management"
            key="mlaDes"
          />
          <meta
            property="og:image"
            content="http://www.mla.us.com/images/mlaLogo.png"
            key="mlaImg"
          />
          <meta
            property="og:url"
            content="http://www.mla.us.com"
            key="mlaUrl"
          />
          <meta property="fb:310854666615924" content="310854666615924" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          ></link>
          <link
            rel="styleSheet"
            href="https://fonts.googleapis.com/css?family=Roboto"
            type="text/css"
          />
          <link
            rel="styleSheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="styleSheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"
          />
          <link
            rel="styleSheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link
            rel="styleSheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="styleSheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-133428742-1"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
          ></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js"></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-133428742-1"
          ></script>
        </body>
      </html>
    )
  }
}
