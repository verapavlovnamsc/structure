import { Component, OnInit } from '@angular/core';
import { DbcoatService } from 'src/app/services/dbcoat.service';
import { Coat } from 'src/app/models/coat';

@Component({
  selector: 'app-menucoat',
  templateUrl: './menucoat.component.html',
  styleUrls: ['./menucoat.component.css']
})
export class MenucoatComponent implements OnInit {
  private coats: Array<Coat>;

  constructor(private service: DbcoatService) {
    service.getCoats().subscribe(x => {
      this.coats = x;
      console.log(this.coats);
    });
  }

  ngOnInit() {
  }
}

