function Item(props){
    return(
        <div className='item'>
            <img width='100' height='100' src={props.produto.image}/>
            <div className='descricao'>
                <p><strong>{props.produto.title}</strong></p>
                <p>{props.produto.description}</p>
                <p>Categoria{props.produto.category}</p>
            </div>
            <div>
                <p>Preço</p>
                <p>R${props.produto.price}</p>
            </div>            
        </div>
    )
}
export default Item