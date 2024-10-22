import { Icon } from 'leaflet'

import markerInterface from '../interface/markerInterface';
import tpInterface from '../interface/tpInterface';

import mob from './mob'
import marker from './marker'

export default class TP implements marker,markerInterface,tpInterface{

    public static coll:TP[] = [];
    public id:number;
    public done:boolean = false;

    constructor(public type:typeTp, public imageLink:string, public x:number, public y:number, public z:number){
        this.id=marker.coll.length;
        TP.coll.push(this);
        marker.coll.push(this);
        if(localStorage.getItem(String(this.id))){
            if(localStorage.getItem("lastChangement")){
                const date = new Date();
                date.setHours(4,0,0,0)
                if(new Date(localStorage.getItem("lastChangement") as string) < date){
                    localStorage.removeItem(String(this.id))
                }
            }else{
                this.done = JSON.parse(localStorage.getItem(String(this.id)) as string)
            }
        }
    }

    public createIcon() {
        const icon = new Icon({
            iconUrl: this.imageLink,
            iconSize: [40,40],
            // className: "truc",
        })

        return icon;
    }

    public distanceTo(el:mob|TP):number{
        const dx = this.x - el.x;
        const dy = this.y - el.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public slopeDistanceTo(el:mob|TP): number { //permet de calculer la distance entre deux points en prenant en compte la différence de hauteur
        let distance = this.distanceTo(el)
        if(this.z+10<el.z){
            distance+=(el.z-this.z-10)*0.15
        }
        return distance
    }

    public distanceToAll():number[]{
        let table:number[] = [];
        TP.coll.forEach(tp=> {
            table.push(this.slopeDistanceTo(tp))
        });
        mob.coll.forEach(m => {
            table.push(this.slopeDistanceTo(m))
        });
        return table;
    }

    public static createDistanceMatrice(){
        let table:number[][] = [];
        TP.coll.forEach(tp => table.push(tp.distanceToAll()))
        return table;
    }

    public getNearestMobs(){
        let table:mob[] = [];

        mob.coll.forEach(m=>{
            let isSmaller = true;
            TP.coll.forEach(tp=>{
                if(marker.distanceMatrice[tp.id][m.id]<marker.distanceMatrice[this.id][m.id]){
                    isSmaller = false;
                }
            })
            if(isSmaller) table.push(m)
        })

        // table.forEach(m=>{
        //     let allDistances = marker.distanceMatrice[m.id]
        //     let filter = allDistances.filter(value => value !== -1)
        //     let minDistance = Math.min(...filter)
        //     let index = allDistances.indexOf(minDistance)
        //     if(marker.coll[index] !== this){
        //         table = table.filter(mob => mob !== m)
        //     }
        // })

        return table;
    }

    public getMarkerLinkTo(){
        let table:(mob|TP)[] = [];
        marker.linkMatrice[this.id].forEach((e,index)=>{
            if(e!=0){
                table.push(marker.coll[index])
            }
        })
        return table;
    }

    public getMarkerLinkFrom(){
        let table:(mob|TP)[] = [];
        for (let index = 0; index < marker.linkMatrice.length; index++) {
            if(marker.linkMatrice[index][this.id] != -1){
                table.push(marker.coll[index])
            }
        }
        return table;
    }

    public toString():string {
        return this.id+" "+this.type+" at x:"+this.x+" y:"+this.y+" z:"+this.z+", imageLink:"+this.imageLink
    }
}