"use client"
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

import styles from './page.module.css'
import Carrousel from '@/components/carrousel'
const inter = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  const ref_1:any = useRef();
  const ref_2:any = useRef()
  const onScreen_1 = useIntersectionObserver(ref_1, { threshold: 0.5 });
  const onScreen_2 = useIntersectionObserver(ref_2, { threshold: 0.5 });
  const ref_3:any = useRef();
  const ref_4:any = useRef()
  const onScreen_3 = useIntersectionObserver(ref_3, { threshold: 0.5 });
  const onScreen_4 = useIntersectionObserver(ref_4, { threshold: 0.5 });
  return (
    <>
    <Carrousel datos={[{img:"header_ini"}]} />
     <main className={styles.main}> 
      <div className={styles.description} style={{ display: "none" }}>
        <p>
          ACAAAA&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="imgs/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
     
      <h2 className={`mb-4 tit_2 slide_y ${onScreen_1 ? ' slide_in' : ''}`} ref={ref_1}>MANZANILLO</h2>
      <p className={`texto slide_y ${onScreen_2 ? ' slide_in' : ''}`} ref={ref_2}>
        Manzanillo is a small coastal town located on the Nicoya Peninsula, on the Pacific coast of Costa Rica. It is surrounded by stunning natural scenery that includes clean sandy beaches, crystal clear waters, and lush tropical vegetation.
        The main beach in Manzanillo is a beautiful crescent-shaped bay with calm waters ideal for swimming, paddle boarding, or snorkeling. In addition, the beach has a restaurant, Atardecer Dorado, which means “Sunset”  that serves delicious seafood dishes and other typical foods.
        The Manzanillo area is also an excellent place to practice water sports such as surfing and kitesurfing, as nearby beaches like Playa Hermosa, Santa Teresa, and Mal País offer excellent conditions for these sports. Visitors can also go hiking on the trails of the Cabo Blanco Nature Reserve, which is located near Manzanillo and is home to a wide variety of flora and fauna.
        In summary, Manzanillo is an authentic peaceful and beautiful destination in Costa Rica that offers a variety of activities to enjoy in stunning natural surroundings.
      </p>
      <h2 className={`mb-4 tit_2 slide_y ${onScreen_3 ? ' slide_in' : ''}`} ref={ref_3}>CALMA</h2>
      <p className={`texto slide_y  ${onScreen_4 ? ' slide_in' : ''}`} ref={ref_4}>
        Welcome to Calma Sunset and Surf! where monkeys will wake you up every morning and sunsets over the ocean are accompanied by a dschungle concert.
        This tropical paradise in Manzanillo features 3 houses for your stay: Casa Bella Vista, Casa Jungla, and Casa Bamboo. Looking for a view of the ocean? Choose Casa Bella Vista for 6-8 people. Love the jungle? Casa Jungla offers a spectacular view. Need something intimate? Casa Bamboo is perfect for 2-3 people.
        In our garden, you ll find a variety of edible and fruit-bearing plants, ancient trees, and a beautiful assortment of flowers and plants. Enjoy the natural beauty of Costa Rica in its natural habitat!
        Best of all, our property is located right in front of the beach, separated only by the main street. Relax with the sea breeze and the sound of the waves!
        At Calma Sunset and Surf, we want you to enjoy a unique and unforgettable authentic Costa Rikan experience. Get your daily fresh fish from fishermen who land every morning with their fresh catch in front of our home on the beach. Come and live the natural beauty of Manzanillo in our comfortable and beautiful houses! We look forward to welcoming you with open arms!
      </p>
    </main>
    </>
   
  )
}
/*
      <>
            <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
              <div className={styles.thirteen}>
                <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
              </div>
            </div>

            <div className={styles.grid}>
              <a
                href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}>
                  Docs <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  Find in-depth information about Next.js features and API.
                </p>
              </a>

              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}>
                  Templates <span>-&gt;</span>
                </h2>
                <p className={inter.className}>Explore the Next.js 13 playground.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}>
                  Deploy <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
              </a>
            </div>
      </>*/