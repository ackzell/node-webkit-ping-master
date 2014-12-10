node-webkit-ping-master
=======================

Utility to track remote hosts. Based on node-webkit, angularjs, bootstrap and who knows what other library / framework will be thrown in the future.

Update (12.09.14)
-----------------

Some of the basic functionality has been added to the application.
Now is a good time to be considered somewhat useful.

**Features**

* Ability to add _IP addresses_ and a label (_alias_) to identify them.
* All IP addresses will be pinged at once, using global settings, which are:
  * **Cicle Frequency(ms)**. How often a new ping will be triggered by the application to ping all the supplied IPs.
  * **Timeout (ms)**. How long to wait until retrying the ping or failing it.
  * **Attempts**. How many retries will be made.
* Once the IPs have been added, they can also be removed from the list.

**To Do:**

* Improve the UI:
  * Use custom styling to look less 'bootstrap'.
  * Use less space on the controls for the settings and to add new IPs to the list.
  * Create a logo for the application.
  * Add views or modal dialogs to present the settings.

* Add features:
  * The ability to edit (inline would be better) the IPs once they have been added.
  * Persist current list of IPs.
  * Load a list from a file (maybe a ``.json`` or something similar).
* Nice to have(s):
  * Auto-update the application.
  * Create an installer (Windows).
  * Port it to Mac and Linux.
