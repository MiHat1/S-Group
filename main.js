var promise = new Promise((resolve,reject) => {
    let pL = false; 
    if  (pL === true ) resolve("dau")
    else reject("truot")

})

promise
    .then(function(data) {
        console.log("success")
    }) 
    .catch(function (error){
        console.log("error ", error)
    })
    .finally(function() {
        console.log("Done")
    })
    
//promise : 3 truong hop
//    1.pending: chi cho khi k thuc thi cai gi
//    2.fullfilled: thanh cong 
//    3.reject:  

//promise : chain
//    1. : 