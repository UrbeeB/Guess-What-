class System{

    constructor(){}

    authenticate(actualCode, enteredCode){
        textSize(50);
        fill("black");
        text(quiz , 300, 300)

        if(actualCode === enteredCode.toUpperCase())
        return true
        else
        return false
        
    }

}