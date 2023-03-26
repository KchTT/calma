

"use client"
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function SurfAndYoga() {
  const ref_1:any = useRef();
  const ref_2:any = useRef()
  const onScreen_1 = useIntersectionObserver(ref_1, { threshold: 0.5 });
  const onScreen_2 = useIntersectionObserver(ref_2, { threshold: 0.5 });
  return (
    <div className="row justify-content-center pt-5">
      
      <div className="col-10 col-md-5 mb-3">

      </div>

      <div className={`col-10 col-md-5 mb-3 slidex_r  ${onScreen_1 ? ' slide_in_x' : ''}`} ref={ref_1}>
        <p className="texto">        
        At Calma Sunset and Surf, the adventure never ends! In addition to surfing and yoga, we offer a variety of exciting activities to enjoy during your stay in Manzanillo.
        </p>
        <p className="texto">        
        Do you want to explore the natural landscapes of the area? Join a horseback ride on the beach or through the countryside to see the beautiful flora and fauna of the region.
        </p>
        <p className="texto">        
        If you prefer to immerse yourself in the water, snorkeling is an excellent option. You can explore the crystal-clear waters and discover the marine life of the area. We also offer fishing trips for those who want to enjoy the thrill of catching their own dinner.
        </p>
      </div>

      <div className={`col-10 col-md-5 mb-3 slidex_l  ${onScreen_2 ? ' slide_in_x' : ''}`} ref={ref_2}>
        <p className="texto">        
        Of course, you can&apos;t miss the magical sunsets that Manzanillo has to offer. Relax on the beach and enjoy the natural beauty as the sun sets on the horizon.
        </p>
        <p className="texto">        
        Finally, for those who want to explore the coast from a different perspective, we offer paddle board excursions. You can explore the coast and enjoy the natural beauty from a completely new perspective.
        </p>
        <p className="texto">        
        At Calma Sunset and Surf, we are committed to providing you with a unique and unforgettable experience. Join us for an adventure you will never forget!
        </p>
      </div>

      <div className="col-10 col-md-5 mb-3">

      </div>


    </div>
  )
}