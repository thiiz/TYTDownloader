interface Address {
    address: string;
}

export function youtube_parser(urlObj: Address) {
    console.log(urlObj.address)
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = urlObj.address.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
}
