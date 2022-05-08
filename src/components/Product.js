function Product({img, highLight, title, description, price}) {
    return (
        <article>
            <span>{highLight}</span>
            <img src={img} alt={title}/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;