import { Pattern } from '../models/pattern';
import { Subject } from 'rxjs/Subject';


export class PatternService {

    patterns: Pattern[]=[];
    patternsChanged=new Subject<Pattern[]>();


    constructor() {
        this.patterns.push(...[
            new Pattern('Account No', '/^\d{10}$/'),
            new Pattern('Mobile No', '\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$')
        ]);
    }

    getPatterns(): Pattern[] {
        return this.patterns.slice();
    }

    public addPattern(pattern: Pattern){
        this.patterns.push(pattern);
        this.patternsChanged.next(this.getPatterns());
    }


}