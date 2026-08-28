import React from "react";


function y() {
  return (
    <footer className="bg-[#22262a] text-white">
      <div className="max-w-[1350px] mx-auto px-8 py-12">
        <div className="grid grid-cols-5 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-7">
              Xizmat
            </h2>
            <div className="space-y-5 text-gray-400">
              <p>Alif do'konida soting!</p>
              <p>Islomda to'lov rejasi</p>
              <p>Qaytarishlar</p>
              <p>Namoz vaqti</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-7">
              Hujjatlar
            </h2>
            <div className="space-y-5 text-gray-400">
              <p>Sotishning umumiy shartlari va qoidalari</p>
              <p>Nizom</p>
              <p>Sertifikat</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-7">
              Yordam
            </h2>
            <div className="space-y-5 text-gray-400">
              <p>Telegram</p>
              <p>+998 555 12 12 12</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-7">
              Obuna bo'lish
            </h2>

            <div className="flex gap-5">
            </div>
          </div>


          <div>

            <div className="bg-[#35393e] rounded-3xl p-4 w-[255px]">

              <div className="bg-white rounded-2xl p-4">

                <img
                  src="https://alifshop.uz/_ipx/f_webp,s_227x227/images/alifshop-qr-code.webp"
                  className="w-full"
                  alt="QR"
                />

              </div>


              <div className="flex gap-2 mt-4">

                <button className="bg-black rounded-lg px-3 py-2 flex items-center gap-2">

        

                  <div>

                    <span className="text-[8px] block">
                      Yuklab oling
                    </span>

                    <span className="text-xs font-bold">
                      App Store
                    </span>

                  </div>

                </button>


                <button className="bg-black rounded-lg px-3 py-2 flex items-center gap-2">

                  

                  <div>

                    <span className="text-[8px] block">
                      YUKLAB OLING
                    </span>

                    <span className="text-xs font-bold">
                      Google Play
                    </span>

                  </div>

                </button>

              </div>

            </div>

          </div>

        </div>


        <div className="mt-20 text-gray-500">
          2026 © alifshop.uz
        </div>

      </div>

    </footer>
  );
}

export default y;