import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unanswered',
  templateUrl: './unanswered.component.html',
  styleUrls: ['./unanswered.component.scss']
})
export class UnansweredComponent implements OnInit {

  dialogFlowQueries :any[]=[];
  lexQueries :any[]=[];

  constructor() { }

  ngOnInit() {
    this.dialogFlowQueries.push(...[{
      query:'Throw my balanace',
      channel:'facebook',
      userName:'johnk',
      channelLog:'fa fa-facebook-official',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'get me balanace',
      channel:'twitter',
      userName:'udayt',
      channelLog:'fa fa-twitter-square',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'Throw my balanace',
      channel:'facebook',
      userName:'surya',
      channelLog:'fa fa-facebook-official',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'get me balanace',
      channel:'twitter',
      userName:'karthik',
      channelLog:'fa fa-twitter-square',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'Throw my balanace',
      channel:'facebook',
      userName:'anisht',
      channelLog:'fa fa-facebook-official',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'get me balanace',
      channel:'twitter',
      userName:'karthik',
      channelLog:'fa fa-twitter-square',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    }
    ]);

    this.lexQueries.push(...[{
      query:'Throw my balanace',
      channel:'facebook',
      userName:'anithas',
      channelLog:'fa fa-facebook-official',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'get me balanace',
      channel:'twitter',
      userName:'sridharan',
      channelLog:'fa fa-twitter-square',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'Throw my balanace',
      channel:'facebook',
      userName:'rathish',
      channelLog:'fa fa-facebook-official',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'get me balanace',
      channel:'twitter',
      userName:'rajeshk',
      channelLog:'fa fa-twitter-square',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'Throw my balanace',
      channel:'facebook',
      userName:'prashantm',
      channelLog:'fa fa-facebook-official',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    {
      query:'get me balanace',
      channel:'twitter',
      userName:'shrimank',
      channelLog:'fa fa-twitter-square',
      date:new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    }
    ])
  }

}
