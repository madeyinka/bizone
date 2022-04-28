export const rand = (len) => {
    if (!len) len = 3
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let text = ""
    for ( let i=0; i < len; i++) 
        text += charset.charAt(Math.floor(Math.random() * charset.length))
        return text
}