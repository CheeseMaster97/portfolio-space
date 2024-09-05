import { ElementRef, Injectable } from '@angular/core';
import {
  ArcRotateCamera,
  Engine,
  FreeCamera,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from 'babylonjs';
import { CameraService } from '../camera/camera.service';

@Injectable({ providedIn: 'root' })
export class EngineService {
  private canvas!: HTMLCanvasElement;
  private engine!: Engine;
  private scene!: Scene;
  private camera!: ArcRotateCamera;
  private light!: HemisphericLight;
  private sphere!: Mesh;
  private ground!: Mesh;

  constructor(private cameraService: CameraService) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;

    this.engine = new Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });

    this.scene = new Scene(this.engine);

    this.camera = this.cameraService.createCamera(this.scene, canvas);

    this.light = new HemisphericLight(
      'hemiLight',
      new Vector3(0, 1, 0),
      this.scene
    );

    this.sphere = MeshBuilder.CreateSphere(
      'sphere',
      { segments: 16, diameter: 2, sideOrientation: Mesh.FRONTSIDE },
      this.scene
    );
    this.sphere.position.y = 1;

    this.ground = MeshBuilder.CreateGround(
      'ground',
      {
        width: 6,
        height: 6,
        subdivisions: 2,
        updatable: false,
      },
      this.scene
    );
  }

  public animateScene(): void {
    this.engine.runRenderLoop(() => this.scene.render());

    window.addEventListener('resize', () => this.engine.resize());
  }
}
