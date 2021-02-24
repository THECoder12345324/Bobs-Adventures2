class Material {
    constructor(type, x, y, w, h) {
        this.woodImg = loadImage("img/Wood.png");
        this.type = type;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    display() {
        if (this.type == 'W') {
            imageMode(CENTER);
            image(this.woodImg, this.x, this.y, this.w, this.h);
        }
    }
}