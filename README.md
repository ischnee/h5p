# h5p
Extending the functionality of H5P content types

Here are my code snippets for extending the functionality of H5P contents. I'm using the H5P Wordpress plugin.

1) in show-solution-button-after-n-attempts.js has a script you can include on the page in order change the functionality of the "show solution" button. H5P only allows you to show or hide the button. This script allows you to set a number of attempts, after which students can view the solution. Before that number has been reached, the "show solution" button is visible, but grayed out and deactivated, so students can tell that it will be available. If they hover over the button a toottip says "Try again before viewing solution." (You can see in the code how to change that text if you want.) Also notice in the code it is for an H5P content with id 717. Just alter that for your content. This script works on a per-content basis. I personally don't use it globally. E.g., on some of my contents students can see the answer immediatley. 
