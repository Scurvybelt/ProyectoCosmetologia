import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-intro-video',
    templateUrl: './intro-video.component.html',
    styleUrls: ['./intro-video.component.scss']
})
export class IntroVideoComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}