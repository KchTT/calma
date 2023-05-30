
"use client"
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import Galeria from "@/components/galeria";

export default function Acomodation() {
  const ref_1: any = useRef();
  const onScreen_1 = useIntersectionObserver(ref_1, { threshold: 0.5 });
  const ref_2: any = useRef();
  const onScreen_2 = useIntersectionObserver(ref_2, { threshold: 0.5 });
  const ref_3: any = useRef();
  const onScreen_3 = useIntersectionObserver(ref_3, { threshold: 0.5 });
  const ref_4: any = useRef();
  const onScreen_4 = useIntersectionObserver(ref_4, { threshold: 0.5 });
  return (
    <>

      <div className="row justify-content-center mb-5 pt-5">
        <div className={`col-10 col-md-5 mb-3 slidex_l  ${onScreen_1 ? ' slide_in_x' : ''}`} ref={ref_1}>
          <h4 className="tit_1">Casa Jungla</h4>
          <p className="texto">
            Welcome to Calma Sunset & Surf Vacation Rentals! We&apos;re excited to introduce you to our three beautiful options for an unforgettable authentic nature getaway.
            Casa Jungla is a two-bedroom house located in the midst of lush jungle. It features two bathrooms, one of them en suite, and an outdoor bathtub with breathtaking views of the natural surroundings. The kitchen is spacious and fully equipped for you to prepare your favorite meals. Each bedroom has air conditioning and hot water for your comfort.
          </p>
        </div>
        <div className="col-10 col-md-5 mb-3"><Galeria id_gal="1" imgs={['1.jpg']} /></div>

      </div>
      <div className="row justify-content-center mb-5">

        <div className="col-10 col-md-5 mb-3"><Galeria id_gal="2" imgs={['11.jpg']} /></div>
        <div className={`col-10 col-md-5 mb-3 slidex_r  ${onScreen_2 ? ' slide_in_x' : ''}`} ref={ref_2}>
          <h4 className="tit_1">Casa Bamboo</h4>
          <p className="texto">
            Casa Bamboo is a cozy one-bedroom house with en suite bathroom, perfect for couples. The kitchen is spacious and fully equipped, and the outdoor gallery is a great place to enjoy a cup of coffee or a romantic dinner. The large bathroom has a bathtub for you to relax in after a day at the beach. This house also features air conditioning and hot water for your comfort.
          </p>
        </div>
      </div><div className="row justify-content-center mb-5">
        <div className={`col-10 col-md-5 mb-3 slidex_l  ${onScreen_3 ? ' slide_in_x' : ''}`} ref={ref_3}>
          <h4 className="tit_1">Casa Bella Vista</h4>
          <p className="texto">
            Casa Bella Vista is a stunning two-bedroom house with ocean views. Each bedroom has its own bathroom with hot water, and the master bedroom is particularly spacious with panoramic views of the entire northern peninsula. The outdoor gallery and living room are ideal for relaxing while enjoying the view. This house also has air conditioning for your comfort, and a Jacuzzi with ocean view.
          </p></div>
        <div className="col-10 col-md-5 mb-3"><Galeria id_gal="3" imgs={['10.jpg']} /></div>
      </div><div className="row justify-content-center mb-5">

        <div className={`col-10 slide_y  ${onScreen_4 ? ' slide_in' : ''}`} ref={ref_4}>
          <p className="texto">
            <p>In summary, Calma Sunset & Surf Vacation Rentals offers you three incredible options to enjoy your vacation in a unique and relaxing authentic  nature setting. Choose your favorite and have an unforgettable vacation in our tropical paradise!</p>
          </p>
        </div>
      </div>
    </>
  )
}