import { Icon } from 'leaflet'

import markerInterface from '../interface/markerInterface';
import mobInterface from '../interface/mobInterface';

import TP from './tp';
import marker from './marker'

export default class mob implements marker,markerInterface,mobInterface{

    public static coll:mob[] = [];
    public id:number;
    public linkFrom:(mob|TP)[] = [];
    public linkTo:mob[] = [];
    public done:boolean = false;

    constructor(public nom:string, public imageLink:string, public x:number, public y:number, public z:number, public cost:cost, public element:element){
        this.id=mob.coll.length;
        mob.coll.push(this);
        marker.coll.push(this);
    }

    public createIcon() {
        const icon = new Icon({
            iconUrl: this.imageLink,
            iconSize: [40,40],
            // className: "truc"
        })

        return icon;
    }

    public distanceTo(e:mob | TP):number{
        const dx = this.x - e.x;
        const dy = this.y - e.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public slopeDistanceTo(e:mob | TP):number { //permet de calculer la distance entre deux points en prenant en compte la différence de hauteur
        const dx = this.x - e.x;
        const dy = this.y - e.y;
        const dz = this.z - e.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    public slopePercentageTo(e:mob | TP):number { //permet de calculer la raideur de la pente entre deux points
        const horizontalDistance = this.distanceTo(e);
        const heightDifference = this.z - e.z;
        return (heightDifference / horizontalDistance) * 100;
    }

    public distanceToAll():number[]{
        let table:number[] = [];
        TP.coll.forEach(tp => {
            table.push(this.distanceTo(tp))
        })
        mob.coll.forEach(m => {
            if(m == this){
                table.push(-1)
            }else{
                table.push(this.distanceTo(m))
            }
        });
        return table;
    }

    public slopePercentageToAll():number[]{
        let table:number[] = [];
        TP.coll.forEach(tp => {
            table.push(this.slopePercentageTo(tp))
        })
        mob.coll.forEach(m => {
            if(m == this){
                table.push(-1)
            }else{
                table.push(this.slopePercentageTo(m))
            }
        })
        return table;
    }

    public static createDistanceMatrice(){
        let table:number[][] = [];
        mob.coll.forEach(m => table.push(m.distanceToAll()))
        return table;
    }

    public static createSlopePercentageMatrice(){
        let table:number[][] = [];
        mob.coll.forEach(m => table.push(m.slopePercentageToAll()))
        return table;
    }

    public static getMobById(id:number){
        return mob.coll[id];
    }

    public toString():string {
        return this.id+" "+this.nom+" at x:"+this.x+" y:"+this.y+" z:"+this.z+", cost:"+this.cost+", imageLink:"+this.imageLink+", element:"+this.element
    }
}