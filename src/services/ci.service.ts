import { CIModel } from '../models/ciservice';
import { Subject } from 'rxjs/Subject';


export class CIService {

    ciModels: CIModel[]=[];
    ciModelsChanged=new Subject<CIModel[]>();


    constructor() {
        this.ciModels.push(...[
            new CIModel('DialogFlow', 'ADAS79DDF#$DFFAGGBD', ''),
            new CIModel('Amazon Lex', 'HHDY%GGDDDDSD', 'DKFS-DFK78-GFDG324-324SDFSD'),
            new CIModel('Amazon Alexa', 'HHDY%GGDDDDSD', 'DKFS-DFK78-GFDG324-324SDFSD')
        ]);
    }

    getCiModels(): CIModel[] {
        return this.ciModels.slice();
    }

    public addCi(ciModel:CIModel){
        this.ciModels.push(ciModel);
        this.ciModelsChanged.next(this.getCiModels());
    }

}