class Enemy {
    constructor(x, y, img, scl) {
        this.sprite = createSprite(x, y);
        this.image = img;
        this.sprite.addImage(this.image);
        this.sprite.scale = scl;
        this.x = x;
        this.y = y;
        this.dir = 1;
        this.rand = 0;
        enemyGroup.add(this.sprite);
    }
    display() {
        var x2 = this.x - 60;
        var x3 = this.x + 60;
        if (this.sprite.x < x2 || this.sprite.x > x3) {
            this.dir *= -1;
        }
        this.rand = random(0, 100);

        if (this.sprite.collide(groundGroup)) {
            if (this.rand < 90) {
                this.sprite.velocityY -= 13;
            }
            //this.sprite.collide(groundGroup);
        }
        this.sprite.velocityY += 0.8;

        this.sprite.x += 2 * this.dir;
        console.log(this.sprite.x);
    }
}