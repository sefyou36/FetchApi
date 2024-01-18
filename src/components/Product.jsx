const Product = ({data}) =>{
    return(
        <div>
                <h1>{data.category}</h1>
                <img src={data.image} alt={data.title}/>
                <p>{data.description}</p>
        </div>
    )
}

export default Product