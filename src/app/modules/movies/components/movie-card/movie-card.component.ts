import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie-card',
    template: `<p-card [header]="title" styleClass="m-3" [style]="{'width': '25rem', 'border': 'solid 1px #FFF'}">
        <ng-content select="[image]"></ng-content>
        <ng-content select="[info]"></ng-content>
        </p-card>`
})
export class MovieCardComponent {
    @Input()
    title: string;

    constructor() {
        this.title = '';
    }
}