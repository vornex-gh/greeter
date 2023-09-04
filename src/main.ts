import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const theme = localStorage['theme'] === 'dark' ? 'dark' : 'light';
document.documentElement.classList.add(theme);
