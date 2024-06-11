import { Icon } from 'leaflet'

export default class mob{

    public static mobColl:mob[] = [];

    constructor(public nom:string, public imageLink:string, public x:number, public y:number, public z:number, public cost:cost){
        mob.mobColl.push(this);
    }

    public createIcon() {
        const icon = new Icon({
            iconUrl: this.imageLink,
            iconSize: [40,40]
        })

        return icon;
    }

    public toString():string {
        return "Mob at x:"+this.x+" y:"+this.y+" z:"+this.z+", cost:"+this.cost+", imageLink:"+this.imageLink
    }
}