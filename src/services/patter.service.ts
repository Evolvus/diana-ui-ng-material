import { Pattern } from '../models/pattern';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PatternService {

    patterns: Pattern[] = [];
    patternsChanged = new Subject<Pattern[]>();
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {
        this.patterns=this.getPatterns();
        // this.patterns.push(...[
        //     new Pattern('Account No', '/^\d{10}$/'),
        //     new Pattern('Mobile No', '\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$')
        // ]);
    }

    getPatterns() : Pattern[] {
        this.http.get('http://192.168.1.51:3000/blacklist').subscribe((allPatterns:Pattern[])=>{
            console.log("GetPatterns:",allPatterns);
            this.patterns =  allPatterns;
            console.log("This patterns:",this.patterns);
            this.patternsChanged.next(this.patterns);
            return this.patterns.slice();
        })
        return this.patterns.slice();
       
        
    }

    public addPattern(pattern: Pattern) {

        this.http.post('http://192.168.1.51:3000/blacklist',pattern, { headers: this.headers })
        .subscribe((res)=>{
            this.patternsChanged.next(this.getPatterns());
        },err =>{
            console.log("Error  Response",err)
        });
    }


}