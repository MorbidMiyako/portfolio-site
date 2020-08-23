Portfolio Development
=====================

### Welcome to the github of my portfolio site
This ReadME aims to convey the development process of the portfolio site.  
It uses the blog.txt and notes.txt, which have been edited troughout the development.


Initial steps
-------------

While browsing around for potential jobs I noticed TDD was quite a common requirement.
This gave me the idea to build my portfolio site using a TDD development.  
I had worked with TDD during my study, this had been a few months at that point however.
Thus I would need to refresh my jest along the way too.


Design
------

First off, I had to create a design. This is a practical step in general,  
but especially when working with TDD is this important.
What elements do I want to show on my site, where will I present them,  
what are the key aspects?

This initial design was created using Figma, and can be found [here](https://www.figma.com/file/RZlWzB292mvj0SPqNtxBRJ/Portfolio-Design?node-id=0%3A1).
It shows some basic structures with a minimalistic design.
The design is mainly centered around telling about myself and my projects,  
something I'm not a big fan of, but is sadly important when competing with other applicants.
Just a black and white page would be too bare however, so I decided to add a gentle  
flair by having random stars being generated that would twinkle at random speeds.
(I feel that this turned out quite elegant)


Writing tests
-------------

After the simple design fase, I had a general idea of how my site would look,  
allowing me to get started on writing the tests needed for the site.
Well, the tests for the page, the helper functions I didn't end up writing tests for.
This was mainly due to not being sure how I was going to handle these functions  
and having the freedom to create freely.
However I did encorperate their effects on the page in the tests,  
mainly if stars are randomly generated.

In notes.txt I mainly wrote out the test structure, this did change over time,  
as can be seen when reading through the file. This was a very important step to  
allow for a proper development of the tests.
Here one can also find a mock html setup to allow me to reference during the writing of tests.

While writing tests I tried to minimise the amount of test-id's, ensuring a focus  
on the structure whilst checking for the presence of certain elements.
I also ran into some parent-child distributions I wasn't sure about, leading me  
to update and tweak the notes regularly, forcing me to envision the skeleton better.

Mosts of the tests were a breeze to write, however when trying to test for the  
presence of the scrollDownFunction on the downButton, I ran into an issue.
This function would be called anonymously on the button, and thus wouldn't show up.
I experimented for a bit using a mock button, and function to look for a solution regarding this.
Somewhere along the path of experimenting and researching I decided to console.log the element  
returned when grabbing the element. This reveiled somewhere in the returned object the function.
Next up, how to access this value... The key for it changed on every run, thus forced me  
to grab the array of object keys, and grab the n'th key, before using that key to gain access.
(This worked, until during development my desire to have it as an helper function ended up  
forcing me to throw a variable into the function, keeping me from comparing the file directly  
with te function. Resulting in the text getting hardcoded.)
This trick is something I ended up using later to access the element tag,  
and allow for more granular testing

After this main hurdle, it was pretty smooth sailing, and at the end  
I had 34 or so successfully failing tests.


Developing the page
-------------------

This was a pretty straight forward process, I messed around for a long time with the scrolling  
function, desiring a different scroll speed but being unable to change this effectively
Spend a while getting styling to an acceptable point, however this still isn't finished.


Next steps
----------

I will have to pause writing the tests side due to Lambda School soaking up a lot of time,  
having successfully gone trough Google's FooBar challenge, needing to start applying for jobs,  
adding features to my Portfolio, etc.

This means, despite enjoying the TDD, I will have to omit the writing tests when implementing  
new features for a while.

Planned features are:

- adaptive design -> ensure that site displays properly on phone

  - line height
  - picture after about
  - font size h2 and h3
  - first scroll button to bottom frontPage -> set display to relative

- replacing the picture with a more professional image
- adding symbols to show skills
- cv section
- contact me section

  - a PHP based backend
  - setting up an auto reply

- sideways scrolling project cards?
