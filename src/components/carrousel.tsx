
import React from "react"

const Carrousel = (props: any) => {
    console.log(props)
    return <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-indicators">
            {props.datos.map((item: any, index: any) => {
                return <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={`${index == 0 ? "active" : ""}`}
                    aria-current="true" aria-label={"Slide " + (index + 1)}></button>
            })}
        </div>

        <div className="carousel-inner">
            {props.datos.map((item: any, index: any) => {
                return <div className={`carousel-item ${index == 0 ? "active" : ""}`} key={index}>
                    <img src={`./imgs/${item.img}_h.jpg`} className="d-none d-sm-block w-100" alt="tiqui surf academy costa rica santa teresa" />
                    <img src={`./imgs/${item.img}_v.jpg`} className="d-block d-sm-none w-100" alt="tiqui surf academy costa rica santa teresa" />
                    {(item.hasOwnProperty("desc") && item.desc != "") &&
                        <>
                            <div className="carousel-caption ">
                                <h5 className="text-start" style={{ textShadow: "3px 3px #313c98" }}>{item.titulo}</h5>
                                <p className="text-start p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)", color: "#fff" }} >{item.desc}</p>
                            </div>
                        </>
                    }

                </div>
            })}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

}

export default Carrousel
