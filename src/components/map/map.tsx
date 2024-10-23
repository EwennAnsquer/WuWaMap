import { MapContainer, TileLayer, Marker, useMapEvents, Polyline, Popup, ZoomControl } from 'react-leaflet'
import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useState } from 'react'
import mob from '../../class/mob'
import TP from '../../class/tp'
import line from '../../class/line'
import marker from '../../class/marker'
import '../../data'
import { mobData } from '../../data'

interface MapProps {
    selectedMobs: string[];
}

function Map({ selectedMobs }: MapProps) {
    const [mapKey, setMapKey] = useState(0);

    function findNearestMobPath(start:TP, unvisited:mob[]){
        let path: (TP|mob)[] = [start];
        let current: TP|mob = start;
        let totalDistance = 0;

        while (unvisited.length > 0) {
            let nextMob = unvisited.reduce((begin, end) => {
                return marker.distanceMatrice[current.id][end.id] < marker.distanceMatrice[current.id][begin.id] ? end : begin;
            }, unvisited[0]);

            if (marker.distanceMatrice[current.id][nextMob.id] > marker.distanceMatrice[start.id][nextMob.id]) {
                break;
            }

            unvisited = unvisited.filter(mob => mob !== nextMob);
            path.push(nextMob);
            totalDistance += marker.distanceMatrice[current.id][nextMob.id];
            current = nextMob;
        }

        return {path, totalDistance};
    }

    useEffect(() => {
        mob.coll = [];
        marker.coll = marker.coll.filter(m => !(m instanceof mob));
        line.coll = [];
        marker.distanceMatrice = [];
        marker.linkMatrice = [];

        selectedMobs.forEach(mobName => {
            mobData.forEach((mobData)=>{
                if(mobData.name === mobName){
                    new mob(mobData.name, mobData.icon, mobData.x, mobData.y, mobData.z, mobData.cost, mobData.element);
                }
            })
        })

        marker.createMatrice();

        TP.coll.forEach(tp => {
            let unvisited = tp.getNearestMobs();
            const paths = [];
            let maxIterations = 1000; // Safeguard against infinite loops
            let iteration = 0;
    
            while (unvisited.length > 0 && iteration < maxIterations) {
                let {path, totalDistance} = findNearestMobPath(tp, [...unvisited]);
                paths.push({path, totalDistance});
                unvisited = unvisited.filter(city => !path.includes(city));
                iteration++;
            }
    
            if (iteration === maxIterations) {
                console.error('Max iterations reached. Possible infinite loop detected.');
            }
        
            //Link all TPs and mobs in the paths
            paths.forEach(({ path }) => {
                for (let i = 0; i < path.length - 1; i++) {
                    const begin = path[i];
                    const end = path[i + 1];
                    
                    // Create a new line between pointA and pointB
                    new line(begin,end);
    
                    // Update the link matrix
                    marker.linkMatrice[begin.id][end.id]++;
                    marker.linkMatrice[begin.id][end.id]++;
                }
            });
        })

        setMapKey(prevKey => prevKey + 1);
    }, [selectedMobs]);

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                alert(`Coordinates: ${lat}, ${lng}`);
            },
        });
        return null;
    };

    const handleCheckboxChange = (id:number) => () => {
        marker.coll[id].done = !marker.coll[id].done;
        localStorage.setItem(String(id), String(marker.coll[id].done));
        localStorage.setItem("lastChangement", String(new Date()));
    }

    return (
        <MapContainer center={[-128, 128]} zoom={2} crs={L.CRS.Simple} minZoom={0} maxZoom={6} maxBoundsViscosity={1.0} id='map' zoomControl={false}>
            <TileLayer
                url="/tiles/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />
            {marker.coll.map(m => (
                <Marker
                    key={"marker" + m.id}
                    position={[m.x, m.y]}
                    icon={m.createIcon()}
                >
                    <Popup
                        closeOnClick={false}
                        autoClose={false}
                    >
                        <p>
                            Complete:
                            <input 
                                type="checkbox" 
                                name={"marker" + m.id + "Checkbox"}
                                checked={JSON.parse(localStorage.getItem(String(m.id)) as string)}
                                onChange={handleCheckboxChange(m.id)}
                            />
                            {m.toString()}
                        </p>
                    </Popup>
                </Marker>
            ))}
            {line.coll.map( l => (
                <Polyline key={"line" + l.id} positions={l.positions} pathOptions={{ color: line.color }} />
            ))}
            <LocationMarker />
        </MapContainer>
    )
}

export default Map
