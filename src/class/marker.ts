import mob from "./mob";
import TP from "./tp"

export default class marker{
    public static coll:marker[] = [];
    public static distanceMatrice:number[][] = [];
    public static slopePercentageMatrice:number[][] = [];

    public static createDistanceMatrice(){
        TP.createDistanceMatrice().forEach(e => {
            marker.distanceMatrice.push(e);
        });
        mob.createDistanceMatrice().forEach(e => {
            marker.distanceMatrice.push(e);
        })
    }

    public static createSlopePercentageMatrice(){
        TP.createSlopePercentageMatrice().forEach(e => {
            marker.slopePercentageMatrice.push(e);
        });
        mob.createSlopePercentageMatrice().forEach(e => {
            marker.slopePercentageMatrice.push(e);
        })
    }

    public static createMatrice(){
        marker.createDistanceMatrice()
        marker.createSlopePercentageMatrice()
    }
}