const MyApp=({Component,pageProps})=>{
    var name="Ganga"
    var dateofbirth='1/1/1995'
    return <Component {...pageProps} name={name} dateofbirth={dateofbirth}/>
}
export default MyApp