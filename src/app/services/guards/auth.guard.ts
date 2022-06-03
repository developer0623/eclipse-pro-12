import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        // return this._authService.getSession().pipe(
        //     catchError((err: any) => {
        //         if (err instanceof HttpErrorResponse) {
        //             if (err.status === 401) {
        //                 // window.location.href = `http://pro-alpha.amscontrols.com:8080/auth/login?redirectUrl=${window.location.href}`;
        //                 // redirect user to the logout page
        //              }
        //         }
        //         console.log('err--', err);
        //         return of(false)
        //     }),
        //     // catchError(() =>

        //     //     // Return false
        //     //     of(false)
        //     // ),
        //     switchMap((response: any) => {
        //         console.log('response--', response);

        //         // // Store the access token in the local storage
        //         // this.accessToken = response.accessToken;

        //         // // Set the authenticated flag to true
        //         // this._authenticated = true;

        //         // // Store the user on the user service
        //         // this._userService.user = response.user;

        //         // Return true
        //         return of(true);
        //     })
        // );
        // this.http.get<any>(`http://pro-alpha.amscontrols.com:8080/_api/user/session`).subscribe((data: any) => {
        //     console.log('data---', data)
        // });
        // const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        // return this._check(redirectUrl);
        return of(true);
    }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    // {
    //     const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    //     return this._check(redirectUrl);
    // }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    // canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     return this._check('/');
    // }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    // private _check(redirectURL: string): Observable<boolean>
    // {
    //     // Check the authentication status
    //     return this._authService.check()
    //                .pipe(
    //                    switchMap((authenticated) => {

    //                        // If the user is not authenticated...
    //                        if ( !authenticated )
    //                        {
    //                            // Redirect to the sign-in page
    //                            this._router.navigate(['sign-in'], {queryParams: {redirectURL}});

    //                            // Prevent the access
    //                            return of(false);
    //                        }

    //                        // Allow the access
    //                        return of(true);
    //                    })
    //                );
    // }
}
