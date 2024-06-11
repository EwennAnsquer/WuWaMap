import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'

import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import mob from '../../class/mob'
import tp from '../../class/tp'

import '../../data'

function map() {

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        alert(`Coordinates: ${lat}, ${lng}`);
      },
    });

    return null;
  };

  return (
    <MapContainer center={[-128,128]} zoom={2} crs={L.CRS.Simple} minZoom={0} maxZoom={6} maxBoundsViscosity={1.0} id='map'>
        <TileLayer
          url="/tiles/{z}/{x}/{y}.png"
        />
        {tp.tpColl.map((t, index)=>{
          return (
            <Marker 
              key={index} 
              position={[t.x,t.y]}
              icon={t.createIcon()}>
            </Marker>
          )
        })}
        {mob.mobColl.map((m, index)=>{
          return (
            <Marker 
              key={index} 
              position={[m.x,m.y]}
              icon={m.createIcon()}>
            </Marker>
          )
        })}
        <LocationMarker />
    </MapContainer>
  )
}

export default map