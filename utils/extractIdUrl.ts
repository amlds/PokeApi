export const extractIdUrl = (url: string): number => {
    const urlParts = url.split("/");
    return parseInt(urlParts[urlParts.length - 2]);
}