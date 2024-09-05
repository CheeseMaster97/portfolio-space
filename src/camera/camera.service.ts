import { ElementRef, Injectable } from '@angular/core';
import { ArcRotateCamera, Scene, Vector3 } from 'babylonjs';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  constructor() {}

  public createCamera(
    scene: Scene,
    canvas: ElementRef<HTMLCanvasElement>
  ): ArcRotateCamera {
    const camera = new ArcRotateCamera(
      'userCamera',
      0,
      0,
      10,
      new Vector3(0, 0, 0),
      scene
    );

    camera.setPosition(new Vector3(0, 10, 20));
    camera.attachControl(canvas, true);
    camera.panningSensibility = 0;
    return camera;
  }
}
