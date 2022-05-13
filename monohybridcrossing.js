function MHCR (parent1, parent2) {
    let argsArray = []
        argsArray.push(parent1,parent2)
        for (element of argsArray) { 
          if ( element.length !== 2 || typeof element !== "string") {
            throw Error("invalid parent string format")
          }
        }
              let childrenArray = []
            for (i = 0 ; i < parent1.length ; i++) {
                for (j = 0; j < parent1.length; j++) {
                    childrenArray.push(parent1[i] + parent2[j])
                }
            }
          return childrenArray
  
}


console.log(MHCR("AA","Ab"))


// Expected output
// [ 'AA', 'Ab', 'AA', 'Ab' ]
        // parent1[0] + parent2[0]
        // parent1[0] + parent2[1]
        // parent1[1] + parent2[0]
        // parent1[1] + parent2[1]
        

       