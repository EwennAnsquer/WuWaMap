import { Icon } from 'leaflet'

import markerInterface from '../interface/markerInterface';
import tpInterface from '../interface/tpInterface';

import mob from './mob'
import marker from './marker'

export default class TP implements marker,markerInterface,tpInterface{

    public static coll:TP[] = [];
    public id:number;
    public done:boolean = false;
    public linkTo:mob[] = [];

    constructor(public type:typeTp, public imageLink:string, public x:number, public y:number, public z:number){
        this.id=TP.coll.length;
        TP.coll.push(this);
        marker.coll.push(this);
    }

    public createIcon() {
        const icon = new Icon({
            iconUrl: this.imageLink,
            iconSize: [40,40],
            // className: "truc",
        })

        return icon;
    }

    public distanceTo(mob:mob):number{
        const dx = this.x - mob.x;
        const dy = this.y - mob.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public slopeDistanceTo(mob: mob): number { //permet de calculer la distance entre deux points en prenant en compte la différence de hauteur
        const dx = this.x - mob.x;
        const dy = this.y - mob.y;
        const dz = this.z - mob.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    public slopePercentageTo(mob: mob): number { //permet de calculer la raideur de la pente entre deux points
        const horizontalDistance = this.distanceTo(mob);
        const heightDifference = this.z - mob.z;
        return (heightDifference / horizontalDistance) * 100;
    }

    public distanceToAll():number[]{
        let table:number[] = [];
        mob.coll.forEach(m => {
            table.push(this.distanceTo(m))
        });
        return table;
    }

    public slopePercentageToAll():number[]{
        let table:number[] = [];
        mob.coll.forEach(m => {
            table.push(this.slopePercentageTo(m))
        })
        return table;
    }

    public static createDistanceMatrice(){
        let table:number[][] = [];
        TP.coll.forEach(tp => table.push(tp.distanceToAll()))
        return table;
    }

    public static createSlopePercentageMatrice(){
        let table:number[][] = [];
        TP.coll.forEach(tp => table.push(tp.slopePercentageToAll()))
        return table;
    }

    public getNearestMobs(){
        let idTable:number[] = [];

        for (let i = 0; i < marker.distanceMatrice[this.id].length; i++) {
            let isSmaller = true;
            marker.distanceMatrice.forEach((e,f)=>{
                if(f<TP.coll.length){
                    if(e[i]<marker.distanceMatrice[this.id][i]){
                        isSmaller = false;
                    }
                }
            })
            if(isSmaller) idTable.push(i)
        }

        return idTable;
    }

    public toString():string {
        return this.id+" "+this.type+" at x:"+this.x+" y:"+this.y+" z:"+this.z+", imageLink:"+this.imageLink
    }
}