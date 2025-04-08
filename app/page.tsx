'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number
    hours: number
    minutes: number
    seconds: number
  }>(null)

  useEffect(() => {
    const targetDate = new Date('2025-06-28T00:00:00').getTime()

    function calculateTimeLeft() {
      const now = new Date().getTime()
      const distance = targetDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <section className="bg-cover bg-center bg-no-repeat bg-[url('/images/7Zbn4pp2.jpeg')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-5 lg:py-20">
          <Image
            src={"/images/logo-web.png"}
            alt="Logo"
            width={100}
            height={100}
            className="mb-8 w-30 h-30 mx-auto"
          />
          <h4 className="mb-4 text-4xl playball-regular-font-stroke tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Sasithron & Saifah</h4>
          <Image
            src={"/images/rings.png"}
            alt="Logo"
            width={100}
            height={100}
            className="mb-2 w-8 h-8 mx-auto"
          />
          <div className="mb-10">
            <div className="text-lg font-sm playball-regular-font-stroke"> JUNE | 28 | 2025 </div>
            <div className="text-lg font-sm playball-regular-font-stroke"> SATURDAY </div>
            <div className="text-lg font-sm playball-regular-font-stroke">  INVITE YOU TO CELEBRATE OUR WEDDING </div>
          </div>

          <div className="coming-soon">
            <h4 className="mb-4 text-lg font-lg playball-regular-font-stroke"> COMING SOON</h4>
            {timeLeft && (
              <div className="mb-4 text-2xl playball-regular-font-stroke tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
            )}
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden pt-20 py-5 lg:py-20`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center ">
          <ul className="flex items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className="mr-4">
              <div className="text-lg font-md text-start">นางพัลลภา แย้มแสง</div>
              <div className="text-lg font-md text-start">ว่าที่ร้อยตรี สมนึก กลับหอม</div>
            </li>
            <li className="mr-4 text-center"> และ </li>
            <li className="mr-4">
              <div className="text-lg font-md text-start">นางสุกันยา ไพรวรรณ์</div>
            </li>
          </ul>
          <div className="text-lg font-md text-center mt-4 mb-8">
            มีความยินดีขอเชิญท่านเพื่อเป็นเกียรติ และร่วมรับประท่านอาหารเนื่องในงานพิธีมงคลสม ระหว่าง
          </div>
          <div className="mb-2 text-4xl md:text-5xl lg:text-6xl">นางสาวศศิธร กลับหอม (พิม)</div>
          <div className="mb-2 text-4xl md:text-5xl lg:text-6xl">และ</div>
          <div className="mb-2 text-4xl md:text-5xl lg:text-6xl">นายสายฟ้า ไพรวรรณ์ (ฟ้า)</div>
        </div>
      </section>
    </div>
  );
}
