// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks>42){
        return blocks-42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start<destination){
        return (destination-start)*264;
    }else{
        return (start-destination)*264;
    }
}

function calculatesFarePrice(start, destination){
    const travelDistance = distanceTravelledInFeet(start, destination);
    
    if (travelDistance<=400){
        return 0;
    }else if (travelDistance>400 && travelDistance<=2000){
        return (travelDistance-400)*0.02;
    }else if (travelDistance>2000 && travelDistance<=2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}