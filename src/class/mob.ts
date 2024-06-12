import { Icon, LatLngExpression, LatLngTuple } from 'leaflet'

import markerInterface from '../interface/markerInterface';
import mobInterface from '../interface/mobInterface';

export default class mob implements markerInterface,mobInterface{

    public static coll:mob[] = [];
    public id:number;

    constructor(public nom:string, public imageLink:string, public x:number, public y:number, public z:number, public cost:cost, public element:element){
        this.id=mob.coll.length;
        mob.coll.push(this);
    }

    public createIcon() {
        const icon = new Icon({
            iconUrl: this.imageLink,
            iconSize: [40,40]
        })

        return icon;
    }

    public createPolyline(mob:mob): LatLngExpression[] {
        return [
            [this.x, this.y] as LatLngTuple,
            [mob.x, mob.y] as LatLngTuple
        ]
    }

    public distanceTo(mob:mob){
        const dx = this.x - mob.x;
        const dy = this.y - mob.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public toString():string {
        return this.id+" "+this.nom+" at x:"+this.x+" y:"+this.y+" z:"+this.z+", cost:"+this.cost+", imageLink:"+this.imageLink+", element:"+this.element
    }
}