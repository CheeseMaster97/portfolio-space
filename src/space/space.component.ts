import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from '../engine/engine.service';

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [],
  templateUrl: './space.component.html',
  styleUrl: './space.component.scss',
})
export class SpaceComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private engine: EngineService) {}

  ngOnInit(): void {
    this.engine.createScene(this.canvas);
    this.engine.animateScene();
  }
}
