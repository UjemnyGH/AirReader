import React from 'react'
import { CardIntro } from '../../components'

export const Introduction: React.FC = () => {
  return (
    <div className='container mx-auto mt-12'>
      <h2 className='text-4xl font-bold uppercase text-center'>Menu</h2>
      <div className="flex flex-col w-full">
        <CardIntro x={150} self='self-end' titleHeader='Mapa' bodyInfo='Chcesz wykorzystać mapę dla wyszukiwania swojej szkoły i obserwacji wyniników zanieczyszczenia powietrza?' alt='mapa powiatu starogardzkiego' src='powiat_starogardzki_location_map.png' url='/map'/>
        <CardIntro x={-150} self='self-start' titleHeader='O nas' bodyInfo='Chcesz się dowiedzieć kim są uczęstnicy w tym projekcie lub dowiedzieć się bardziej szczegółowych informacji?' alt='o nas' src='o-nas.png' w='250px' url='/about'/>
        <CardIntro x={150} self='self-end' titleHeader='Aplikacja Mobilna' bodyInfo='Chcesz zainstałować mobilną wersje i śledzić wyników na żywo?' alt='aplikacja mobilna' src='aplikacje.png' url='/mobile-app' w='200px'/>
      </div>
      <h2 className='text-4xl font-bold uppercase text-center mt-20 mb-8'>Dodatkowe informacje</h2>
      <div className="flex flex-col w-full mb-20">
        <CardIntro x={-150} self='self-start' titleHeader='Wyniki i pomiary' bodyInfo='Robimy pomiary i zapisujemy wyniki tylko z ciśnienia, temperatury, pm10 i pm2.5. Są to niezbędne informacje dla wyznaczenia czy powietrze na około twojej szkoły jest czyste.' alt='miernik jakości powietrza' src='miernik-jakosci-powietrza.png' isMainInfo={false}/>
        <CardIntro x={150} self='self-end' titleHeader='Wykresy' bodyInfo='Wyniki są przekazywane do wykresów, w których będziesz mógł/mogła zobaczyć poszczególne informacje z każdego dnia w ciągu roku.' alt='wykresy' src='wykresy.png' w='200px' isMainInfo={false}/>
        <CardIntro x={-150} self='self-start' titleHeader='Min i Max' bodyInfo='Jeżeli nie wiesz czy podany wynik jest dobrym czy złym, nie martw się są określone minimalne (dobre) i maksymalne (złe).' alt='min i max' src='min-max.png' w='200px' isMainInfo={false}/>
      </div>
    </div>
  )
}
