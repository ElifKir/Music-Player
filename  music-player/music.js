class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Shut Up and Listen", "Nicholas Bonnin","1.jpg","1.mp3"),    
    new Music("Enough's Enough", "Paris Shadows","2.jpg","2.mp3"),    
    new Music("Pessimist", "Lithe","3.jpg","3.mp3")    
];
