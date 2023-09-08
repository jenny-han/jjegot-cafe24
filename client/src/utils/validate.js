
export function checkValidate(type, value) {
    let n_value = value
    // 한글확인 (K)
    if (type.indexOf('K') > -1) {
        n_value = value.replace(/[^가-힣]/ig, '')
    }
    // 영문확인 (E)
    if (type.indexOf('E') > -1) {
        n_value = value.replace(/[^A-Za-z]/ig, '')
    }
    // 숫자확인 (N)
    if (type.indexOf('N') > -1) {

    }
    // 특수문자 확인 (C)
    if (type.indexOf('C') > -1) {

    }

    return n_value

}