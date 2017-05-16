app.directive('imGoogleAuth',function()
{
	return {
		restrict: 'E',
		scope: true,
		templateUrl: '/templates/core/ang/templates/googleLogin.html',
		link: function(scope,element,attrs)
		{
			scope.onClick = function()
			{
				var params = {
				'clientid': '119418628600-rdimbrg6324ia9sdoe6rbhl4hdlrd9ll.apps.googleusercontent.com',
				'cookiepolicy': 'single_host_origin',
				'callback': function(result)
				{
					if(result['status']['signed_in'])
					{
						var request = gapi.client.plus.people.get (
							{
								'userId':'me'
							}
						);
						var getToken = gapi.auth.getToken();
						request.execute(function(resp){
							scope.$apply(function(){
								scope.gmail.username = resp.displayName;
								scope.gmail.email = resp.emails[0].value;
								scope.gmail.g_image = resp.image.url;
							});
						});
					}
				},
				'approvalprompt': 'force',
				'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
			};
			gapi.auth.signIn(params);
			//scope.gmail.access_token=gapi.auth.getToken().access_token;
			}
		}
	}
})