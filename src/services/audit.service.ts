import { HttpClient } from '@angular/common/http';
import { Audit } from '../models/audit';
import { Constants } from './constant.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuditService {

    audits: Audit[] = [];
    auditsChanged= new Subject<Audit[]>();

    constructor(private http: HttpClient, private constants: Constants) { }


    getAll() :Audit[] {
        this.http.get(`${this.constants.DIANA_SERVER_URL}/audit`).subscribe(((auditData: Audit[]) => {
            this.audits = auditData;
            this.auditsChanged.next(this.audits);
            return this.audits.slice();
        }));
        return this.audits.slice();
    }
}