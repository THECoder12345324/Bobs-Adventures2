class Material {
    constructor(type, x, y, w, h) {
        this.woodImg = loadImage("img/Wood.png");
        this.goldImg = loadImage("img/gold.png")
        this.type = type;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.score = 0;
    }
    display() {
        if (this.type == 'W') {
            imageMode(CENTER);
            image(this.woodImg, this.x, this.y, this.w, this.h);
            this.score = 25;
        }
        if (this.type == 'G') {
            imageMode(CENTER);
            image(this.goldImg, this.x, this.y, this.w, this.h);
            this.score = 10;
        }
    }
}