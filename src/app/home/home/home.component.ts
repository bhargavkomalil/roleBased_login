import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_model/user';
import {  AuthenticationService } from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
}
