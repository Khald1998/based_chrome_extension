(() => {
    //arg = 1000000 
    //sar = 10721.36
    //S/A = 93.2379
    
    let OGCostCollection = document.getElementsByClassName("discount_original_price");
    let FinalCostCollection = document.getElementsByClassName("discount_final_price");
    let GPPCostCollection = document.getElementsByClassName("game_purchase_price");

    let ListOGCost = []; // Create an empty array to store trimmed text content
    let ListFinalCost = []; // Create an empty array to store trimmed text content
    let ListGPPCost = []; // Create an empty array to store trimmed text content

    for (let i = 0; i < OGCostCollection.length; i++) {
        let trimmedText = OGCostCollection[i].textContent.trim();
        ListOGCost.push(trimmedText);
        let flag = trimmedText.toLowerCase();
        if (flag!= "free" && flag!= "free to play") {
            OGCostCollection[i].textContent = "0 SR";//(flag[0]=="Your")?"Your Price: 0 SR":"0 SR";
        }

    }

    for (let i = 0; i < FinalCostCollection.length; i++) {
        let trimmedText = FinalCostCollection[i].textContent.trim();
        ListFinalCost.push(trimmedText);
        let flag = trimmedText.toLowerCase();
        if (flag!= "free" && flag!= "free to play") {
            FinalCostCollection[i].textContent = "0 SR";//(flag[0]=="Your")?"Your Price: 0 SR":"0 SR";
        }

    }

    for (let i = 0; i < GPPCostCollection.length; i++) {
        let trimmedText = GPPCostCollection[i].textContent.trim();
        ListGPPCost.push(trimmedText);
        let flag = trimmedText.toLowerCase();
        if (flag!= "free" && flag!= "free to play") {
            
            GPPCostCollection[i].textContent = "0 SR";//(flag[0]=="Your")?"Your Price: 0 SR":"0 SR";
        }

    }

    console.log("ListOGCost " + ListOGCost.length);
    console.log("ListFinalCost " + ListFinalCost.length);
    console.log("ListOGCost " + ListOGCost);
    console.log("ListFinalCost " + ListFinalCost);



})();

