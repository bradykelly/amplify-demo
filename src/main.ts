import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Amplify configuration - start
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';
import AWSConfig from './aws-exports';

Storage.configure(AWSConfig);
Auth.configure(AWSConfig);
// Amplify configuration - end

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
