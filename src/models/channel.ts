export class Channel {
    public successCount:number=0;
    public failCount:number=0;
    public reqCount:number=0;
    public enabled:number=1;
    constructor(public name:string,public webhookApi:string,public verificationToken:string){}
}