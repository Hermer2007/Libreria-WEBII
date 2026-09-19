import { CanDeactivateFn } from '@angular/router';

export const candeactivateGuard: CanDeactivateFn<any> = 
(component,currentRoute,currentState,nextState) => {

  if(nextState?.url === '/login'){
    return confirm('¿Está seguro de cerrar sesión?');
  }

  return true;

};