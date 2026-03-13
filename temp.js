function checkFreezing(temp){
    if (temp<=0){
        return "Freezing point";

    }else{
        return "Above freezing";

    }
}
console.log(checkFreezing(0));