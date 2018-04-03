import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { PatternService } from '../../../services/patter.service';
import { Pattern } from '../../../models/pattern';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss']
})
export class PatternComponent implements OnInit, OnDestroy {

  patternForm: FormGroup;
  patterns: Pattern[];
  private subscription: Subscription;


  constructor(private patternService: PatternService) { }

  ngOnInit() {
    this.patternForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'pattern': new FormControl('', Validators.required)
    });
    this.patterns = this.patternService.getPatterns();
    this.subscription = this.patternService.patternsChanged.subscribe((patrns: Pattern[]) => {
      console.log("Subscribed data:",patrns);
      this.patterns = patrns;
    });

  }

  addPattern() {
    let name = this.patternForm.value.name;
    let patternValue = this.patternForm.value.pattern;
    let pattern = new Pattern(name, patternValue);
    this.patternService.addPattern(pattern);
    this.patternForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
