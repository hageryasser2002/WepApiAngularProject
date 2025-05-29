import { Component, OnInit } from '@angular/core';
import { DynamicWorkSpaceService } from '../../Services/dynamic-work-space.service';
import { ISpace } from '../../Models/ISpaces';
import { StaticWorkSpaceService } from '../../Services/static-work-space.service';

@Component({
  selector: 'app-space',
  imports: [],
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})
export class SpaceComponent implements OnInit {
  spaces!:any;
  constructor(private spaceService:StaticWorkSpaceService){}

  
  ngOnInit(): void {
  this.spaces= this.spaceService.getAllSpaces();
  }
}
