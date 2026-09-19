import { CanDeactivateFn } from '@angular/router';

export const candeactivateGuard: CanDeactivateFn<any> = () => {

  return confirm('¿Está seguro que desea salir de esta página?');

};



