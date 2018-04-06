import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Constants } from './constant.service';
import { Answers } from '../models/answers';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AnswerService {

    answeredData: Answers[]=[];
    answersChanged = new Subject<Answers[]>();

    constructor(private http: HttpClient, private constants: Constants) { }

    getAnsweredData() :Answers[]{

        this.http.get(`${this.constants.DIANA_SERVER_URL}/answers`)
            .subscribe((answer: Answers[]) => {
                this.answeredData = answer;
                this.answersChanged.next(this.answeredData.slice());
                return this.answeredData.slice();
            });
            return this.answeredData.slice();
    }

}