"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>(null);

  useEffect(() => {
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
          <h4 className="mb-4 text-4xl playball-regular-font-stroke tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Sasithron & Saifah
          </h4>
          <Image
            src={"/images/rings.png"}
            alt="Logo"
            width={100}
            height={100}
            className="mb-2 w-15 h-15 mx-auto"
          />
          <div className="mb-10">
            <div className="text-lg font-sm playball-regular-font-stroke">
              {" "}
              JUNE | 28 | 2025{" "}
            </div>
            <div className="text-lg font-sm playball-regular-font-stroke">
              {" "}
              SATURDAY{" "}
            </div>
            <div className="text-lg font-sm playball-regular-font-stroke">
              {" "}
              INVITE YOU TO CELEBRATE OUR WEDDING{" "}
            </div>
          </div>

          <div className="coming-soon">
            <h4 className="mb-4 text-lg font-lg playball-regular-font-stroke">
              COUNTDOWN IN.
            </h4>
            {timeLeft && (
              <div className="mb-4 text-2xl playball-regular-font-stroke tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
              </div>
            )}
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center ">
          <div className="md:text-2xl lg:text-3xl text-center mt-4 mb-8">
            มีความยินดีขอเชิญท่านเพื่อเป็นเกียรติ
            และร่วมรับประท่านอาหารเนื่องในงานพิธีมงคลสม ระหว่าง
          </div>
          <div className="flex items-center justify-center p-5 bg-stone-500">
            <div>
              <Image
                src={"/images/-m6ausI8.jpeg"}
                alt="Logo"
                width={100}
                height={100}
                className="w-full h-auto mx-auto sm:w-50 md:w-1/5 lg:w-[80%]"
              />
              <div className="text-1xl text-center playball-regular-font-stroke mt-2">
                {" "}
                (PIM){" "}
              </div>
            </div>
            <div className="text-2xl text-center playball-regular-font-stroke p-1">
              &
            </div>

            <div>
              <Image
                src={"/images/tJUjwC-t.jpeg"}
                alt="Logo"
                width={100}
                height={100}
                className="w-full h-auto mx-auto sm:w-50 md:w-1/5 lg:w-[80%]"
              />
              <div className="text-1xl text-center playball-regular-font-stroke mt-2">
                {" "}
                (FAH){" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl">
            Wedding Day Timeline
          </h4>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                <div className="sm:block w-1 bg-stone-300 absolute h-full left-1/2 transform -translate-x-1/2" />
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="sm:w-1/2 sm:pr-8">
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={"/images/icon8.png"}
                              alt="Logo"
                              width={100}
                              height={100}
                              className="w-15 h-15 md:w-40 md:h-40 object-cover"
                            />
                            <h3 className="font-semibold text-lg">พิธีสงฆ์</h3>
                            <p className="text-gray-600">เวลา 07:09 น.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-stone-800 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-stone-800 shadow" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="sm:w-1/2 sm:pl-8">
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={"/images/icon10.png"}
                              alt="Logo"
                              width={100}
                              height={100}
                              className="w-15 h-15 md:w-40 md:h-40 object-cover"
                            />
                            <h3 className="font-semibold text-lg">
                              พิธีแห่ขันหมาก
                            </h3>
                            <p className="text-gray-600">เวลา 08:39 น.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-stone-800 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-stone-800 shadow" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="sm:w-1/2 sm:pr-8">
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={"/images/wedding-rings.png"}
                              alt="Logo"
                              width={100}
                              height={100}
                              className="w-15 h-15 md:w-40 md:h-40 object-cover"
                            />
                            <h3 className="font-semibold text-lg">
                              พิธีหมั้นและรับไหว้
                            </h3>
                            <p className="text-gray-600">เวลา 09:19 น.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-stone-800 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-stone-800 shadow" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="sm:w-1/2 sm:pl-8">
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={"/images/icon6.png"}
                              alt="Logo"
                              width={100}
                              height={100}
                              className="w-15 h-15 md:w-40 md:h-40 object-cover"
                            />
                            <h3 className="font-semibold text-lg">
                              พิธีหลั่งน้ำพระพุทธมนต์
                            </h3>
                            <p className="text-gray-600">เวลา 10:19 น.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-stone-800 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-stone-800 shadow" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="sm:w-1/2 sm:pr-8">
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center justify-center">
                            <Image
                              src={"/images/icon11.png"}
                              alt="Logo"
                              width={100}
                              height={100}
                              className="w-15 h-15 md:w-40 md:h-40 object-cover"
                            />
                            <h3 className="font-semibold text-lg">
                              รับประทานอาหาร (โต๊ะจีน)
                            </h3>
                            <p className="text-gray-600">เวลา 11:30 น.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-stone-800 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-stone-800 shadow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden py-5 lg:py-10`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl">
            THEME COLOR
          </h4>
          <div className="grid grid-cols-6 gap-1.5 sm:gap-4 p-5">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="mb-4 text-4xl playball-regular-font tracking-tight md:text-5xl lg:text-6xl">
            Wedding Gallery
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/q0Bs1XO1.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/VNCK2e3K.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/O5KKM9hG.jpeg")' }}
              />
            </div>
            <div className="grid gap-4">
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/kWk6mLne.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/kU6vxm5Y.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/KdzB1oan.jpeg")' }}
              />
            </div>
            <div className="grid gap-4">
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/FE5zmazA.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/CSTp8SMq.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/cqaVK37y.jpeg")' }}
              />
            </div>
            <div className="grid gap-4">
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/9M3Ga04_.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/3j37NO6Q.jpeg")' }}
              />
              <div
                className="h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url("/images/_7x2awqe.jpeg")' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <div className="relative w-full h-screen">
              {/* Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source
                  src={`2fc4b419-9d42-45c0-832c-6718f28251a1.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
