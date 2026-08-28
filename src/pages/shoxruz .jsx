import React from 'react'

function shoxruz () {
  return (
    <header className="w-full border-b shadow-sm bg-white">
      <div className="p-5">
        <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 font-bold text-2xl cursor-pointer">
            <span className="bg-amber-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
              a
            </span>
            alif shop
          </div>
          <button className="bg-amber-400 hover:bg-amber-500 font-semibold px-6 py-3 rounded-xl text-base transition-colors flex items-center gap-2.5">
            <span className="text-lg">☰</span>
            Tovarlar katalogii
          </button>
          <input
            type="text"
            placeholder="Alif Shop'da topish..."
            className="flex-1 bg-gray-100 px-5 py-3 rounded-xl outline-none border focus:border-amber-400 text-base"
          />
          <div className="flex items-center gap-6 text-base font-medium">
            <button className="flex flex-col items-center hover:text-amber-500 transition-colors">
              <span className="text-xl">👤</span>
              Kirish
            </button>
            <button className="flex flex-col items-center hover:text-amber-500 transition-colors">
              <span className="text-xl">❤️</span>
              Saralanganlar
            </button>
            <button className="flex flex-col items-center hover:text-amber-500 transition-colors">
              <span className="text-xl">✈️</span>
              Aviachiptalar
            </button>
            <button className="flex flex-col items-center hover:text-amber-500 transition-colors">
              <span className="text-xl">🛒</span>
              Savat
            </button>
            <button className="bg-gray-100 px-3 py-2 rounded-xl border text-base font-semibold cursor-pointer">
              🇺🇿 O'zb 🌐
            </button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto mt-5 pt-4 border-t text-base font-semibold max-w-7xl mx-auto whitespace-nowrap">
          <span className="cursor-pointer hover:text-amber-500 transition-colors">
            📱 Smartfonlar
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors">  🎧 Audio
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors"> 💻 Kompyuterlar
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors">  📺 Televizorlar
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors"> 🧺 Uy texnikasi
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors">    🍳 Oshxona
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors">  💄 Go'zallik
          </span>
          <span className="cursor-pointer hover:text-amber-500 transition-colors">  ♨️ Maktab tovarlar va 10% chegirma
          </span>
        </div>
      </div>
    </header>
  )
}

export default shoxruz 
