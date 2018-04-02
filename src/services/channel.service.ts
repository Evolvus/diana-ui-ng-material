import { Channel } from '../models/channel';
import { Subject } from 'rxjs/Subject';




export class ChannelService {



    channels: Channel[]=[];
    channelsChanged=new Subject<Channel[]>();


    constructor() {
        this.channels.push(...[
            new Channel('Facebook', 'https://evolvus.diana.com/ai/facebook', 'ANHJD7DHJDF-YDJKJJH7'),
            new Channel('Twitter', 'https://evolvus.diana.com/ai/twitter', 'UUHDKH-IIKDHJD68GSJ'),
            new Channel('Slack', 'https://evolvus.diana.com/ai/slack', 'YYSJKFHJ556-KKSIJDHJD223')
        ]);
    }

    getChannels(): Channel[] {
        return this.channels.slice();
    }

    public addChannel(channel:Channel){
        this.channels.push(channel);
        this.channelsChanged.next(this.getChannels());
    }


}