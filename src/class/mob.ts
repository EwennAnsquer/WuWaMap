import { Icon } from 'leaflet'

import markerInterface from '../interface/markerInterface';
import mobInterface from '../interface/mobInterface';

import TP from './tp';
import marker from './marker'

export default class mob implements marker,markerInterface,mobInterface{

    public static coll:mob[] = [];
    public id:number;
    public done:boolean = false;

    constructor(public nom:string, public imageLink:string, public x:number, public y:number, public z:number, public cost:cost, public element:element){
        this.id=marker.coll.length;
        mob.coll.push(this);
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
            iconSize: [40,40]
        })

        return icon;
    }

    public distanceTo(e:mob | TP):number{
        const dx = this.x - e.x;
        const dy = this.y - e.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public slopeDistanceTo(el:mob | TP):number { //permet de calculer la distance entre deux points en prenant en compte la différence de hauteur
        let distance = this.distanceTo(el)
        if(this.z+10<el.z){
            distance+=(el.z-this.z-10)*0.15
        }
        return distance
    }

    public distanceToAll():number[]{
        let table:number[] = [];
        TP.coll.forEach(tp => {
            table.push(this.slopeDistanceTo(tp))
        })
        mob.coll.forEach(m => {
            if(m == this){
                table.push(-1)
            }else{
                table.push(this.slopeDistanceTo(m))
            }
        });
        return table;
    }

    public static createDistanceMatrice(){
        let table:number[][] = [];
        mob.coll.forEach(m => table.push(m.distanceToAll()))
        return table;
    }

    public getMarkerLinkTo(){ //renvoie un tableau d'élément qui ont en lien qui part de ce marker
        let table:(mob|TP)[] = [];
        marker.linkMatrice[this.id].forEach((e,index)=>{
            if(e!=0){
                table.push(marker.coll[index])
            }
        })
        return table;
    }

    public getMarkerLinkFrom(){ //renvoie un tableau d'élément qui ont en lien qui arrive vers ce marker
        let table:(mob|TP)[] = [];
        for (let index = 0; index < marker.linkMatrice.length; index++) {
            if(marker.linkMatrice[index][this.id] != -1 && marker.linkMatrice[index][this.id] != 0){
                table.push(marker.coll[index])
            }
        }
        return table;
    }

    public toString():string {
        return this.id+" "+this.nom+" at x:"+this.x+" y:"+this.y+" z:"+this.z+", cost:"+this.cost+", imageLink:"+this.imageLink+", element:"+this.element
    }
}