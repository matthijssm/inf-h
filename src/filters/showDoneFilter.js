export default () => {
    return function (input, isOn) {
        return input.filter(function (item) {
            return isOn ? true : !item.done;
        })

    }
}