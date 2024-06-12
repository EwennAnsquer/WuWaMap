import { MapContainer, TileLayer, Marker, useMapEvents, Polyline } from 'react-leaflet'

import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { PathOptions } from 'leaflet'

import mob from '../../class/mob'
import tp from '../../class/tp'
import line from '../../class/line'

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

  tp.coll[0].distanceToAllMobs();

  return (
    <MapContainer center={[-128,128]} zoom={2} crs={L.CRS.Simple} minZoom={0} maxZoom={6} maxBoundsViscosity={1.0} id='map'>
        <TileLayer
          url="/tiles/{z}/{x}/{y}.png"
        />
        {tp.coll.map((t, index)=>{
          return (
            <Marker 
              key={"tp"+index} 
              position={[t.x,t.y]}
              icon={t.createIcon()}>
            </Marker>
          )
        })}
        {mob.coll.map((m, index)=>{
          return (
            <Marker 
              key={"mob"+index} 
              position={[m.x,m.y]}
              icon={m.createIcon()}>
            </Marker>
          )
        })}
        {line.coll.map((l, index)=>{
          return (
            <Polyline key={"line"+index} positions={l.positions} pathOptions={ {color: line.color} }/>
          )
        })}
        <LocationMarker />
    </MapContainer>
  )
}

export default map