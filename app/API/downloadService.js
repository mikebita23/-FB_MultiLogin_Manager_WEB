
application.service('downloadService',['$http', function($http) {
    
    /// 
    this.downloadGet = function download() {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/file/get`,          
        });
    };
    
    
    this.downloadName = function download(name) {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/file/getLink/${name}`,          
        });
    };
    ///
    this.downloadToken = function download(token) {
        return $http({
            method : 'GET',
            url: `${API_URL_D}/file/getFile/${token}`,          
        });
    };


}]);