class Map {
    constructor(array, title) {
        this.map = array;
        this.title = title;

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
        this.moveImg = loadImage('img/heavymetal.png');

        this.x = 0;

        this.dir = 1;
        this.switch = 0;

        this.enemies = [];
        this.materials = [];
        this.movePlatsH = [];
        this.movePlatsV = [];
        this.timer = 0;
        this.start = false;
    }
    showTitle() {
        camera.zoom = 1;
        camera.position.x = width / 2;
        camera.position.y = height / 2;
        console.log(this.timer);
        background(0, 0, 0);
        textSize(40);
        fill(255, 215, 0);
        this.x += 1;
        text(this.title, width / 2 + this.x, height / 2);
    }
    loadMap() {
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
                    if (this.map[i][j] == 'H') {
                        var movePlat = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        movePlat.addImage(this.moveImg);
                        movePlat.scale = 2.4;
                        groundGroup.add(movePlat);
                        this.movePlatsH.push(movePlat);
                    }
                    if (this.map[i][j] == 'V') {
                        var movePlat = createSprite(j * TILESIZE, i * TILESIZE, TILESIZE, TILESIZE);
                        movePlat.addImage(this.moveImg);
                        movePlat.scale = 2.4;
                        groundGroup.add(movePlat);
                        this.movePlatsV.push(movePlat);
                    }
                }
            }
    }

    update() {
        this.switch += 1;
        if (this.switch >= 30) {
            this.dir *= -1;
            this.switch = 0;
        }
        for (var i = 0; i < this.enemies.length; i++) {
            this.enemies[i].display();
        }
        for (var j = 0; j < this.materials.length; j++) {
            this.materials[j].display();
        }
        for (var k = 0; k < this.movePlatsH.length; k++) {
            this.movePlatsH[k].position.x += 5 * this.dir;
        }
        for (var l = 0; l < this.movePlatsV.length; l++) {
            this.movePlatsV[l].position.y += 5 * this.dir;
        }
        this.timer += 1;
    }

    destroy() {
        flagpoleGroup.removeSprites();
        groundGroup.removeSprites();
        enemyGroup.removeSprites();
        materialGroup.removeSprites();
        bob.remove();
    }
}