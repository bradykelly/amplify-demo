import { Component, OnInit } from "@angular/core";
import { Auth } from "aws-amplify";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    title: string = "amplify-demo";
    isUserLoggedIn: boolean = false;
    userName: string = "";

    ngOnInit(): void {
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log(user);
                this.isUserLoggedIn = true;
                this.userName = user?.attributes?.name;
            })
            .catch(err => console.log(err));
    }

    login() {
        Auth.federatedSignIn();
    }

    logout() {
        Auth.signOut()
            .then(data => {
                console.log(data);
                this.isUserLoggedIn = false;
            })
            .catch(err => console.log(err));
    }
}


