import { useState } from "react"
import ItemLista from "./ItemLista";
import Style from "./Main.module.css"

function Main(){
    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");
    const [listaProdutos, setListaProdutos] = useState([]);

    function modificarProduto(produto){
        setProduto(produto);
    }

    const adicionarProduto = () => {
        setProduto("")
        setQuantidade("")
        setValor("")

        setListaProdutos ([
            {
                produto,
                quantidade,
                valor
            }, ...listaProdutos
        ])
    }

    const limpaLista = () => {
        setListaProdutos([])
    }


    return(
        <main className={Style.boxMain}>
            <section className={Style.main}>
                <h1>Lista de Compras</h1>
                <div className={Style.boxProduto}>   
                    <label className={Style.lbProduto}>Informe o Produto <br /></label>
                    <input type="text" value={produto} onChange={(e) => modificarProduto(e.target.value)}/>
                </div>

                <div className={Style.qtv}>
                    <div className={Style.boxQuantidade}>
                        <label>Informe a Quantidade <br /></label>
                        <input type="text"value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                    </div>  
                    <div className={Style.boxValor}>
                        <label>Informe o Valor  </label>
                        <input type="text" value={valor} onChange={(e) => setValor(e.target.value)}/>
                    </div>                  
                </div>
                <div>
                    <button className={Style.boxButtonAdd} type="button" onClick={adicionarProduto}>CADASTRAR</button>
                </div>    
                <div>
                    <button className={Style.boxButtonClean} type="button" onClick={limpaLista}>LIMPAR</button>
                </div>                

            </section>
            <div className={Style.boxLista}>
                {
                    listaProdutos.map( (product) => (
                        <ItemLista product={product}/>
                    ))
                }
            </div>
        </main>
    )
}

export default Main