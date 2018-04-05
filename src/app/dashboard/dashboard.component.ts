import { Component, OnInit } from '@angular/core';
import { CIService } from '../../services/ci.service';
import { ChannelService } from '../../services/channel.service';
import { Channel } from '../../models/channel';
import { CIModel } from '../../models/ciservice';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  channels: Channel[];
  fbReqCount: number;
  fbSuccessCount: number;

  twitterReqCount: number;
  twitterSuccessCount: number;

  slackReqCount: number;
  slackSuccessCount: number;

  ciModels: CIModel[];

  lexSuccessCount:number;
  lexReqCount:number;

  constructor(private channelService: ChannelService, private ciService: CIService) { }

  ngOnInit() {

    this.channels = this.channelService.getChannels();

    this.channels.forEach(channel => {
      console.log(channel);
      if (channel.name === 'facebook') {
        this.fbReqCount = channel.reqCount;
        this.fbSuccessCount = channel.successCount;
      }
      else if (channel.name === 'slack') {
        this.slackReqCount = channel.reqCount;
        this.slackSuccessCount = channel.successCount;
      } else if (channel.name === 'twitter') {
        this.twitterReqCount = channel.reqCount;
        this.twitterSuccessCount = channel.successCount;
      }
    });

    this.ciModels = this.ciService.getCiModels();

    this.lexReqCount = this.ciModels[0].requestCount;
    this.lexSuccessCount = this.ciModels[0].responseCount;

  }

}
