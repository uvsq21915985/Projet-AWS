class LogRequestMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log the cookies and headers
        print("Request Cookies:", request.COOKIES)  # This will log the cookies
        print("Request Headers:", request.headers)  # This will log the headers
        response = self.get_response(request)
        return response
