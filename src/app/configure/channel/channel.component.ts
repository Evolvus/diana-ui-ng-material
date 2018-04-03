import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Channel } from '../../../models/channel';
import { Subscription } from 'rxjs/Subscription';
import { ChannelService } from '../../../services/channel.service';

@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit, OnDestroy {


    channelForm: FormGroup;
    channels: Channel[];
    private subscription: Subscription;
    

    constructor(private channelService: ChannelService) { }

    ngOnInit() {
        this.channelForm = new FormGroup({
            'name': new FormControl('', Validators.required),
            'webhookApi': new FormControl('', Validators.required),
            'verificationToken': new FormControl('', Validators.required)
        });

        this.channels = this.channelService.getChannels();

        this.subscription = this.channelService.channelsChanged.subscribe((chnls: Channel[]) => {
            this.channels = chnls;
        })

    }

    addChannel() {
        let name = this.channelForm.value.name;
        let webhookApi = this.channelForm.value.webhookApi;
        let verificationToken = this.channelForm.value.verificationToken;
        this.channelService.addChannel(new Channel(name, webhookApi, verificationToken));
        this.channelForm.reset();
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
