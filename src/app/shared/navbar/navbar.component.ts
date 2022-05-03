import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss', '../../../assets/vendor/font-awesome/css/font-awesome.css']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    public LoggedIn = false;
    roles: string[] = [];
    username = "";
    constructor(public location: Location, private router: Router, private tokenStorage: TokenStorageService) {
    }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.router.events.subscribe((event) => {
                this.isCollapsed = true;
                if (event instanceof NavigationStart) {
                    if (event.url != this.lastPoppedUrl)
                        this.yScrollStack.push(window.scrollY);
                } else if (event instanceof NavigationEnd) {
                    if (event.url == this.lastPoppedUrl) {
                        this.lastPoppedUrl = undefined;
                        window.scrollTo(0, this.yScrollStack.pop());
                    } else
                        window.scrollTo(0, 0);
                }
            });
            this.location.subscribe((ev: PopStateEvent) => {
                this.lastPoppedUrl = ev.url;
            });

            if (this.tokenStorage.getToken()) {
                this.LoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
            }
            const user = this.tokenStorage.getUser();
            this.roles = user.roles;

            console.log(this.roles[0])
            this.username = user.username;
        }
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
    logout(): void {
        this.tokenStorage.signOut();
        this.router.navigate(['home'])
        window.location.reload();
    }
}
