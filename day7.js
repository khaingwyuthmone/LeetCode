// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_tank  = 0;
    let current_tank = 0;
    let start = 0;
    for(let i=0 ; i<gas.length ; i++){
        total_tank += gas[i]-cost[i];
        current_tank += gas[i]-cost[i];
        if(current_tank < 0){
            start = i+1;
            current_tank =0;
        }
    
    }
    if(total_tank >=0){
        return start;
    }else{
        return -1;
    }
   
};
