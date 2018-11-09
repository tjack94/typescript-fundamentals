//TODO: Implement hexToRgb
export function hexToRgb(hex: string) : {r: number, g: number, b: number}{
    const arr= hex.split('')
    if(hex.length === 3){
        var first = arr[0]
        var second = arr[1]
        var third = arr[2]
        return hexToRgb(`${first}${first}${second}${second}${third}${third}`)
    }
    else{
    var first=arr[0] + arr[1]
    var second= arr[2] + arr[3]
    var third = arr[4] + arr[5]
    }
    const rgb = {r: parseInt(first, 16), g: parseInt(second, 16), b: parseInt(third, 16)}
 
    return rgb
}

//TODO: Implement rgbToHex
export function rgbToHex(first: number, second: number, third: number): string{
    if(first === 0){
       return first.toString(16) + first.toString(16) + second.toString(16) + third.toString(16)
    }
    if(second=== 0){
        return first.toString(16) + second.toString(16) + second.toString(16)+ third.toString(16)
    }
    if(third === 0){
        first.toString(16) + second.toString(16) + third.toString(16) + third.toString(16)
    }
  const hex = first.toString(16) + second.toString(16) + third.toString(16)
    return hex
}
console.log(hexToRgb('7cff00'))
console.log(rgbToHex(0, 255, 0))
