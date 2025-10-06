class ApiResponse {
    constructer(statuscode, data, message = "succes") {
        this.statusCode = statusCode
        this.data = data
        this.success = statusCode < 400
    }
}