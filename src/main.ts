import { bootstrapApplication } from '@angular/platform-browser';
import { RoomComponent } from './room/room.component';
import { EngineService } from './engine/engine.service';

bootstrapApplication(RoomComponent, { providers: [EngineService] }).catch(
  (err) => console.error(err)
);
