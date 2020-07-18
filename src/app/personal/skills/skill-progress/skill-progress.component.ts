import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.css']
})
export class SkillProgressComponent implements OnInit {
  @Input() name: string;
  @Input() percentage: number;

  constructor() {
  }

  ngOnInit() {
  }

}
