import {Component} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public info: Object = {
        'Names': [
            {
                'name': 'todd',
                'age': 25,
                'email': 'yo@ionic.com',
                'bio': 'This is my super cool bio!'
            },
            {
                'name': 'julie',
                'age': 27,
                'email': 'whatsup@ionic.com',
                'bio': 'This is my super cool bio!'
            },
            {
                'name': 'sandy',
                'age': 29,
                'email': 'hi@ionic.com',
                'bio': 'This is my super cool bio!'
            },
            {
                'name': 'sandy',
                'age': 29,
                'email': 'hi@ionic.com',
                'bio': 'This is my super cool bio!'
            }
        ]
    };

    public isShown: Boolean = true;

    buttonClick(): void {
        this.isShown = !this.isShown;
        if (this.isShown === false) {
            document.querySelector('.people').style.display = 'none';
            document.querySelector('.toggle-text').innerHTML = 'Show People';
        } else {
            document.querySelector('.people').style.display = 'block';
            document.querySelector('.toggle-text').innerHTML = 'Hide People';
        }
    };

    constructor(public toastController: ToastController) {
    }

    async clickFab() {
        const toast = await this.toastController.create({
            message: 'Click to Close',
            showCloseButton: true,
            position: 'bottom',
            closeButtonText: 'Done'
        });
        toast.present();
    }
}
