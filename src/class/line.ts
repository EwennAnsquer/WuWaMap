import { LatLngExpression, LatLngTuple } from 'leaflet'

import lineInterface from "../interface/lineInterface"

import TP from './tp';
import mob from './mob';
import marker from './marker';

export default class line implements lineInterface{
    public static coll:line[] = [];
    public static color = "red";
    public static weight = 3;
    public static opacity = 1;
    public static lineCap = "round";
    public static lineJoin = "round";
    public id:number;
    public positions: LatLngExpression[] = [];

    constructor(public begin:mob|TP, public end:mob|TP){
        this.id=line.coll.length;
        line.coll.push(this);
        this.createPolyline();
        this.writeLinks()
    }

    public createPolyline() {
        this.positions.push([this.begin.x, this.begin.y] as LatLngTuple)
        this.positions.push([this.end.x, this.end.y] as LatLngTuple)
    }

    public writeLinks(){
        marker.linkMatrice[this.begin.id][this.end.id]+=1;
    }

    public static deleteLine(begin:mob|TP, end:mob){
        line.coll.forEach((l,index)=>{
            if(l.begin == begin && l.end == end){
                line.coll.splice(index,1)
            }
        })
    }
}