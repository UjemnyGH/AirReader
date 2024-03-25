/* eslint-disable @typescript-eslint/no-unused-vars */
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

interface Position {
  lat: number,
  lng: number
}

export const CustomMap: React.FC<{ isStatic: boolean }> = ({ isStatic }) => {
  const powiatStarogardzki = {lat: 53.87, lng: 18.5};
  const positions: {[key: string]: Position} = { 
    "Zespół Szkół Ekonomicznych": {lat: 53.966, lng: 18.53557},
    "Zespół Szkół Zawodowych": {lat: 53.9, lng: 18.53557},
    "Zespół Szkół Zawodowyc": {lat: 53.8, lng: 18.53557},
  };

  const [open, setOpen] = useState<string | null>(null);

  const handleMarkerClick = (key: string) => {
    setOpen(key);
  }

  return (
    <APIProvider apiKey={process.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY} language='pl'>
      <div className='h-screen w-full'>
        { isStatic && <Map zoom={10} center={powiatStarogardzki} disableDefaultUI={true} mapId={process.env.VITE_PUBLIC_GOOGLE_MAP_ID} clickableIcons={false} controlled={isStatic}>
          { Object.entries(positions).map(([key, position]) => (
              <AdvancedMarker key={key} position={position}>
                <Pin />
              </AdvancedMarker>
          ))}
          {open && 
            <InfoWindow position={positions[open]} onCloseClick={() => setOpen(null)}>
              <p className='text-base font-medium'>{ open }</p>
              <Link to={`/map/${open}`} className='text-sm text-blue-500 underline'>Sprawdź dane</Link>
            </InfoWindow>}
        </Map> }

        { !isStatic && <Map defaultZoom={10} defaultCenter={powiatStarogardzki} disableDefaultUI={true} mapId={process.env.VITE_PUBLIC_GOOGLE_MAP_ID} clickableIcons={false}>
          { Object.entries(positions).map(([key, position]) => (
              <AdvancedMarker key={key} position={position} onClick={() => handleMarkerClick(key)}>
                <Pin />
              </AdvancedMarker>
          ))}
          {open && 
            <InfoWindow position={positions[open]} onCloseClick={() => setOpen(null)}>
              <p className='text-base font-medium'>{ open }</p>
              <Link to={`/map/${open}`} className='text-sm text-blue-500 underline'>Sprawdź dane</Link>
            </InfoWindow>}
        </Map> }
      </div>
    </APIProvider>
  )
}

