import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { retry, tap } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry({ count: 3, delay: 1000 }),
    tap({
      error: (error: HttpErrorResponse) => {
        console.error('HTTP Error HAHAHA:', error);
        // You can add more sophisticated error handling here, like logging to an external service
      }
    })
  );
};
