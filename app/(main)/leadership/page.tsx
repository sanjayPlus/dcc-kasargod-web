"use client";
import MobileContainer from "@/components/MobileContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBackIosNew, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function LeaderShip() {
  const [tab, setTab] = useState(1);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const router = useRouter();

  const handleTouchStart = (event: any) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: any) => {
    setEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = endX - startX;

    if (deltaX > 50 && tab > 1) {
      // Swipe right to decrease tab number
      setTab(tab - 1);
    } else if (deltaX < -50 && tab < 3) {
      // Swipe left to increase tab number
      setTab(tab + 1);
    }
  };

  return (
    <>
      <MobileContainer>
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="leadership-container w-full min-h-screen flex flex-col justify-start object-scale-down items-center relative"
          style={{
            backgroundImage: "url('/images/backimg.jpeg')",
            backgroundSize: "cover",
          }}
        >
          <MdArrowBackIosNew
            className="text-2xl cursor-pointer absolute top-5 left-4 top-text "
            onClick={() => router.back()}
          />
          <h1 className=" text-2xl text-center font-bold my-7 text-white drop-shadow-lg top-text mt-10">
            Leadership
          </h1>
          <div className="leadership-tabs w-[90%] h-auto  rounded-3xl shadow-lg p-9 bg-white  ">
            <div className="tab-nav flex h-auto justify-between items-center cursor-pointer ">
              <p
                className="font-semibold relative tab-1"
                onClick={() => setTab(1)}
              >
                AICC{" "}
                {tab === 1 && (
                  <span className="w-full h-[2px] bg-blue-700 rounded-full absolute -bottom-1 left-0"></span>
                )}
              </p>
              <p
                className="font-semibold relative tab-2"
                onClick={() => setTab(2)}
              >
                KPCC{" "}
                {tab === 2 && (
                  <span className="w-full h-[2px] bg-blue-700 rounded-full absolute -bottom-1 left-0"></span>
                )}
              </p>
              <p
                className="font-semibold relative tab-3"
                onClick={() => setTab(3)}
              >
                DCC{" "}
                {tab === 3 && (
                  <span className="w-full h-[2px] bg-blue-700 rounded-full absolute -bottom-1 left-0"></span>
                )}
              </p>
              <p
                className="font-semibold relative tab-3"
                onClick={() => setTab(4)}
              >
                UDF{" "}
                {tab === 4 && (
                  <span className="w-full h-[2px] bg-blue-700 rounded-full absolute -bottom-1 left-0"></span>
                )}
              </p>
            </div>
            <div className="tab-content flex flex-col mt-2  scrollbar-container ">
              {tab === 1 && (
                <>
                  <div className="tab-1-content flex flex-col mt-1 gap-3 pt-2">
                    <img
                      src="/images/mallikarjun.jpeg"
                      className="rounded-lg w-full  object-cover"
                      alt=""
                    />
                    <h2 className="text-xl font-bold">
                      Mallikharjun Kharge,MP
                    </h2>
                    <h3 className="text-base font-semibold">
                      position:President
                    </h3>
                    <h3 className="text-base font-semibold">Address:</h3>
                    <div className="text-sm flex flex-col gap-3">
                      <h4>10 , Rajaji Marg,New Delhi</h4>
                      <h4 className="flex gap-3 items-center">
                        <span>
                          <FaPhoneAlt className="text-blue-700" />
                        </span>
                        011-23019080 , 011-23019056
                      </h4>
                      <h4 className="flex gap-3 items-center">
                        <span className="text-blue-700">
                          <MdEmail />
                        </span>
                        cpoffice@inc.in
                      </h4>
                    </div>
                    <div className="flex justify-center w-full items-center mt-3">
                      <a href="https://dccthrissur.com/nethrithuam.php">
                        <button
                          type="button"
                          className="bg-amber-500 rounded-xl p-2 text-white w-28 font-semibold"
                        >
                          see more
                        </button>
                      </a>
                    </div>
                  </div>
                </>
              )}
              {tab === 2 && (
                <>
                  <div className="tab-1-content flex flex-col mt-1 gap-3 pt-2">
                    <img
                      src="/images/national-leaders/sudhakaran.jpeg"
                      className="rounded-lg w-full  object-cover"
                      alt=""
                    />
                    <h2 className="text-xl font-bold">K SUDHAKARAN</h2>
                    <h3 className="text-base font-semibold">
                      position: President
                    </h3>
                    <h3 className="text-base font-semibold">Office Address:</h3>
                    <div className="text-sm flex flex-col gap-3">
                      <h4>President, Kerala Pradesh Congress</h4>
                      <h4>Committe Indira Bhavan,</h4>
                      <h4>Vellayambalam - Sasthamangalam</h4>
                      <h4>Road Trivandrum-10</h4>
                      <h4 className="flex gap-3 items-center">
                        <span>
                          <FaPhoneAlt className="text-blue-700" />
                        </span>
                        0471 2723455,9446471300
                      </h4>
                      <h4 className="flex gap-3 items-center">
                        <span className="text-blue-700">
                          <MdEmail />
                        </span>
                        pcckerala@gmail.com
                      </h4>
                    </div>
                    <div className="flex justify-center w-full items-center mt-3">
                      <a href="https://dccthrissur.com/nethrithuam.php">
                        <button
                          type="button"
                          className="bg-amber-500 rounded-xl p-2 text-white w-28 font-semibold"
                        >
                          See More
                        </button>
                      </a>
                    </div>
                  </div>
                </>
              )}
              {tab === 3 && (
                <>
                  <div className="tab-1-content flex flex-col mt-1 gap-3 pt-2">
                    <img
                      src="/images/national-leaders/pk.jpg"
                      className="rounded-lg w-full  object-cover"
                      alt=""
                    />
                    <h2 className="text-xl font-bold">P.K.Faisal</h2>
                    <h3 className="text-base font-semibold">
                      position: President
                    </h3>
                    <h3 className="text-base font-semibold">Office Address:</h3>
                    <div className="text-sm flex flex-col gap-3">
                      <h4>President-DCC Congress House,</h4>
                      <h4>Vidya Nagar, </h4>
                      <h4>Kasaragod-671123</h4>
                      <h4 className="flex gap-3 items-center">
                        <span>
                          <FaPhoneAlt className="text-blue-700" />
                        </span>
                        04994255140 , 9447641442
                      </h4>
                      {/* <h4 className='flex gap-3 items-center'><span className='text-blue-700'><MdEmail /></span>cpoffice@inc.in</h4> */}
                    </div>
                    {/* <div className="flex justify-center w-full items-center mt-3">
                      <a href="https://dccthrissur.com/nethrithuam.php">
                        <button
                          type="button"
                          className="bg-amber-500 rounded-xl p-2 text-white w-28 font-semibold"
                        >
                          See more
                        </button>
                      </a>
                    </div> */}
                  </div>
                </>
              )}

              {tab === 4 && (
                <>
                  <div className="tab-1-content flex flex-col mt-1 gap-3 pt-2">
                    <img
                      src="/images/vds.jpg"
                      className="rounded-lg w-full  object-cover"
                      alt=""
                    />
                    <h2 className="text-xl font-bold">V D Satheesan</h2>
                    <h3 className="text-base font-semibold">
                      position:Opposition Leader of Kerala
                    </h3>
                    <h3 className="text-base font-semibold">Office Address:</h3>
                    <div className="text-sm flex flex-col gap-3">
                      <h4>Devaragam, Kesari Junction, North Paravur, Ernakulam- 683 513</h4>
                      <h4 className="flex gap-3 items-center">
                        <span>
                          <FaPhoneAlt className="text-blue-700" />
                        </span>
                        9447018183
                      </h4>
                      <h4 className="flex gap-3 items-center">
                        <span className="text-blue-700">
                          <MdEmail />
                        </span>
                        vdsatheesan@gmail.com
                      </h4>
                    </div>
                    <div className="flex justify-center w-full items-center mt-3">
                    <a href="https://dccthrissur.com/nethrithuam.php">
                        <button
                          type="button"
                          className="bg-amber-500 rounded-xl p-2 text-white w-28 font-semibold"
                        >
                          See more
                        </button>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </MobileContainer>
    </>
  );
}

export default LeaderShip;
