import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    // HashStrategy permite que la aplicación funcione correctamente 
    // incluso cuando se accede a rutas específicas directamente en 
    // el navegador, sin necesidad de configurar el servidor para redirigir todas las solicitudes a index.html.
     {  
      provide: LocationStrategy, 
      useClass: HashLocationStrategy 
    },
  ],
};
