import { bootstrapApplication } from '@angular/platform-browser';
import { SpaceComponent } from './space/space.component';
import { EngineService } from './engine/engine.service';

bootstrapApplication(SpaceComponent, { providers: [EngineService] }).catch(
  (err) => console.error(err)
);
