'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
}) // Dream Coder|
.move(-13)
.type('멋있는 ') //Amazing |Dream coder
.pause(1000)
.move(null, {to: 'END'}) //Amazing Dream Coder|
.delete() //|
.type('아이큐 500') //Front-end Engineer|
.pause(1000)
.delete() //| Engineer
.type('마라톤 세계 신기록을 가진 사람') //Back-end| Engineer
.pause(1000)
.delete() // | Engineer
.type('이 세상에서 가장 자유로운 사람') //Full-stack| Engineer
.pause(1000)
.move(17) //Full-stack Engineer|
.delete()
.go();