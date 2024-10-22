import mob from "./mob";
import TP from "./tp"

export default class marker{
    public static coll:(mob|TP)[] = [];
    public static distanceMatrice:number[][] = [];
    public static linkMatrice:number[][] = []

    public static createDistanceMatrice(){
        TP.createDistanceMatrice().forEach(e => {
            marker.distanceMatrice.push(e);
        });
        mob.createDistanceMatrice().forEach(e => {
            marker.distanceMatrice.push(e);
        })
    }

    public static createLinkMatrice(){
        TP.coll.forEach(()=>{
            this.linkMatrice.push(Array(TP.coll.length+mob.coll.length).fill(0))
        })
        mob.coll.forEach(()=>{
            this.linkMatrice.push(Array(TP.coll.length+mob.coll.length).fill(0))
        })
    }

    public static createMatrice(){
        marker.createDistanceMatrice()
        marker.createLinkMatrice()
    }
}