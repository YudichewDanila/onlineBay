import Manifacturs from "@/types/Manifacturs";
export function priceFilter({ fromValuePrice, setFromValuePrice, beforeValuePrice, setBeforeValuePrice }) {
    if (fromValuePrice === '' || beforeValuePrice === '') {
        setFromValuePrice(0);
        setBeforeValuePrice(999999);
        return `0-999999`;
    }
    if (Number(fromValuePrice) <= Number(beforeValuePrice)) {
        return `${fromValuePrice}-${beforeValuePrice}`;
    }
    else if (Number(fromValuePrice) > Number(beforeValuePrice)) {
        setBeforeValuePrice(fromValuePrice);
        setFromValuePrice(0);
        return `0-${fromValuePrice}`;
    }
}

export function ManifactursFilter(manifacturs: Manifacturs["manifacturs"]): string {
    let text = '';
    const filterManifactur = manifacturs.filter(manifacturs => manifacturs.checked == true);
    for (let i = 0; i < filterManifactur.length; i++) {
        if (i < filterManifactur.length - 1) {
            text += filterManifactur[i].NameManufacturers + '-';
        }
        else {
            text += filterManifactur[i].NameManufacturers;
        }
    }
    return text;
}