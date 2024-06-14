import { MapContainer, TileLayer, Marker, useMapEvents, Polyline, Popup } from 'react-leaflet'

import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import { useEffect } from 'react'

import mob from '../../class/mob'
import TP from '../../class/tp'
import line from '../../class/line'
import marker from '../../class/marker'

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

    marker.createMatrice()

    TP.coll.forEach(tp => {
        tp.getNearestMobs().forEach(id => {
            new line(tp,mob.getMobById(id))
        })
    })

    useEffect(() => {
        document.addEventListener('change', handleCheckboxChange);

        return () => {
            document.removeEventListener('change', handleCheckboxChange);
        };
    }, []);

    const handleCheckboxChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.tagName === 'INPUT' && target.type === 'checkbox') {
            const name = target.name.replace("Checkbox","")
            const match = name.match(/^([a-zA-Z]+)(\d+)$/);
            if(match){
                const id:number = parseInt(match[2]);
                if(match[1] == "tp"){
                    TP.coll[id].done = !TP.coll[id].done;
                    console.log(TP.coll[id].done)
                }else if(match[1] == "mob"){
                    mob.coll[id].done = !mob.coll[id].done;
                    console.log(mob.coll[id].done)
                }
            }else{
                alert('la checkbox qui vient de changer d\'état ne vient pas d\'un mob ou d\'un tp');
            }
        }
    };

    return (
        <MapContainer center={[-128, 128]} zoom={2} crs={L.CRS.Simple} minZoom={0} maxZoom={6} maxBoundsViscosity={1.0} id='map'>
            <TileLayer
                url="/tiles/{z}/{x}/{y}.png"
            />
            {TP.coll.map((t, index) => {
                return (
                    <Marker
                        key={"tp" + index}
                        position={[t.x, t.y]}
                        icon={t.createIcon()}
                    >
                        <Popup
                            closeOnClick={false}
                            autoClose={false}
                        >
                            <p>
                                Complete:
                                <input type="checkbox" name={"tp" + index + "Checkbox"} />
                            </p>
                        </Popup>
                    </Marker>
                )
            })}
            {mob.coll.map((m, index) => {
                return (
                    <Marker
                        key={"mob" + index}
                        position={[m.x, m.y]}
                        icon={m.createIcon()}
                    >
                        <Popup
                            closeOnClick={false}
                            autoClose={false}
                        >
                            <p>
                                Complete:
                                <input type="checkbox" name={"mob" + index + "Checkbox"} />
                            </p>
                        </Popup>
                    </Marker>
                )
            })}
            {line.coll.map(l => {
                return (
                    <Polyline key={"line" + l.id} positions={l.positions} pathOptions={{ color: line.color }} />
                )
            })}
            <LocationMarker />
        </MapContainer>
    )
}

export default map