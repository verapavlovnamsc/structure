import { Component, OnInit, Input } from '@angular/core';
import { Coat } from '../models/coat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coat-item',
  templateUrl: './coat-item.component.html',
  styleUrls: ['./coat-item.component.css']
})
export class CoatItemComponent implements OnInit {
  @Input() itemCoat: Coat;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  open() {
    this.router.navigate([`/coat/${this.itemCoat.id}`]);
  }


}
