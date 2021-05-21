function convertFarhToCelsius (farhTemp){
    if (typeof farhTemp === "number" || typeof farhTemp ==="string"){
        let C = ((farhTemp - 32) * 5) /9;
        console.log(C.toFixed(4));
        //console.log(`${farhTemp} is a valid number but a/an ${typeof farhTemp} type.`)
    }
    
    if (typeof farhTemp === "boolean") {
        console.log(`${farhTemp} is not a valid number but a/an ${typeof farhTemp} type.`);
        return `${farhTemp} is not a valid number but a/an ${typeof farhTemp} type.`;
    }

    if(Array.isArray(farhTemp)) {
        console.log(`[${farhTemp}] is not a valid number but a/an array type.`);
        return `[${farhTemp}] is not a valid number but a/an array type.`;
    }  else if (typeof farhTemp === "object") {
        console.log(
            `${JSON.stringify(
                farhTemp            
            )}  is not a valid number but a/an ${typeof farhTemp} type.`
        );
        return `${JSON.stringify(
            farhTemp            
        )}  is not a valid number but a/an ${typeof farhTemp} type.`;
    }

    let anyNumber = Number(farhTemp);
    if (Number.isNaN(anyNumber)) {
        console.log(`${farhTemp} is not a valid number but a/an ${typeof farhTemp} type.`);
        return `${farhTemp} is not a valid number but a/an ${typeof farhTemp} type.`;
    }
}

convertFarhToCelsius("0");

