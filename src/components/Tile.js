function Tiles({header, img, brand, children}) {
    return (
        <section>
            {header && <h2>{header}</h2>}
            {img && <img src={img} alt={brand}/>}
            {children}
        </section>
    )
}

export default Tiles