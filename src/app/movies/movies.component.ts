import {Component, OnInit} from '@angular/core';

import * as WebTorrent from 'webtorrent'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('Setting up WebTorrent');

    const client = new WebTorrent();

    const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

    client.add(torrentId, function (torrent) {
      // Torrents can contain many files. Let's use the .mp4 file
      const file = torrent.files.find(function (fileReference) {
        return fileReference.name.endsWith('.mp4')
      });

      torrent.on('done', function () {
        console.log('torrent download finished')
      });

      // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
      file.appendTo('body')
    });
  }

}
