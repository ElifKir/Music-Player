class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 1;
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if(this.index + 1 < this.musicList.length) {
            this.index++;  //bir sonraki şarkıya gitmek için.
        }
        else {
             this.index = 0;
        }
    }

    prev() {
        if(this.index != 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1; //bir önceki şarkıya gitmek için.
        }
    }
}