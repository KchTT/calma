"use client"
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function Packs() {
  const ref_1:any = useRef();
  const onScreen_1 = useIntersectionObserver(ref_1, { threshold: 0.5 });
  const ref_2:any = useRef();
  const onScreen_2 = useIntersectionObserver(ref_2, { threshold: 0.5 });
  const ref_3:any = useRef();
  const onScreen_3 = useIntersectionObserver(ref_3, { threshold: 0.5 });
  const ref_4:any = useRef();
  const onScreen_4 = useIntersectionObserver(ref_4, { threshold: 0.5 });

  return (
    <div className="row justify-content-center pt-5">
     
     <div className={`col-10 col-md-5 mb-3 slidex_l  ${onScreen_1 ? ' slide_in_x' : ''}`} ref={ref_1}>
        <h5 className="tit_1">Surf and Yoga Package - 5 Days:</h5>
        <ul className="list-group list-group-flush mt-3 mb-3">
          <li className="list-group-item">5 nights of accommodation in a private room with a private bathroom</li>
          <li className="list-group-item">5 surf and yoga classes suitable for all levels</li>
          <li className="list-group-item">Daily breakfast included</li>
          <li className="list-group-item">1 sunset horseback ride</li></ul>
        <p className="texto">Immerse yourself in the perfect blend of adventure, relaxation, and wellness with our 5-day Surf and Yoga Package. You&apos;ll enjoy five nights in a private room with a private bathroom, five surf and yoga classes, a daily breakfast, and a sunset horseback ride. Join us for the ultimate beach getaway, and leave feeling rejuvenated and refreshed.
        </p>

      </div>
      <div className="col-10 col-md-5 mb-3"></div>
      <div className="col-10 col-md-5 mb-3"></div>
      <div className={`col-10 col-md-5 mb-3 slidex_r  ${onScreen_2 ? ' slide_in_x' : ''}`} ref={ref_2}>

        <h5 className="tit_1">Surf and Yoga Package - 7 Days:</h5>

        <ul className="list-group list-group-flush mt-3 mb-3">
          <li className="list-group-item">7 nights of accommodation in a private room with a private bathroom</li>
          <li className="list-group-item">6 surf and yoga classes suitable for all levels</li>
          <li className="list-group-item">Daily breakfast included</li>
          <li className="list-group-item">1 sunset horseback ride</li>
        </ul>
        <p className="texto">You&apos;ll enjoy seven nights in a private room with a private bathroom, six surf and yoga classes, a daily breakfast, and a sunset horseback ride. This package is the perfect opportunity to fully unwind and embrace the laid-back lifestyle of the beach. Book your package now and get ready to experience the ultimate surf and yoga retreat.
        </p>

      </div>
      <div className="col-10 col-md-5 mb-3"></div>
      <div className="col-10 col-md-5 mb-3"></div>
      <div className={`col-10 col-md-5 mb-3 slidex_l  ${onScreen_3 ? ' slide_in_x' : ''}`} ref={ref_3}>

        <h5 className="tit_1" ref={ref_2}>Chill and Adventure Package - 5 Days.</h5>
        <ul className="list-group list-group-flush mt-3 mb-3">
          <li className="list-group-item">5 nights in a private room.</li>
          <li className="list-group-item">Breakfast every day.</li>
          <li className="list-group-item">1 Zip Line/Canopy Tour.</li>
          <li className="list-group-item">1 Sunset Horseback Riding.</li>
          <li className="list-group-item">1 60-minute Massage Session with Ocean View.</li>
          <li className="list-group-item">4 Yoga Classes.</li></ul>
      </div>
      <div className="col-10 col-md-5 mb-3"></div>
      <div className="col-10 col-md-5 mb-3"></div>
      <div className={`col-10 col-md-5 mb-3 slidex_r  ${onScreen_4 ? ' slide_in_x' : ''}`} ref={ref_4}>
        <h5 className="tit_1">Chill and Adventure Package - 7 Days.</h5>
        <ul className="list-group list-group-flush  mt-3 mb-3">
          <li className="list-group-item">7 nights in a private room.</li>
          <li className="list-group-item">Breakfast every day.</li>
          <li className="list-group-item">1 Zip Line/Canopy Tour.</li>
          <li className="list-group-item">1 Sunset Horseback Riding.</li>
          <li className="list-group-item">1 60-minute Massage Session with Ocean View.</li>
          <li className="list-group-item">4 Yoga Classes.</li>
          <li className="list-group-item">1 Tour to Tortuga Island.</li></ul>
      </div>
    </div>
  )
}