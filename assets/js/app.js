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
            showCursor: true,

            // Fadeout
            fadeOut: true,
            fadeOutDelay: 1000,

            // Strings
            strings: [
                'The day my life changed forever... the day I first saw you.',
                'I love you, not only for what you are, but for what I am when I am with you.',
                'I wish you to know that you have been the last dream of my soul.',
                'I want you today, tomorrow, next week and for the rest of my life.'
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
