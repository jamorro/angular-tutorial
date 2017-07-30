import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from "./playlist.component";
import {Video} from "./video";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;
    constructor(){
        this.videos = [
            new Video(1,"Installing django", "qgGIqRFvFFk", "How to isntall django"),
            new Video(2,"Surviving the Wilderness", "Fgwy-UdtyLs", "Hiking woop")

        ]
    }
}
