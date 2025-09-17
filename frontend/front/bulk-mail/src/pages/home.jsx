import { useState, useEffect } from 'react'
import Mail from '../components/mail'

const hellos = [
  "வணக்கம்",
  "你好",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
  "नमस्ते",
  "হ্যালো",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "నమస్కారం",
  "ನಮಸ್ಕಾರ",
  "നമസ്കാരം",
  "Ola",
  "Sawubona",
  "Habari",
  "Talofa",
  "Kia ora",
  "Xin chào",
  "สวัสดี",
  "Mingalaba",
  "Shalom",
  "Γειά",
  "Privet",
  "Halo",
  "Merhaba",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "Hej",
  "Selamat pagi"
]

const Home = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % hellos.length)
    }, 300)

    const fakeLoad = setTimeout(() => {
      clearInterval(interval)
      setCurrentGreeting(0)

      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => setLoading(false), 1000)
      }, 500)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(fakeLoad)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <div
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Mail />
      </div>

      {loading && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src="/light.svg" alt="Light" className="w-32 h-32 mb-2" />
          <p className="text-white text-xl font-bold">
            {hellos[currentGreeting]}
          </p>
        </div>
      )}
    </div>
  )
}

export default Home
