import Style from './Navegador.module.css'
function Navegador(){
    return(
        <body>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </div>
            <div className={Style.NavBar}> Icons
                <ul className={Style.Menu}>
                    <li><a href="" class = "fa fa-instagram"> </a> </li>
                    <li><a href="" class = "fa fa-youtube"> </a> </li>
                    <li><a href="" class = "fa fa-linkedin"> </a> </li>
                    <li><a href="" class = "fa fa-facebook"> </a> </li>
                    <li><a href="" class = "fa fa-pinterest"> </a> </li>
                    <li><a href="" class = "fa fa-rss"> </a> </li>
                    <li><a href="" class = "fa fa-github"> </a> </li>
                    <li><a href="" class = "fa fa-chrome"> </a> </li>
                    <li><a href="" class = "fa fa-google-plus"> </a> </li>
                </ul> 
            </div>
        </body>
    )
}
export default Navegador