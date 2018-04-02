import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CIModel } from '../../../models/ciservice';
import { CIService } from '../../../services/ci.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.scss']
})
export class CIComponent implements OnInit, OnDestroy {

  ciForm: FormGroup;
  ciModels: CIModel[];
  private subscription: Subscription;

  constructor(private ciService: CIService) { }

  ngOnInit() {

    this.ciForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'accessKey': new FormControl('', Validators.required),
      'secretKey': new FormControl('')
    });

    this.ciModels = this.ciService.getCiModels();
    this.subscription = this.ciService.ciModelsChanged.subscribe((cis: CIModel[]) => {
      this.ciModels = cis;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addCi() {
    let name = this.ciForm.value.name;
    let accessKey = this.ciForm.value.accessKey;
    let secretKey = this.ciForm.value.secretKey;
    let ciModel = new CIModel(name, accessKey, secretKey);
    this.ciService.addCi(ciModel);
    this.ciForm.reset();


  }


}
