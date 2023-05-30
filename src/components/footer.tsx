import Image from "next/image";

const Footer = () => {
    return <footer className="footer p-3">
        <div className="row">
            <div className="col-10 col-md-4 pt-4">
            <Image
              src="/imgs/logo_white.png"
              alt="Calma - Sunset & Surf"
              width={100}
              height={35}
              priority
            />
            <h6 className="mt-4 border-top pt-2">Sunset & Surf</h6>
            </div>
            <div className="col-10 col-md-4">

            </div>
            <div className="col-10 col-md-4">
                <ul className="list-group list-group-flush list-group-horizontal mt-2">
                    <li className="list-group-item  back_naranja">
                    <i className="fas fa-phone  fa-lg"></i>
                    </li>
                    <li className="list-group-item  back_naranja">
                    <i className="fab fa-whatsapp  fa-lg"></i>
                    </li>
                    <li className="list-group-item  back_naranja">
                    <i className="far fa-envelope  fa-lg"></i>
                    </li>
                    <li className="list-group-item  back_naranja">
                        <i className="fa-brands fa-instagram  fa-lg"></i>
                    </li>
                </ul>
                <p className="mt-4 misc_blanco">
                    300mt south from Atardecer Dorado Restaurant. <br />
                    Manzanillo - Costa Rica<br /><br />
                    <a href="mailto:calmasunsets@gmail.com">calmasunsets@gmail.com</a>
                </p>
            </div>
        </div>
    </footer>

}
export default Footer;