import { Icon } from 'leaflet'

export default class TP {

    public static tpColl:TP[] = [];

    //x corespond à la coordonnées horizontale
    //y corespond à la coordonnées verticale
    //x corespond à la hauteur
    constructor(public imageLink:string, public x:number, public y:number, public z:number){
        TP.tpColl.push(this);
    }

    public createIcon() {
        const icon = new Icon({
            iconUrl: this.imageLink,
            iconSize: [40,40]
        })

        return icon;
    }

    public toString():string {
        return "TP at x:"+this.x+" y:"+this.y+" z:"+this.z+", imageLink:"+this.imageLink
    }
}