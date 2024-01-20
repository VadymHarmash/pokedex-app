const COLORS = {
    grassColor: '#158a34' + '80',
    fireColor: '#bf0b0b' + '80',
    poisonColor: '#570a61' + '80',
    waterColor: '#090970' + '80',
    flyingColor: '#4c94e0' + '80',
    bugColor: '#471d1d' + '80',
    electricColor: '#dbcd4d' + '80',
    groundColor: '#000000' + '80',
    fairyColor: '#d92bb0' + '80',
    fightingColor: '#c46812' + '80',
    psychicColor: '#0d4210' + '80',
    rockColor: '#4a4a4a' + '80',
    steelColor: '#858585' + '80',
    iceColor: '#79d7fc' + '80',
    normalColor: '#758237' + '80',
    dragonColor: '#9e9100' + '80',
}

export const getColorForType = (type) => {
    return type === 'grass' ? COLORS.grassColor : 
        type === 'fire' ? COLORS.fireColor :
        type === 'poison' ? COLORS.poisonColor :
        type === 'water' ? COLORS.waterColor :
        type === 'flying' ? COLORS.flyingColor :
        type === 'bug' ? COLORS.bugColor :
        type === 'electric' ? COLORS.electricColor :
        type === 'ground' ? COLORS.groundColor :
        type === 'fairy' ? COLORS.fairyColor : 
        type === 'fighting' ? COLORS.fightingColor :
        type === 'psychic' ? COLORS.psychicColor :
        type === 'rock' ? COLORS.rockColor : 
        type === 'steel' ? COLORS.steelColor :
        type === 'ice' ? COLORS.iceColor : 
        type === 'normal' ? COLORS.normalColor :
        type === 'dragon' ? COLORS.dragonColor : null
}