class Map {
    constructor(array) {
        this.map = array;

        this.image1 = loadImage('img/ground1.png');
        this.image2 = loadImage('img/ground2.png');
        this.image3 = loadImage('img/ground3.png');
        this.image4 = loadImage('img/ground4.png');
        this.poleImg = loadImage('img/pole.png');
        this.left = loadImage('img/leftbottom.png');
        this.middle = loadImage('img/middlebottom.png');
        this.right = loadImage('img/rightbottom.png');
        this.wiggle = loadImage('img/wigglesworth.png');
        this.enemy1Img = loadImage('img/enemy1real.png');
        this.images = [this.image1, this.image2, this.image3];

        this.enemies = [];
        this.materials = [];
    }
    loadMap() {
        //this.map = loadStrings(this.file);
            console.log(this.map);
            for (var i = 0; i < this.map.length; i++) {
                for (var j = 0; j < this.map[i].length; j++) {
                    /*var pixel;
                    pixel = line.splice(j, 1);*/
                    if (this.map[i][j] == '1') {
                        var ground = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        var x = random(0, 2);
                        var image = this.images[x];
                        ground.addImage(random(this.images));
                        ground.scale = 2.4;
                        //ground.shapeColor = "green";
                        groundGroup.add(ground);
                        console.log("Ground");
                    }
                    if (this.map[i][j] == '2') {
                        var ground = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        var x = random(0, 2);
                        var image = this.images[x];
                        ground.addImage(this.image4);
                        ground.scale = 2.4;
                        //ground.shapeColor = "green";
                        groundGroup.add(ground);
                        console.log("Ground");
                    }
                    if (this.map[i][j] == '3') {
                        var pole = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        pole.addImage(this.poleImg);
                        pole.scale = 2.4;
                        flagpoleGroup.add(pole);
                    }
                    if (this.map[i][j] == '4') {
                        var flag = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        flag.shapeColor = "black";
                        flagpoleGroup.add(flag);
                    }
                    if (this.map[i][j] == '5') {
                        var bottom = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        bottom.addImage(this.left);
                        bottom.scale = 2.4;
                        groundGroup.add(bottom);
                    }
                    if (this.map[i][j] == '6') {
                        var bottom = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        bottom.addImage(this.middle);
                        bottom.scale = 2.4;
                        groundGroup.add(bottom);
                    }
                    if (this.map[i][j] == '7') {
                        var bottom = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        bottom.addImage(this.right);
                        bottom.scale = 2.4;
                        groundGroup.add(bottom);
                    }
                    if (this.map[i][j] == '8') {
                        var flag = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        var imge = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        imge.addImage(this.wiggle);
                        imge.scale = 0.5;
                        flag.shapeColor = "black";
                        flagpoleGroup.add(flag);
                    }
                    if (this.map[i][j] == 'E') {
                        var enemy = new Enemy(j * TILESIZE, i * TILESIZE, this.enemy1Img, 1);
                        enemy.display();
                        this.enemies.push(enemy);
                    }
                    if (this.map[i][j] == 'W') {
                        var sprite = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        sprite.visible = false;
                        var wood = new Material('W', j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        wood.display();
                        this.materials.push(wood);
                        materialGroup.add(sprite);
                    }
                }
            }
            console.log("Drawed");
    }

    update() {
        for (var i = 0; i < this.enemies.length; i++) {
            this.enemies[i].display();
        }
        for (var j = 0; j < this.materials.length; j++) {
            this.materials[j].display();
        }
    }

    destroy() {
        flagpoleGroup.removeSprites();
        groundGroup.removeSprites();
        enemyGroup.removeSprites();
        bob.remove();
    }
}