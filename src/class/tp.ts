import { Icon, LatLngExpression, LatLngTuple } from 'leaflet'

import markerInterface from '../interface/markerInterface';
import tpInterface from '../interface/tpInterface';

import mob from './mob'
import line from './line'

export default class TP implements markerInterface,tpInterface{

    public static coll:TP[] = [];
    public id:number;

    constructor(public type:typeTp, public imageLink:string, public x:number, public y:number, public z:number){
        this.id=TP.coll.length;
        TP.coll.push(this);
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

    public distanceToAllMobs(){
        mob.coll.forEach(m => {
            console.log(m.toString(),this.distanceTo(m))
            new line(this.createPolyline(m))
        });
    }

    public toString():string {
        return this.id+" "+this.type+" at x:"+this.x+" y:"+this.y+" z:"+this.z+", imageLink:"+this.imageLink
    }
}