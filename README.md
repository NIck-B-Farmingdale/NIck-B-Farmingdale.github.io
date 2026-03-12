# NIck-B-Farmingdale.github.io
My personal portfolio web page.


DEVELOPMENT TIMELINE:
3/7/26:
1. Added basic framework for my site: color scheme, nav-bar (non-functional), and some accordion page elements. I also made it so the + on each accordion element turns into a - sign when the relevant content is already being displayed

2. Added headshot to home page and used "border-radius" css to turn the picture into a circle and "object-fit: cover;" to make sure the image doesn't stretch at all.

3. Added foundational html for the projects section. I went with a "project card" system which will showcase screenshots of my projects along with descriptions of each held inside one card element.

4. Project section is now functional and significantly more fleshed out, with screen space optimizations made for desktop where the project cards will display in two columns instead of the one on mobile.

3/8/26:
1. Updated the projects section so that any odd projects will appear centered in the second column on desktop instead of leaving an empty space this was mainly done by switching projects-grid from display: grid to flex and applying justify-content: center;. The syntax makes less sense now but the projects section looks much better in my opinion.

2. I implemented some javascript which makes it so when a user scrolls down the the nav-bar will disappear, and show up again when they scroll up. I did this by adding an event listener that would constantly check when someone was scrolling up or down, and if they were, it would add the navbar to a new CSS class named .top-bar--hidden which essentialy subtracts the entire vertical height from the navbar, pulling it off-screen. The event listener also helps assess whether the cursor has even moved at all, and if not, remembers so that the navbar position behaves in a consistent way.

3/9/26:
1. I added my skills section in the form of "skill pills" with a spacong system similar to that of the project cards where odd or "orphan" pills will be centered.

4. spruced up my skills section a bit with a hover effect and color changes.

3/10/26:
1. Added my full hobbies section by putting my top 5 of games, music, and movies. I did this by either putting them each on a track system(mobile) or having a full 5 column layout for each interest (desktop) i used a card system similar to the project cards, but with much more emphasis on the image portion.

3/11/26:
1. Added footer containing my "Contact Me" section. It includes three buttons for different social network accounts (Email, Github, LinkedIn). It also contains a short blurb telling people that I'm currently looking for entry-level IT positions as well as a small copyright mark.

2. Added a sectionn unique to me: a section including resources that i frequently use in my personal life. I created 4 resource cards which themselves act as buttons, taking you to the resource when clicked. I also made it so that, when viewed on desktop, the resource cards will show up as a 2x2 grid.

--------END OF TIMELINE - PROJECT FINISHED--------


