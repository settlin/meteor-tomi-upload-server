This is a server interface package for the [Meteor Uploads](https://github.com/tomitrescak/meteor-uploads)

[![Meteor Icon](http://icon.meteor.com/package/tomi:upload-server)](https://atmospherejs.com/tomi/upload-server)

For the full documentation and instructions on use go to [https://github.com/tomitrescak/meteor-uploads](https://github.com/tomitrescak/meteor-uploads).

### Watermarking example
Watermarking settings are stored on a per image version basis:
eg.
```
UploadServer.init({
	......
	imageVersions: {
		standard: {
			width: null,
			height: 1080,
			watermark: {
				logo: {
					path: (Meteor.settings.private || {}).uploadDir + "/logo/pure.png",
					width: 200,
					height: 120
				},
				text: "Settlin",
			},
		},
		thumb100: {
			width: 100,
			height: 100,
		}
	},
	acceptFileTypes: /.(jpe?g|png)$/i,
});
```

####Version Info

* 1.4.0 - Watermark support
* 1.3.1 - Now with windows support (thanks to onbjerg)
* 1.3.X - Documentation is maintained [here]((https://github.com/tomitrescak/meteor-uploads)):
* 1.2.4 - Removed bug that was not detecting safe file names
* 1.2.0 - Improved serving of files. Now with correct headers. Replaced static middleware.
* 1.1.1 - Removed bug when getFileName was not specified
* 1.1.0 - Auto creation of directories, fileInfo is now passed instead of fileName
* 1.0.1 - Possibility to add data into DBon server
* 1.0.0 - Initial Version with hot code reload
