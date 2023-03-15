/**
 * @package    APP
 * @subpackage Template JS core
 * @since      1.0.0
 * @version    1.0.0
 * @author     Ehsan Zare <darksider.legend@gmail.com>
 * @link       https://code-path.com
 * @copyright  (c) 2022 Code-path web developing team
 */

let App = (function()
{
    // THIS object
    let self = {};

    // Define selectors
    self.selectors = {
        // Hello
        hello: '.section-hello',
        helloType: '#hello-type',

        // Dorna
        dorna: '.section-dorna',
        dornaType: '#type-area'
    };

    // Define classes
    self.classes = {
        glow: 'glow',
        fadeIn: 'fadeIn',
        fadeOut: 'fadeOut',
    };

    /**
     * Handle hello section
     * @return void
     */
    self.hello = function()
    {
        // Get elements
        const helloEL = document.querySelector(self.selectors.hello);
        const typeEL  = document.querySelector(self.selectors.helloType);
        const dornaEL = document.querySelector(self.selectors.dorna);

        // Define strings
        const strings = [];

        // Fill strings array
        strings.push(typeEL.innerHTML);

        // Empty selector text
        typeEL.innerHTML = '';

        // Call Typed
        const typed = new Typed(self.selectors.helloType, {
            fadeOut: true,
            strings: strings,
            typeSpeed: 110,
            startDelay: 100,

            onBegin: (_self) => {
                typeEL.classList.add(self.classes.fadeIn);
            },

            onComplete: (_self) => {
                setTimeout(() => {
                    typeEL.classList.add(self.classes.glow);

                    setTimeout(() => {
                        // Next step
                        self.dorna();
                    }, 4000);
                }, 2000);
            }
        });
    }

    /**
     * Handle dorna section
     * @return void
     */
    self.dorna = function()
    {
        // Get elements
        const helloEL = document.querySelector(self.selectors.hello);
        const dornaEL = document.querySelector(self.selectors.dorna);

        // Swap classes
        helloEL.classList.add(self.classes.fadeOut);
        dornaEL.classList.add(self.classes.fadeIn);

        // Call particles
        particlesInit();

        // Call Typed
        const typed = new Typed(self.selectors.dornaType, {
            loop: true,
            shuffle: true,
            typeSpeed: 100,
            startDelay: 500,
            showCursor: false,

            // Fadeout
            fadeOut: true,
            fadeOutDelay: 1000,

            // Strings
            strings: [
                'I wish I was your mirror, so that I could look at you every morning.',
                'Sweet dreams… I hope I’m in them.',
                'I really like our friendship, especially when we make out.',
                'If I had a candy bar for every time I thought of you, I would be fat.',
                'I wish I was your teddy bear.',
                'It’s said that nothing lasts forever. Will you be my nothing?',
                'Hi, I’m Mr. Right. Someone said you were looking for me?',
                'I guess your parents are bakers, because they made you such a cutie pie!'
            ]
        });
    }

    /**
     * Initialize actions
     * @return void
     */
    self.init = function()
    {
        self.hello();
    }

    /**
     * Fire whole thing
     * @return void
     */
    self.__start__ = function()
    {
        // Call APP
        self.init();
    }

    return self;
}());

// Call APP when content is loaded
(document.readyState !== 'loading') ? App.__start__() : document.addEventListener('DOMContentLoaded', function() { App.__start__(); });
