import { LatLngExpression, LatLngTuple } from 'leaflet'

import lineInterface from "../interface/lineInterface"

import TP from './tp';
import mob from './mob';

export default class line implements lineInterface{
    public static coll:line[] = [];
    public static color = "red";
    public static weight = 3;
    public static opacity = 1;
    public static lineCap = "round";
    public static lineJoin = "round";
    public id:number;
    public positions: LatLngExpression[] = [];

    constructor(public elTo:mob|TP, public elFrom:mob){
        this.id=line.coll.length;
        line.coll.push(this);
        this.createPolyline();
        this.writeLinks()
    }

    public createPolyline() {
        this.positions.push([this.elTo.x, this.elTo.y] as LatLngTuple)
        this.positions.push([this.elFrom.x, this.elFrom.y] as LatLngTuple)
    }

    public writeLinks(){
        this.elTo.linkTo.push(this.elFrom)
        this.elFrom.linkFrom.push(this.elTo)
    }
}