export default ($httpProvider) => {
    $httpProvider.defaults.headers.common = {
        'Accept': 'application/json;odata=verbose'
    };
}