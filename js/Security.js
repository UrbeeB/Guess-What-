class Security {

    constructor(){

        this.hint1 = createElement('h2');
        this.hint2 = createElement('h2');
        this.hint3 = createElement('h2');

        this.access1 = createInput("Answer...");
        this.access1.position(520, 650);
        this.access1.style('background', '#E93737'); 
        this.access1.style('color', 'white');
        this.access1.style('font-size', '40px'); 

        this.button1 = createButton('Submit');
        this.button1.position(690, 725);
        this.button1.style('background', 'white');
        this.button1.style('color', '#E93737'); 
        this.button1.style('font-size', '30px');

        this.access2 = createInput("Answer...");
        this.access2.position(520, 650);
        this.access2.style('background', 'black'); 
        this.access2.style('color', 'white');
        this.access2.style('font-size', '40px');
        this.access2.hide();

        this.button2 = createButton('Submit');
        this.button2.position(690, 725);
        this.button2.style('background', 'white'); 
        this.button2.style('color', 'black');
        this.button2.style('font-size', '30px'); 
        this.button2.hide();

        this.access3 = createInput("Answer...");
        this.access3.position(520, 650);
        this.access3.style('background', '#F5BF68'); 
        this.access3.style('font-size', '40px');
        this.access3.hide(); 

        this.button3 = createButton('Submit');
        this.button3.position(690, 725);
        this.button3.style('background', 'black');
        this.button3.style('color', '#F5BF68');
        this.button3.style('font-size', '30px'); 
        this.button3.hide();
    }

    display(){
        
     if(countdown == 0){
           
        background(bg2); 

        this.access1.hide();
        this.access2.hide();
        this.access3.hide();

        this.button1.hide();
        this.button2.hide();
        this.button3.hide();

        this.hint1.hide();
        this.hint2.hide();
        this.hint3.hide();

         fill(0);
         textSize(80);
         text("Time's Up!", 550, 650);
     }
    
     this.hint1.html("One of the strongest Indian brands in the stationery industry!");
     this.hint1.position(345, 560);
     this.hint1.style('font-size', '30px');
      
        this.button1.mousePressed(() => {
           
            if(system.authenticate(accessCode1, this.access1.value())){
  
                countdown = 15;
                rightAns.play();
                this.button1.hide();
                this.access1.hide();
                this.hint1.hide();
                score++;
                this.access2.show();
                this.button2.show();
               
                logo2 = createSprite(750, 300);
                logo2.addImage(logo2Img);
                logo2.scale = 0.3;
                
                this.hint2.html("India's first dairy-free, trans-fat free & cholesterol-free vegan ice cream brand!");
                this.hint2.position(205, 560);
                this.hint2.style('font-size', '30px');   

            }

            else{
                wrongAns.play();
            }
           
           
        });
       
        this.button2.mousePressed(() => {
           
            if(system.authenticate(accessCode2, this.access2.value())){
               
                countdown = 15;
                rightAns.play();
                this.button2.hide();
                this.access2.hide();
                this.hint2.hide();
                score++;
                this.access3.show();
                this.button3.show();
           
                logo3 = createSprite(750, 300);
                logo3.addImage(logo3Img);
                logo3.scale = 0.3;
                
                this.hint3.html("India's largest and most influential luxury designer brand!");
                this.hint3.position(360, 560);
                this.hint3.style('font-size', '30px');
            }

            else{
                wrongAns.play();
            }
           
        });

        this.button3.mousePressed(() => {
           
            if(system.authenticate(accessCode3, this.access3.value())){

                countdown = 0;
                
                win.play();

                this.button3.hide();
                this.access3.hide();
                this.hint3.hide();
                score++;
                
                logo1.visible = false;
                logo2.visible = false;
                logo3.visible = false;
            }

            else{
                wrongAns.play();
            }

        });

       
    
    }
}