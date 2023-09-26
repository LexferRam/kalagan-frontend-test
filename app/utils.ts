export function convertMiliseconds(miliseconds: number) {
    var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

    total_seconds = Math.floor(miliseconds / 1000);
    total_minutes = Math.floor(total_seconds / 60);
    total_hours = Math.floor(total_minutes / 60);

    days = Math.floor(total_hours / 24);
    hours = total_hours % 24;
    minutes = total_minutes % 60;
    seconds = total_seconds % 60;

    return `${hours}h:${minutes}m`
}

export function convertDateFormat(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}