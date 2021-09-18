window.onload = ()=>{

    const WIDTH = 300;
    const HEIGHT = 600;

    const X_LENGHT = 10;
    const Y_LENGTH = 20;

    const BLOCK_SIZE = 30;
    const BLOCK_LENGTH = 4;

    const DELETE_COUNT = 2;

    const FONT = '60px monospace';

    const BLOCKS = [
        [
            [
                [0,0,0,0,],
                [1,1,0,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,1,1,0,],
                [0,1,0,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [1,1,0,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,1,1,0,],
                [0,1,0,0,],
                [0,0,0,0,],
            ],
        ],
        [
            [
                [0,0,0,0,],
                [1,1,1,1,],
                [0,0,0,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,0,1,0,],
                [0,0,1,0,],
                [0,0,1,0,],
            ],
            [
                [0,0,0,0,],
                [1,1,1,1,],
                [0,0,0,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,0,1,0,],
                [0,0,1,0,],
                [0,0,1,0,],
            ],
        ],
        [
            [
                [0,0,0,0,],
                [0,0,1,0,],
                [1,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,1,0,0,],
                [0,1,0,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [0,1,1,1,],
                [0,1,0,0,],
                [0,0,0,0,],
            ],
            [
                [0,1,1,0,],
                [0,0,1,0,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
        ],
        [
            [
                [0,0,0,0,],
                [0,1,1,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [0,1,1,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [0,1,1,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [0,1,1,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
        ],
        [
            [
                [0,0,0,0,],
                [0,0,1,1,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,1,0,0,],
                [0,1,1,0,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [0,0,1,1,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,1,0,0,],
                [0,1,1,0,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
        ],
        [
            [
                [0,0,0,0,],
                [0,1,0,0,],
                [0,1,1,1,],
                [0,0,0,0,],
            ],
            [
                [0,1,1,0,],
                [0,1,0,0,],
                [0,1,0,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [1,1,1,0,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,0,1,0,],
                [0,1,1,0,],
                [0,0,0,0,],
            ],
        ],
        [
            [
                [0,0,0,0,],
                [0,1,1,1,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,1,1,0,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
            [
                [0,0,0,0,],
                [0,0,1,0,],
                [0,1,1,1,],
                [0,0,0,0,],
            ],
            [
                [0,0,1,0,],
                [0,0,1,1,],
                [0,0,1,0,],
                [0,0,0,0,],
            ],
        ],
    ];

    const COLOR = [
        'white',
        'red',
        'blue',
        'purple',
        'green',
        'orange',
        'yellow',
        'gray',
        'black',
    ];

    let field = new Array(Y_LENGTH);

    let canvas;
    let g;
    let div;

    let p;
    let count = 0;

    let score = 0;

    let types;
    let change = 0;

    let t_x = 3;
    let t_y = 0;

    let main;
    let gameOrverFlag;
    let keyLock = true;

    let textFlag = false;

    const createDescription = ()=>{
        const text = new String('Enterキーでゲームを始める');
        const h1 = document.createElement('h1');
        h1.textContent = text;
        document.body.appendChild( h1 );
    };

    const createCanvas = ()=>{
        const ca = document.createElement('canvas');
        document.body.appendChild(ca);
    };

    const createScore = ()=>{
        const d = document.createElement('div');
        document.body.appendChild(d);
    }

    const getCanvas = ()=>{
        canvas = document.querySelector('canvas');
        g = canvas.getContext('2d');

        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.background = 'black';

        g.strokeStyle = 'white';
        g.strokeRect(0,0,WIDTH,HEIGHT);
    };

    const getScore = ()=>{
        div = document.querySelector('div');
    }

    const init = ()=>{
        g.font = FONT;
        for(let y=0;y<Y_LENGTH;y++){
            field[y] = new Array(X_LENGHT);
            for(let x=0;x<X_LENGHT;x++){
                field[y][x] = 0;
            };
        };
        gameOrverFlag = false;
        keyLock = false;
        shuffle();
    };

    const shuffle = ()=>{
        types = Math.floor( Math.random() * BLOCKS.length );
        change = Math.floor( Math.random() * BLOCK_LENGTH );
    };

    const drawField = ()=>{
        g.clearRect(0,0,WIDTH,HEIGHT);
        for(let y=0;y<Y_LENGTH;y++){
            for(let x=0;x<X_LENGHT;x++){
                g.fillStyle = COLOR[ field[y][x] ];
                const bx = BLOCK_SIZE * x;
                const by = BLOCK_SIZE * y;
                g.strokeRect(bx,by,BLOCK_SIZE,BLOCK_SIZE);
                if( !field[y][x] ) continue;
                g.fillRect(bx,by,BLOCK_SIZE,BLOCK_SIZE);
            };
        };
        g.fillStyle = 'yellow';
        if(textFlag) g.fillText('Congratulations!',10,300,1000);
        textFlag = false;
    };

    const drawBlock = ()=>{
        g.fillStyle = COLOR[types + 1];
        for(let y=0;y<BLOCK_LENGTH;y++){
            for(let x=0;x<BLOCK_LENGTH;x++){
                if( !BLOCKS[types][change][y][x] ) continue;
                const bx = BLOCK_SIZE * (x + t_x);
                const by = BLOCK_SIZE * (y + t_y);

                g.fillRect(bx,by,BLOCK_SIZE,BLOCK_SIZE);
                g.strokeRect(bx,by,BLOCK_SIZE,BLOCK_SIZE);
            };
        };
    };

    const drawScore = ()=>{
        div.innerHTML = 'スコア' + score + '点';
    };

    const check = (_x,_y,_n)=>{
        if( _n == undefined ) _n = BLOCKS[types][change];
        for(let y=0;y<BLOCK_LENGTH;y++){
            for(let x=0;x<BLOCK_LENGTH;x++){

                if( !_n[y][x] ) continue;

                const nx = x + _x + t_x;
                const ny = y + _y + t_y;

                if( ny < 0 || nx < 0 ||
                    ny >= Y_LENGTH || nx >= X_LENGHT ||
                    field[ny][nx]
                ) return false;
            };
        };
        return true;
    };

    const drop = ()=>{
        if( check(0,1) ){
            t_y ++;
        }else{
            fix();
            LineCheck();
            gameSet();
            shuffle();
            t_y = 0;
            t_x = 3;
        };
        drawField();
        drawBlock();
        drawScore();
    };

    const fix = ()=>{
        for(let y=0;y<BLOCK_LENGTH;y++){
            for(let x=0;x<BLOCK_LENGTH;x++){
                if( !BLOCKS[types][change][y][x] ) continue; 
                if( t_y <= 0 ) gameOrverFlag = true;
                field[y + t_y][x + t_x] = types + 1;
            };
        };
    };

    const Timer = ()=>{
        const str = new String('秒');
        p.textContent = count + str;
    };

    const LineCheck = ()=>{
        let scoreLength = 0;
        for(let y=0;y<Y_LENGTH;y++){
            let flag = true;
            for(let x=0;x<X_LENGHT;x++){
                if( !field[y][x] ){
                    flag = false;
                    break;
                };
            };
            if( flag ){
                score += 10;
                scoreLength ++;
                if( drawDelete(y) ){
                    for(let ny=y;ny>0;ny--){
                        for(let x=0;x<X_LENGHT;x++){
                            field[ny][x] = field[ny - 1][x];
                        };
                    };
                };
            };
        };
        scoreCheck(scoreLength);
    };

    const scoreCheck = (l)=>{
        if(l == 4){
            score += 60;
            textFlag = true;
        };
    };

    const drawDelete = (dy)=>{
        let temp = new Array(X_LENGHT);
        for(let x=0;x<X_LENGHT;x++){
            temp[x] = field[dy][x]
        };

        for(let i=0;i<DELETE_COUNT;i++){
            setTimeout(()=>{ del(dy,COLOR[ 0 ]) },100 * ( i + 2 ));
            setTimeout(()=>{ del(dy,COLOR[ 8 ]) },100 * ( i + 3 ));
        };

        return true;

    };

    const del = (dy,c)=>{
        g.fillStyle = c;

        const y = BLOCK_SIZE * dy;

        g.fillRect(0,y,BLOCK_SIZE * X_LENGHT,BLOCK_SIZE);
    };

    const gameSet = ()=>{
        if( gameOrverFlag ){
            alert('ゲームオーバー');
            clearInterval(main);
            canvas.remove();
            div.remove();
            //p.remove();
            keyLock = true;
            createDescription();
        };
    };

    createDescription();

    window.addEventListener('keydown',(e)=>{

        const KEY = e.keyCode;

        switch( KEY ){
            case 37:
                if( check(-1,0) ) t_x --;
                break;
            case 39:
                if( check(1,0) ) t_x ++;
                break;
            case 40:
                if( check(0,1) ) t_y ++;
                break;
            case 16:
                while(true){
                    if( check(0,1) ) t_y ++;
                    else break;
                };
                break;
            case 32:
                if( change < 3 ){
                    const temp = BLOCKS[types][change + 1];
                    if( check(0,0,temp) ) change ++;
                }else{
                    if( check(0,0,BLOCKS[types][0]) ) change = 0;
                };
                break;
        };

        drawField();
        drawBlock();

    });

    window.onkeydown = (e)=>{
        const KEY = e.keyCode;
        if(KEY == 13 && keyLock){
            document.querySelector('h1').remove();
            createCanvas();
            createScore();
            //createCount();
            getCanvas();
            getScore();
            //getCount();
            //Timer();
            init();
            drawField();
            drawBlock();
            main = setInterval(drop,500);
        };
    };

};