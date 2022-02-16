import { Component, OnInit, Input } from '@angular/core';
import { Material } from '../models/material.model';
import { MaterialService } from '../../services/material-service.service';


@Component({
  selector: 'app-material-tarjeta',
  templateUrl: './material-tarjeta.component.html',
  styleUrls: ['./material-tarjeta.component.css']
})
export class MaterialTarjetaComponent implements OnInit {

  materiales : Material []=[];
@Input() material: any = {};
@Input() index: number = 0;
materialesEncontrados: number= 0;
ampliarInfo: boolean = false;

  constructor(
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {
  }

  mostrarInfo(){
    this.ampliarInfo = !this.ampliarInfo;
  }

}
