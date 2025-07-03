"use client"
import BackgroundVideo from "@/components/BackgroundVideo";
import BlurText from "@/components/BlurText";
import { TextEffect } from "@/components/text-effect";
import { Italianno } from 'next/font/google';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import AnimatedCircles from "@/components/AnimatedCircles";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";



const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
})


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const landingRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: landingRef,
    offset: ["start start", "end start"]
  })

  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.1])

      return (
      <div ref={containerRef} className="relative">
        {/* Sticky menu icon */}
      <div className="fixed top-0 left-0 z-50 flex items-center justify-between p-10">
        <HiOutlineMenuAlt4 className="text-white text-2xl" />
      </div>

      {/* First section - Landing page content */}
      <div ref={landingRef} className="relative h-screen w-full">
        <motion.div style={{ opacity: videoOpacity }}>
          <BackgroundVideo />
        </motion.div>
        
        {/* Main text of the landing page */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
          <BlurText
            text="SUITS ARE COOL"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[175px] opacity-80"
          />

          <div className="flex flex-col items-center justify-center">
            <TextEffect preset='fade-in-blur' delay={1.2} speedReveal={1.1} speedSegment={0.3} className={`${italianno.className} text-white text-[120px] font-bold`}>
              So are You...
            </TextEffect>
          </div>
        </div>
      </div>

      {/* Second section - Animated Circles */}
      <AnimatedCircles />

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore nihil quod, dolore eius illo libero repudiandae optio dignissimos, eaque ab ex esse error dolores quam, unde expedita amet dicta corrupti voluptates natus harum magnam! Hic illo porro soluta rerum nulla unde quos doloremque enim temporibus nemo nisi cum, quo aliquam fugit voluptatum obcaecati excepturi fuga labore aperiam? Distinctio ducimus praesentium dignissimos inventore. A optio quae doloremque sed placeat, suscipit veniam expedita! Odit nihil tempora dicta! Aliquid similique tempora corporis sequi quisquam accusamus esse assumenda nostrum reprehenderit vitae illum necessitatibus repudiandae aut at, vel recusandae. Architecto aut esse consectetur, impedit suscipit voluptas. Unde, omnis explicabo voluptate atque aspernatur porro impedit facilis veniam laudantium tenetur accusantium eius ex, modi, sequi nostrum quis et officiis rem quos deleniti doloremque. Eos inventore obcaecati quasi ex repellat nisi eligendi quaerat corporis veniam labore. Repudiandae, aut. Fuga quod ipsum, laudantium facilis quasi, libero praesentium animi quia tempora corrupti nesciunt qui aliquid necessitatibus voluptate sunt doloremque labore dignissimos voluptas recusandae maxime fugit quibusdam molestias reiciendis accusamus? Facere at placeat laboriosam saepe vero ab fuga a eum repellat ratione nihil ex dignissimos dolores nulla inventore, sapiente quia sit deleniti! Consectetur minima error expedita ipsa vel maiores praesentium dolore sunt natus, cupiditate magnam rem tempora id voluptas. Velit excepturi adipisci dolorem tenetur corrupti modi? Praesentium deleniti architecto velit nisi, voluptas, minima maiores nam esse voluptate nulla labore reprehenderit numquam, vitae ad voluptates ullam. Rem modi officia ut quia, alias consequatur? Magni dolorem aspernatur, asperiores autem culpa iste corrupti perspiciatis mollitia sint dolore soluta, maxime repellat? Ea alias fuga vitae qui accusamus similique repudiandae non laboriosam tempora repellendus consectetur ratione consequatur itaque, dignissimos aspernatur aut sit officia voluptates! Ullam in quisquam eum id mollitia nam voluptatem qui officia voluptatibus, ex voluptate hic libero perspiciatis dolore nihil perferendis provident itaque eveniet pariatur esse aperiam, ab accusamus. Cumque deserunt tempora assumenda iusto dolor? Optio, quo dolorem fugiat, assumenda atque officiis molestiae eius eos nisi obcaecati quidem voluptas? Quas dolorum fugiat laboriosam, at perspiciatis quis sit magni eius magnam cumque qui voluptas rerum minus adipisci impedit exercitationem quaerat. Delectus, tempora, dolores maiores repellendus earum praesentium nisi suscipit a modi quo rem quaerat illum officiis ea quos, quas neque corporis. Laborum, numquam inventore asperiores nulla at voluptas consequatur delectus neque. Aliquid, enim. Pariatur corporis fugit, similique iste quae reiciendis, ut porro itaque nisi rerum obcaecati magni. Maiores ipsum ratione repudiandae ad praesentium molestias aperiam sed aspernatur hic accusantium, culpa labore cupiditate, ut saepe? Libero, maiores? Quisquam quasi porro est consequatur debitis ducimus vero reprehenderit! Accusamus velit quasi perspiciatis, quam odit, vero libero aliquam maxime, quia nemo consectetur laudantium aliquid nam! Reprehenderit praesentium, omnis nostrum aliquid ea pariatur voluptatibus culpa ex sint enim sequi doloribus ipsa dignissimos facere, neque ipsum maiores debitis aperiam iste fugit quam quod eaque, saepe eveniet? Ipsa adipisci deserunt ratione sit nisi officia, accusamus, esse eveniet itaque porro labore quae sapiente consectetur eligendi enim quasi, ex aspernatur reprehenderit! Ab fugiat alias modi nobis fuga ea sit delectus quia adipisci sapiente laboriosam vel iusto consectetur earum ullam deserunt consequatur cupiditate assumenda iste in rem, magnam facere explicabo numquam. Odit veritatis aut odio? Dolores, tempora? Magni alias cum illo? Ullam voluptate ex maxime voluptatibus dolorem velit possimus recusandae unde ad at, voluptas error alias eligendi, blanditiis qui excepturi accusamus facilis nisi a repellendus voluptates aspernatur repudiandae ipsam? Esse facere minima libero quasi blanditiis quae! Ipsam repellat rerum enim quidem dolorum itaque? Sit beatae exercitationem quis labore facere voluptatem. Quae voluptatum quibusdam vitae amet consequuntur doloribus non delectus blanditiis, nam soluta nostrum commodi, sit repellat fugit asperiores! Vel hic, qui dolore adipisci expedita animi, maiores laudantium beatae voluptatibus cumque vero. Obcaecati blanditiis numquam ad saepe minima, quod veritatis consequuntur error corrupti quidem optio debitis repellendus aut sequi pariatur assumenda eligendi impedit quae vitae ducimus reprehenderit exercitationem! Itaque atque tenetur quisquam quia esse, dolorum animi minima sequi, eligendi repellendus ipsa aperiam hic dolorem quis corrupti aliquid cumque. Voluptatem, architecto accusantium. Quasi quae provident harum amet saepe unde! Laborum quaerat, deserunt ipsam exercitationem, ex asperiores possimus eos impedit aliquam sapiente vel aut accusamus veritatis officiis, ratione temporibus voluptatum. Non eligendi aspernatur tempora modi voluptates ipsam atque reprehenderit quidem quam rerum velit corporis ducimus quaerat maiores, similique labore repellat. Aut tempora dicta, ducimus quia nisi dolores temporibus hic natus amet porro necessitatibus quae consequatur. Molestias, ullam consequuntur excepturi tenetur ea expedita quasi laborum inventore animi hic aperiam minus, atque ipsum neque recusandae maiores aliquam! Dolor ipsum dolorum beatae! Harum est, quidem aut minus rem voluptate, possimus veniam maiores unde repellat dicta deserunt! Impedit incidunt, non mollitia, eius tempora ratione possimus aspernatur consequatur expedita harum, temporibus sunt quis quam eligendi fuga aperiam! Recusandae, blanditiis deserunt numquam ab illo debitis nihil autem fuga tenetur corrupti architecto dolor quos, facere facilis. Natus distinctio, quidem sed, cum perferendis error totam explicabo omnis, soluta voluptatibus consequuntur incidunt quasi perspiciatis! Perferendis, sapiente consequatur doloribus, corporis, dolorem reiciendis provident ea laudantium eum eius facilis. Sed esse doloremque, incidunt sit explicabo labore blanditiis fuga eos ad quidem enim ullam molestias debitis optio, expedita at aliquam et omnis, error est officia sequi ducimus. Dicta atque libero, molestias, laudantium sit nostrum optio non voluptatem vitae inventore fugit accusantium sequi voluptas. Ut eum libero aperiam in, assumenda quasi tempora nobis numquam quos ab vel doloribus repellendus enim dolor blanditiis culpa sapiente quis maxime et cum. Voluptates, magnam. Fugiat iure sequi quibusdam, eligendi accusamus fugit? Nisi, veniam perferendis nihil, velit, consequatur natus iure mollitia adipisci molestias facilis ipsum tempora iste minima iusto neque officia saepe quidem? Modi incidunt repellat ducimus adipisci voluptate illum quas aspernatur ex veritatis facere obcaecati numquam reprehenderit voluptatibus maiores, quasi veniam dolores, optio odio, aut ab quisquam minima? Eaque amet dicta incidunt nulla temporibus, facere vitae. Aperiam quas, rerum quasi quia molestiae minus magnam ipsum odit numquam maxime doloribus error dolores, veritatis in, consequatur atque! Vel officiis sint esse quisquam natus dolores culpa laborum temporibus, consequuntur quo eius aut tempora voluptas dolor explicabo molestias illum dolorum magnam sit atque. Odio ullam doloribus quo cumque?
      </div>
    </div>
  );
}
