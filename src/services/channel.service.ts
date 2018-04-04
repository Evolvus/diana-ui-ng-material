import { Channel } from '../models/channel';
import { Subject } from 'rxjs/Subject';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from './constant.service';



@Injectable()
export class ChannelService {



    channels: Channel[]=[];
    channelsChanged=new Subject<Channel[]>();
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http:HttpClient,private constants:Constants) {
        this.channels = this.getChannels();
        // this.channels.push(...[
        //     new Channel('Facebook', 'https://evolvus.diana.com/ai/facebook', 'ANHJD7DHJDF-YDJKJJH7'),
        //     new Channel('Twitter', 'https://evolvus.diana.com/ai/twitter', 'UUHDKH-IIKDHJD68GSJ'),
        //     new Channel('Slack', 'https://evolvus.diana.com/ai/slack', 'YYSJKFHJ556-KKSIJDHJD223')
        // ]);
    }

    getChannels(): Channel[] {

        this.http.get(`${this.constants.DIANA_SERVER_URL}/channel`).subscribe((chnls:Channel[])=>{
            this.channels =  chnls;
            this.channelsChanged.next(this.channels);
            return this.channels.slice();
        });
        return this.channels.slice();

    }

    public addChannel(channel:Channel){
        this.http.post(`${this.constants.DIANA_SERVER_URL}/channel`,channel, { headers: this.headers })
        .subscribe((res)=>{
            this.channelsChanged.next(this.getChannels());
        },err =>{
            console.log("Error  Response",err)
        });
        
    }


}