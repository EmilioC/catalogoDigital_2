import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../../services/material-service.service';
import { Material} from '../models/material.model';

@Component({
  selector: 'app-material-general',
  templateUrl: './material-general.component.html',
  styleUrls: ['./material-general.component.css']
})
export class MaterialGeneralComponent implements OnInit {

  materiales : Material []=[];
  materialesEncontrados: number= 0;

  constructor(
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {

    this.materiales = this.materialService.getMateriales();
    this.materialesEncontrados = this.materiales.length;
  }

}
