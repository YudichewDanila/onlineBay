export const useValidater = (parm_regexp) => {
    return function (value: string) {
        const regexp = parm_regexp;
        return regexp.test(value);
    }
}