import { MapContainer, TileLayer, Marker, useMapEvents, Polyline, Popup, ZoomControl } from 'react-leaflet'

import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

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

    // Function to find the nearest path through mobs from a starting point
    function findNearestMobPath(start: TP, unvisited: mob[]) {	
        let path: (TP|mob)[] = [start];
        let current: TP|mob = start;
        let totalDistance = 0;

        while (unvisited.length > 0) {
            // Find the nearest unvisited mob
            let nextMob = unvisited.reduce((nearest, city) => {
                return marker.distanceMatrice[current.id][city.id] < marker.distanceMatrice[current.id][nearest.id] ? city : nearest;
            }, unvisited[0]);

            // Break if the next mob is farther from the current point than from the start
            if (marker.distanceMatrice[current.id][nextMob.id] > marker.distanceMatrice[start.id][nextMob.id]) {
                break;
            }

            // Remove the visited mob from the unvisited list
            unvisited = unvisited.filter(mob => mob !== nextMob);
            path.push(nextMob);
            totalDistance += marker.distanceMatrice[current.id][nextMob.id];
            current = nextMob;
        }

        return {path, totalDistance};
    }

    // Iterate through all TPs (teleport points)
    TP.coll.forEach(tp => {
        let unvisited = tp.getNearestMobs();
        const paths = [];
        let maxIterations = 1000; // Safeguard against infinite loops
        let iteration = 0;

        // Find paths until all mobs are visited or max iterations reached
        while (unvisited.length > 0 && iteration < maxIterations) {
            let {path, totalDistance} = findNearestMobPath(tp, [...unvisited]);
            paths.push({path, totalDistance});
            // Remove visited mobs from the unvisited list
            unvisited = unvisited.filter(mob => !path.includes(mob));
            iteration++;
        }

        // Check if max iterations were reached (possible infinite loop)
        if (iteration === maxIterations) {
            console.error('Max iterations reached. Possible infinite loop detected.');
        }
    
        // Link all TPs and mobs in the paths
        paths.forEach(({ path }) => {
            for (let i = 0; i < path.length - 1; i++) {
                const begin = path[i];
                const end = path[i + 1];
                
                // Create a new line between begin and end points
                new line(begin,end);

                // Update the link matrix
                marker.linkMatrice[begin.id][end.id]++;
                marker.linkMatrice[begin.id][end.id]++;
            }
        });
    })

    const handleCheckboxChange = (id:number) => () => {
        marker.coll[id].done = !marker.coll[id].done;
        localStorage.setItem(String(id),String(marker.coll[id].done))
        localStorage.setItem("lastChangement",String(new Date()))
    }

    console.log(marker.distanceMatrice[117][118],marker.distanceMatrice[35][118])

    return (
        <MapContainer center={[-128, 128]} zoom={2} crs={L.CRS.Simple} minZoom={0} maxZoom={6} maxBoundsViscosity={1.0} id='map' zoomControl={false}>
            <TileLayer
                url="/tiles/{z}/{x}/{y}.png"
            />
            <ZoomControl position="topright" />
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

export default map
