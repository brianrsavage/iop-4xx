# iop-4xx
PRG-160-3485 JavaScript repo for the iop-4xx project 
	
GitHub Pages: https://mr0786280.github.io/iop-4xx/
	
Development Site: https://iop-4xx.catchthesehands.net

Preparing project for development

	- added html5-boilerplate_v6.1.0 files to application
	
<---->

From here on out, the boilerplate has been deleted because we are not using it.

<---->

iop version 400.0

	added base code to the index.html and added initial JavaScript to the app.js file.
	
	delete the boilerplate since we're not using it anymore.

	
iop version 401.0

	created the appData object
	moved the title & tag line variables into appData and refactord the initializeApplcation function
	
iop version 401.1

	added bootstrap to the index.html
	added a DOM injection of the progress bar in the app.js
	created the displayPB function in the app.js
	
iop version 402.0

	added style.css and linked in index.html
	added login form function and call after progress bar is completed
	added minimal validateLogin function to check for blank strings

iop version 403.0

	index.html
	
		updated all hrefs/links to passive protocol
		moved style sheet link below animate and bootstrap to allow for custom styles to override all
		
	style.css
	
		added styles for application interface - sidebar, wrapper, navigation, etc.

	app.js
	
		added the applicationUserInterface function which defines the application user interface
		added the buildMenu function which returns the navigation menu and will increase in dynamic navigation building
		added the buildMain function which returns the primary content area and will evolve to return content dynamically
		replaced document write with call to applicationUserInterface function in the validateLogin function
		added the linkClicked function which is called by click events on anchor elements and returns dynamically driven results

iop 404.0

	index.html

		removed comments and cleaned code
		added script tag for quotes.js file
	
	style.css
	
		modified the sidebar and sidebar ul classes
		added the auth and infoDiv classes

	app.js
	
		added the quotArr sort to the initializeApplication function
		modified buildMenu function to dynamically build the menu from the array
		modified linkClicked function to dynamically populate main content with array content
	
	added the assets/data/quotes.js file
