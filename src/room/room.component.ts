import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from '../engine/engine.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private engine: EngineService) {}

  ngOnInit(): void {
    this.engine.createScene(this.canvas);
    this.engine.animateScene();
  }
}
