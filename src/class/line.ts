import { LatLngExpression } from 'leaflet'

import lineInterface from "../interface/lineInterface"

export default class line implements lineInterface{
    public static coll:line[] = [];
    public static color = "red";
    public static weight = 3;
    public static opacity = 1;
    public static lineCap = "round";
    public static lineJoin = "round";
    public id:number;

    constructor(public positions:LatLngExpression[]){
        this.id=line.coll.length;
        line.coll.push(this);
    }
}