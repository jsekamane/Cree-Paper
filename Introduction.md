__*Cree*: A modern toolbox for readymade economic experiments__
By Jonas K. Sekamane

[Abstract]

# Introduction
This paper introduces a modern toolbox for readymade economic experiments called *Cree*. *Cree* takes advantage of the great advances in technology, in particular the new types of devices (smart-phones, tablets) and the availability of general-purpose software libraries. 

The great merit of *Cree* is the very few restrictions it places on the equipment facing subjects. Few restrictions clear the way for much broader participation, strengthening the external validity of any experiment. *Cree* experiments can be run in a myriad of settings, including laboratories, classrooms, workplaces, or over the Internet. With *Cree* the computer-equipped laboratory is no longer a necessity -- lowering the overall costs of conducting economic experiments. The researcher can still choose to provide subjects with devices, but can just as easily let subjects use their own devices. 

*Cree* is build using web technologies. Content is structured using the markup language *HTML*. The layout and presentation across different screen sizes is archived with the style sheet language *CSS*. And all logic is constructed using the programming language *JavaScript*. All web browsers interpret these three cornerstone languages and render pages accordingly. Subjects participate in *Cree* experiments though a web browser. Because *Cree* is fundamentally native to the web browser, it avoids many of the restrictions, that other toolboxes suffer from.

In addition there is a vibrant ecosystem surrounding these web technologies. *Cree* exploits this ecosystem and takes full advantage of the software libraries that exist. This provides stability, flexibility, and makes it easy to set up and run economic experiments. Fore instances, *Cree* uses the software library *Node.js* to run the server and handle networking issues. The asynchronous architecture of *Node.js* gives *Cree* the flexibility to handle real-time events, which many other toolboxes is not capable of. With this flexibility *Cree* can run everything, from simple dictator game experiments, to highly sophisticated auction experiments. [Another example is the software library *Bootstrap* developed by Twitter, which is used to scale pages so they match the respective screen sizes. Thereby bypassing the need to design separate versions for respectively smart-phones, tablets and computers. In sum,] *Cree* is a framework that provides the tools to handle many of the otherwise mundane, complicated or manually tasks required to set up and run economic experiments.

Technological advances opens up a new path, however the path is not without obstacles. This paper explores and discusses how to handle these obstacles. Some obstacles are alleviated through appropriate technical design of the toolbox. Other obstacles require actions taken by the researcher.

[Broad structure the rest of paper]
* Requirements
* Running experiments (recruitment, stability, inattention, payment)
* Expected results of experiment
* Designing experiments
* Conclusion