const Galeria = (props:any) => {
    return <div id="galeria_a" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {props.imgs.map((item:any, index:any) => {
                return <button key={index} type="button" data-bs-target="#galeria_a" data-bs-slide-to={index} className={`${index == 0 ? "active" : ""}`}
                    aria-current="true" aria-label={"Slide " + (index + 1)}></button>
            })}
        </div>

        <div className="carousel-inner">
            {props.imgs.map((item:any, index:any) => {
                return <div className={`carousel-item ${index == 0 ? "active" : ""}`} key={index}>
                    <img src={`./imgs/${item}`} className="d-none d-sm-block w-100" alt="footage surf" />

                </div>
            })}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#galeria_a"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#galeria_a"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

}
export default Galeria;

