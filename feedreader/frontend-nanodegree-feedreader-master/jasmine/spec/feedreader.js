/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed */
          it('URL defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
          /*Our task here, is to loop over each feed item and ensure that its “URL” property is defined AND not empty.*/
           it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
          /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
       describe('The menu', function() {   
    /*  Now, the first TODO for this suite is to test that the toggle-able menu is in an initial state of “hidden”*/
          it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
            // ref: https://api.jquery.com/hasclass/
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          /* Our goal here is to test whether or not the menu toggles on and off.*/
           it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            
             menu.click();
             expect(body.classList.contains('menu-hidden')).toBe(true);
            
        });
  });
    /* TODO: Write a new test suite named "Initial Entries" */
         /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
       describe('Initial Entries', function() {
          /*check that the feed container contains at least a single entry element.*/
         beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('completes work', function() {
            const feed = document.querySelectorAll('.feed .entry');
            expect(feed.length > 0).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
          /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         describe('New Feed Selection', function() {
           const feed = document.querySelector('.feed');
           const firstFeed =[];
          /*we’ll use done to handle the async within beforeEach. The difference between this test and the one before, is we need to load 2 different feeds and check that the feed content changes*/
         beforeEach(function(done) {
            loadFeed(0);
                Array.from(feed.children).forEach(function(entry) {
                  firstFeed.push(entry.innerText);
                });
                loadFeed(1, done);
            });
        
         it('content changes', function() {
            Array.from(feed.children).forEach(function(entry, index) {
           console.log(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
            expect(entry.innerText === firstFeed[index]).toBe(false);
            expect(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
         });
        });
   });
}());