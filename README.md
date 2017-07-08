OpenMRS modules
==========================

Setting up the HLB modules used in the Administration section.

Description
-----------
This is a bundle of 2 modules created in order to improve the Billing process in the Hospital Leon Becerra

Building from Source
--------------------


Installation
------------
1. First follow the instructions available in this link [Setting up the OpenMRS SDK](https://wiki.openmrs.org/display/docs/OpenMRS+SDK)
2. You just have to create a server and link each of these modules to that server, this can be done using the command replacing *server-id* with the server you already setup in the previous step.
**mvn openmrs-sdk:watch -DserverId=server-id** 
3. Use the OpenMRS Administration > Manage Modules screen to upload and install the .omod file everytime you want to test a module.


Deploy Instructions
------------
1. Check out the docker file.
