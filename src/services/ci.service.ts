import { CIModel } from '../models/ciservice';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CIService {

    ciModels: CIModel[]=[];
    ciModelsChanged=new Subject<CIModel[]>();
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http:HttpClient) {
        this.ciModels = this.getCiModels();
        // this.ciModels.push(...[
        //     new CIModel('DialogFlow', 'ADAS79DDF#$DFFAGGBD', ''),
        //     new CIModel('Amazon Lex', 'HHDY%GGDDDDSD', 'DKFS-DFK78-GFDG324-324SDFSD'),
        //     new CIModel('Amazon Alexa', 'HHDY%GGDDDDSD', 'DKFS-DFK78-GFDG324-324SDFSD')
        // ]);
    }

    getCiModels(): CIModel[] {
        this.http.get('http://192.168.1.51:3000/ciservice').subscribe((ci:CIModel[])=>{
            this.ciModels =  ci;
            this.ciModelsChanged.next(this.ciModels);
            return this.ciModels.slice();
        })
        return this.ciModels.slice();
    }

    public addCi(ciModel:CIModel){
        this.http.post('http://192.168.1.51:3000/ciservice',ciModel, { headers: this.headers })
        .subscribe((res)=>{
            this.ciModelsChanged.next(this.getCiModels());
        },err =>{
            console.log("Error  Response",err)
        });
    }

}