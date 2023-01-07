// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list1 = [];
    let list2 = [];
    
    while(l1){
        list1.push(l1.val);
        l1 = l1.next
    }
    while(l2){
        list2.push(l2.val);
        l2 = l2.next;
    }
    
    list1 = list1.reverse();
    list2 = list2.reverse();

    let num1 = BigInt(list1.join(''));
    let num2 = BigInt(list2.join(''));

    console.log(num1)

    let sum = num1 + num2;
  
    let result = String(sum).split("").map((num)=>{
      return Number(num)
    });

    result =  result.reverse();
    let node = arrayToList(result, result.length)
    return node;
    
}

 function insert( root, item)
{
    var temp = new ListNode(item, null);
    var ptr;
    
    if (root == null)
        root = temp;
    else 
    {
        ptr = root;
        while (ptr.next != null)
            ptr = ptr.next;
        ptr.next = temp;
        
        
    }
    
    return root;
}

function arrayToList( arr, n)
{
    var root = null;
    for (let i = 0; i < n; i++)
        root = insert(root, arr[i]);
    return root;
}

