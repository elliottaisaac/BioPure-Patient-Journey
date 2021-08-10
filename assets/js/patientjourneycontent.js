//Patient Journey page content

const fields = {
    headline: 
    "Our Method",

    introText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. All page content is populated from <a href='assets/js/patientjourneycontent.js' target='blank'>this file</a>",

    video: //must be mp4
    "assets/videos/_wave_.mp4",

    categories: [
        {
            title: "Organ Detox Support",
            icon: "assets/icons/Icon_Graphics_Organ_Detoxification_Support.png",
            headline1: "Organ Detox Support Headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            headline2: "Headline Two",
            paragraphText2: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            image: "assets/img/testing.png",
            sidebarText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop our store",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Binders",
            icon: "assets/icons/Icon_Graphics_Binders.png",
            headline1: "Binders headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            headline2: "Binders headline two ipsum",
            paragraphText2: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "assets/img/test2.png",
            sidebarText: "Binders lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Environmental Support",
            icon: "assets/icons/Icon_Graphics_Environmental_Support.png",
            headline1: "Environmental headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            headline2: "etox Support internal headli ipsum",
            paragraphText2: "R adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "assets/img/test3.png",
            sidebarText:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all Products",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Gastrointestinal Support",
            icon: "assets/icons/Icon_Graphics_Gastrointestinal_Support.png",
            headline1: "Gastrointestinal headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi, tempor incidiectetur adipiscing elit, sed do eiusmod tempor incidiectetur.",
            headline2: "Gastrointestinal",
            paragraphText2: "Sit amet ut enim ad minim <a href='#'>veniam</a>!<ul><li>Promotes Wellness</li><li>Promotes a Overall wellness and fabulous breathing. The second line tabs in to line up vertically</li><li>Supports Oral Dentine</li></ul>",
            image: "assets/img/test4.png",
            sidebarText: "Super cool lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop Gastrointestinal Support",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Immune Support",
            icon: "assets/icons/Icon_Graphics_Immune_Support.png",
            headline1: "Immune headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file.  sum dolor sit amet, consectetur adipiscing elit, t Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu",
            headline2: "Psum Dolor Sit ",
            paragraphText2: "Consectetur adipiscing elit. Ut enim ad minim veniam, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "assets/img/test5.png",
            sidebarText: "This is different Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Dental Support",
            icon: "assets/icons/Icon_Graphics_Dental_Support.png",
            headline1: "Ectetur adipiscing elit, sed do eiusmod tempor incidi",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. psum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  psum lorem ipsum dolor sit amet, consectetur adipiscing elit",
            headline2: "Do eiusmod tempor i",
            paragraphText2: "Ectetur adipiscing elit, sed do eiusmod tempor incidiectetur adipiscing elit, sed do eiusmod tempor incidiectetur adipiscing elit, sed do eiusmod tempor incidi",
            image: "assets/img/test6.png",
            sidebarText: "Ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop Dental Support Products",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Neurological Support",
            icon: "assets/icons/Icon_Graphics_Neurological_Support.png",
            headline1: "Neurological Neurological",
            paragraphText1:"I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Neurological adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            headline2: "Neurological two",
            paragraphText2: "Labore et dolore magna aliqua. Ut  psum lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image: "assets/img/test7.png",
            sidebarText: "Lorem different ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all Neurological Support",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Foundational Support",
            icon: "assets/icons/Icon_Graphics_Foundational_Support.png",
            headline1: "Consectetur adipiscing",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. etur adipiscing elit, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            headline2: "Foundational incididunt",
            paragraphText2: "Rem ipsum dolor sit amet, consectetur adipiscing elit, s",
            image: "assets/img/test8.jpg",
            sidebarText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        }
    ]
};

FillInitialContent();