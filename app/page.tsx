"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const targetDate = new Date("2025-06-28T00:00:00").getTime();

    function calculateTimeLeft() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="bg-cover bg-[right_-100px_top] md:bg-right bg-no-repeat bg-[url('/images/7Zbn4pp2.jpeg')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-5 lg:py-20">
          <Image
            src={"/images/logo-web.png"}
            alt="Logo"
            width={100}
            height={100}
            className="mb-[100px] w-25 h-25 mx-auto"
          />
          <h4 className="mb-4 text-4xl playball-regular-font-stroke tracking-tight leading-none text-white md:text-5xl lg:text-6xl" data-aos="fade-right" data-aos-duration="1000">
            Sasithron & Saifah
          </h4>
          <Image
            src={"/images/rings.png"}
            alt="Logo"
            width={100}
            height={100}
            className="mb-2 w-15 h-15 mx-auto"
            data-aos="fade-right" data-aos-duration="1000"
          />
          <div className="mb-10">
            <div className="text-lg font-sm playball-regular-font-stroke" data-aos="fade-right" data-aos-duration="2000">
              JUNE | 28 | 2025
            </div>
            <div className="text-lg font-sm playball-regular-font-stroke" data-aos="fade-right" data-aos-duration="2000">
              SATURDAY
            </div>
            <div className="text-lg font-sm playball-regular-font-stroke" data-aos="fade-right" data-aos-duration="2000">
              INVITE YOU TO CELEBRATE OUR WEDDING
            </div>
          </div>

          <div className="coming-soon" data-aos="fade-right" data-aos-duration="2000">
            <h4 className="mb-4 text-lg font-lg playball-regular-font-stroke">
              COUNTDOWN IN.
            </h4>
            {timeLeft && (
              <div className="mb-4 text-2xl playball-regular-font-stroke tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                {timeLeft.seconds}s
              </div>
            )}
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto text-center ">
          <div className="md:text-2xl lg:text-3xl text-center mt-4 mb-8" data-aos="fade-up" data-aos-duration="2000">
            มีความยินดีขอเชิญท่านเพื่อเป็นเกียรติ
            และร่วมรับประท่านอาหารเนื่องในงานพิธีมงคลสม ระหว่าง
          </div>
          <div className="flex items-center justify-center p-5 bg-stone-500 px-4">
            <div data-aos="fade-right" data-aos-duration="2000">
              <Image
                src={"/images/-m6ausI8.jpeg"}
                alt="Logo"
                width={100}
                height={100}
                className="w-full h-auto mx-auto sm:w-50 md:w-[200px] lg:w-[300px]"
              />
              <div className="text-1xl text-center playball-regular-font-stroke mt-2">
                Sasithorn Klabhom  (PIM)
              </div>
            </div>
            <div className="text-2xl text-center playball-regular-font-stroke p-1">
              &
            </div>

            <div data-aos="fade-left" data-aos-duration="2000">
              <Image
                src={"/images/tJUjwC-t.jpeg"}
                alt="Logo"
                width={100}
                height={100}
                className="w-full h-auto mx-auto sm:w-50 md:w-[200px] lg:w-[300px]"
              />
              <div className="text-1xl text-center playball-regular-font-stroke mt-2">
                Saifah Phaiwan (FAH)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl">
            Wedding Gallery
          </h4>

          <div className="grid items-start grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/q0Bs1XO1.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-50 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/VNCK2e3K.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/O5KKM9hG.jpeg")' }}
              />
            </div>
            <div className="grid gap-4">
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-50 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/kWk6mLne.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/kU6vxm5Y.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/KdzB1oan.jpeg")' }}
              />
            </div>
            <div className="grid gap-4">
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/9M3Ga04_.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-50 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/3j37NO6Q.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/_7x2awqe.jpeg")' }}
              />
            </div>
            <div className="grid gap-4">
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-50 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/FE5zmazA.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/CSTp8SMq.jpeg")' }}
              />
              <div data-aos="fade-right" data-aos-duration="3000"
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/cqaVK37y.jpeg")' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-500 dark:bg-gray-900">
        <div className="text-center">
          <div className="flex items-center">
            <div className="video-background">
              <video
                src={`56b1cc17-2f95-49a8-b7d3-d51b483e3eb9.mp4`}
                autoPlay
                loop
                playsInline
                muted
              />
              <div className="content md:px-20 lg:px-20">
                <h1 className="font-extrabold text-2xl md:text-5xl xl:text-6xl text-white p-5 md:mb-5" data-aos="fade-up" data-aos-duration="2000">
                  ขอขอบคุณจากใจจริง
                </h1>
                <p className="font-extrabold lg:mb-8 md:text-xl lg:text-xl text-white p-5 md:mb-8" data-aos="fade-up" data-aos-duration="2000">
                  สำหรับความรักและการสนับสนุนที่ท่านได้มอบให้ในวันสำคัญของเรา
                  ขอขอบคุณทุกท่านที่มาร่วมเป็นส่วนหนึ่งในความสุขครั้งนี้
                  ขอบคุณสำหรับการแสดงความยินดี
                  และการร่วมเฉลิมฉลองในวันแห่งความรักของเรา
                  ขอให้ทุกท่านมีความสุขและประสบความสำเร็จในทุกๆ เรื่องค่ะ/ครับ
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="2000">
            Wedding Day Timeline
          </h4>
          <div className="flex flex-col justify-center px-10 sm:py-12">
            <div className="flex items-center justify-center z-20 mb-3" data-aos="fade-right" data-aos-duration="2000">
              <Image
                src={"/images/icon8.png"}
                alt="Logo"
                width={100}
                height={100}
                className="w-15 h-15 md:w-40 md:h-40 object-cover"
              />
              <div className="text-start">
                <h3 className="font-semibold text-lg">1. พิธีสงฆ์</h3>
                <p className="text-gray-600">เวลา 07:09 น.</p>
              </div>
            </div>
            <div className="flex items-center justify-center z-20 mb-3" data-aos="fade-right" data-aos-duration="2000">
              <Image
               src={"/images/icon10.png"}
                alt="Logo"
                width={100}
                height={100}
                className="w-15 h-15 md:w-40 md:h-40 object-cover"
              />
              <div className="text-start">
                <h3 className="font-semibold text-lg">2. พิธีแห่ขันหมาก</h3>
                <p className="text-gray-600">เวลา 08:39 น.</p>
              </div>
            </div>
            <div className="flex items-center justify-center z-20 mb-3" data-aos="fade-right" data-aos-duration="2000">
              <Image
                src={"/images/wedding-rings.png"}
                alt="Logo"
                width={100}
                height={100}
                className="w-15 h-15 md:w-40 md:h-40 object-cover"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg">3. พิธีหมั้นและรับไหว้</h3>
                <p className="text-gray-600">เวลา 09:19 น.</p>
              </div>
            </div>
            <div className="flex items-center justify-center z-20 mb-3" data-aos="fade-right" data-aos-duration="2000">
              <Image
                src={"/images/icon6.png"}
                alt="Logo"
                width={100}
                height={100}
                className="w-15 h-15 md:w-40 md:h-40 object-cover"
              />
              <div className="text-start">
                <h3 className="font-semibold text-lg">4. พิธีหลั่งน้ำพระพุทธมนต์</h3>
                <p className="text-gray-600">เวลา 10:19 น.</p>
              </div>
            </div>
            <div className="flex items-center justify-center z-20 mb-3" data-aos="fade-right" data-aos-duration="2000">
              <Image
                src={"/images/icon11.png"}
                alt="Logo"
                width={100}
                height={100}
                className="w-15 h-15 md:w-40 md:h-40 object-cover"
              />
              <div className="text-start">
                <h3 className="font-semibold text-lg">5.รับประทานอาหาร (โต๊ะจีน)</h3>
                <p className="text-gray-600">เวลา 11:30 น.</p>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="2000">
            THEME COLOR
          </h4>
          <div className="grid grid-cols-6 gap-1.5 sm:gap-4 p-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="contents">
              <button
                type="button"
                style={{ backgroundColor: "oklch(93.8% 0.127 124.321)" }}
                className="aspect-1/1 w-full rounded-full"
                data-headlessui-state
              />
            </div>
            <div className="contents">
              <button
                type="button"
                style={{ backgroundColor: "oklch(94.5% 0.129 101.54)" }}
                className="aspect-1/1 w-full rounded-full"
                data-headlessui-state
              />
            </div>
            <div className="contents">
              <button
                type="button"
                style={{ backgroundColor: "oklch(82.7% 0.119 306.383)" }}
                className="aspect-1/1 w-full rounded-full"
                data-headlessui-state
              />
            </div>
            <div className="contents">
              <button
                type="button"
                style={{ backgroundColor: "oklch(90.1% 0.058 230.902)" }}
                className="aspect-1/1 w-full rounded-full"
                data-headlessui-state
              />
            </div>
            <div className="contents">
              <button
                type="button"
                style={{ backgroundColor: "oklch(83.7% 0.128 66.29)" }}
                className="aspect-1/1 w-full rounded-full"
                data-headlessui-state
              />
            </div>
            <div className="contents">
              <button
                type="button"
                style={{ backgroundColor: "oklch(80.8% 0.114 19.571)" }}
                className="aspect-1/1 w-full rounded-full"
                data-headlessui-state
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="2000">
            Wedding venue
          </h4>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" data-aos="fade-up" data-aos-duration="2000">
            สถานที่จัดงานแต่ง
            สโมสรนายทหาร กองพลทหารปืนใหญ่
          </p>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.1690642879694!2d100.6339344741389!3d14.87182188564735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e01f1568f18d7%3A0x182d3c4c37d782ed!2z4Liq4LmC4Lih4Liq4Lij4LiZ4Liy4Lii4LiX4Lir4Liy4LijIOC4geC4reC4h-C4nuC4peC4l-C4q-C4suC4o-C4m-C4t-C4meC5g-C4q-C4jeC5iA!5e0!3m2!1sth!2sth!4v1744277013514!5m2!1sth!2sth" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      <section className={`relative overflow-hidden`}>
        <div className="mx-auto text-center ">
          <div className="flex flex-col items-center justify-center p-5 bg-stone-500 px-4">
            <h4 className="mb-4 text-4xl playball-regular-font text-stone-100 tracking-tight md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="2000">
              THANK YOU
            </h4>
            <p className="mb-[100px] font-light text-stone-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" data-aos="fade-up" data-aos-duration="2000">
              ขอขอบคุณแขกผู้มีเกียรติทุกๆท่านด้วยนะคะ
              ( ขออภัยหากมิได้มาเรียนเชิญด้วยตัวเอง )
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
