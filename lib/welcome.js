import Jimp from 'jimp';
import axios from 'axios';
import chalk from 'chalk';

class ImageEditor {
    constructor(bgImageURL, avatarURL, avatarX = 55, avatarY = 155, textX = 65, textY = 135) {
        this.bgImageURL = bgImageURL;
        this.avatarURL = avatarURL;
        this.avatarX = avatarX;
        this.avatarY = avatarY;
        this.textX = textX;
        this.textY = textY;
    }

    async asyncWelcome(Name, Text, WL) {
        try {
            const [bgImage, avatarImage] = await Promise.all([
                axios.get(this.bgImageURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data)),
                axios.get(this.avatarURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data))
            ]);

            bgImage.resize(735, 490);
            avatarImage.circle().resize(300, Jimp.AUTO);

            const centerX = this.avatarX || Math.floor((735 - avatarImage.getWidth() - 20) / 2);
            const centerY = this.avatarY || Math.floor((490 - avatarImage.getHeight()) / 2);
            bgImage.composite(avatarImage, centerX, centerY);
            const welcomeFont = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            const welcomeText = 'WELCOME ' + WL;
            const welcomeTextX = Math.floor((735 - Jimp.measureText(welcomeFont, welcomeText)) / 2);
            bgImage.print(welcomeFont, welcomeTextX, 20, welcomeText);

            const textDataWelcome = [{
                    l: 'Name:',
                    v: Name
                },
                {
                    l: 'Additional Info:',
                    v: Text
                },
                {
                    l: 'Introduction:',
                    v: 'Introduce key features and benefits.'
                },
                {
                    l: 'Greetings:',
                    v: 'Warm greetings to our new members.'
                }
            ];

            const textFont = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            const textStartY = this.textY || Math.floor((490 - textDataWelcome.length * 30) / 2);

            textDataWelcome.forEach(({
                l,
                v
            }, i) => {
                const textY = textStartY + i * 30;
                const labelWidth = Jimp.measureText(textFont, l);
                bgImage.print(textFont, centerX + 320, textY + 2, l, labelWidth, 490 - textY - 10);

                const valueWidth = Jimp.measureText(textFont, v);
                bgImage.print(textFont, centerX + 340 + labelWidth, textY + 2, v, 735 - (centerX + 340 + labelWidth), 490 - textY - 10);
            });

            return await bgImage.getBufferAsync(Jimp.AUTO);
        } catch (error) {
            this.handleError('asyncWelcome', error);
            throw error;
        }
    }

    async asyncLeave(Name, Text, WL) {
        try {
            const [bgImage, avatarImage] = await Promise.all([
                axios.get(this.bgImageURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data)),
                axios.get(this.avatarURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data))
            ]);

            bgImage.resize(735, 490);
            avatarImage.circle().resize(300, Jimp.AUTO);

            const centerX = this.avatarX || Math.floor((735 - avatarImage.getWidth() - 20) / 2);
            const centerY = this.avatarY || Math.floor((490 - avatarImage.getHeight()) / 2);
            bgImage.composite(avatarImage, centerX, centerY);
            const leaveFont = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            const leaveText = 'LEAVE ' + WL;
            const leaveTextX = Math.floor((735 - Jimp.measureText(leaveFont, leaveText)) / 2);
            bgImage.print(leaveFont, leaveTextX, 20, leaveText);

            const textDataLeave = [{
                    l: 'Farewell Message:',
                    v: Name
                },
                {
                    l: 'Final Note:',
                    v: Text
                },
                {
                    l: 'Closure:',
                    v: 'Closing remarks and best wishes.'
                },
                {
                    l: 'Memories Shared:',
                    v: 'Recall fond memories together.'
                }
            ];

            const textFont = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            const textStartY = this.textY || Math.floor((490 - textDataLeave.length * 30) / 2);

            textDataLeave.forEach(({
                l,
                v
            }, i) => {
                const textY = textStartY + i * 30;
                const labelWidth = Jimp.measureText(textFont, l);
                bgImage.print(textFont, centerX + 320, textY + 2, l, labelWidth, 490 - textY - 10);

                const valueWidth = Jimp.measureText(textFont, v);
                bgImage.print(textFont, centerX + 340 + labelWidth, textY + 2, v, 735 - (centerX + 340 + labelWidth), 490 - textY - 10);
            });

            return await bgImage.getBufferAsync(Jimp.AUTO);
        } catch (error) {
            this.handleError('asyncLeave', error);
            throw error;
        }
    }

    async asyncProfile(Name, Text, WL) {
        try {
            const [bgImage, avatarImage] = await Promise.all([
                axios.get(this.bgImageURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data)),
                axios.get(this.avatarURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data))
            ]);

            bgImage.resize(735, 490);
            avatarImage.circle().resize(300, Jimp.AUTO);

            const centerX = this.avatarX || Math.floor((735 - avatarImage.getWidth() - 20) / 2);
            const centerY = this.avatarY || Math.floor((490 - avatarImage.getHeight()) / 2);
            bgImage.composite(avatarImage, centerX, centerY);
            const profileFont = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            const profileText = 'PROFILE ' + WL;
            const profileTextX = Math.floor((735 - Jimp.measureText(profileFont, profileText)) / 2);
            bgImage.print(profileFont, profileTextX, 20, profileText);

            const textDataProfile = [{
                    l: 'Profile Updated On:',
                    v: Date.now()
                },
                {
                    l: 'Changes Made By:',
                    v: Name
                },
                {
                    l: 'Profile Highlights:',
                    v: Text
                },
                {
                    l: 'Contact Information:',
                    v: 'Updated contact details.'
                }
            ];

            const textFont = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            const textStartY = this.textY || Math.floor((490 - textDataProfile.length * 30) / 2);

            textDataProfile.forEach(({
                l,
                v
            }, i) => {
                const textY = textStartY + i * 30;
                const labelWidth = Jimp.measureText(textFont, l);
                bgImage.print(textFont, centerX + 320, textY + 2, l, labelWidth, 490 - textY - 10);

                const valueWidth = Jimp.measureText(textFont, v);
                bgImage.print(textFont, centerX + 340 + labelWidth, textY + 2, v, 735 - (centerX + 340 + labelWidth), 490 - textY - 10);
            });

            return await bgImage.getBufferAsync(Jimp.AUTO);
        } catch (error) {
            this.handleError('asyncProfile', error);
            throw error;
        }
    }

    async asyncVerify(Name, Text, WL) {
        try {
            const [bgImage, avatarImage] = await Promise.all([
                axios.get(this.bgImageURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data)),
                axios.get(this.avatarURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data))
            ]);

            bgImage.resize(735, 490);
            avatarImage.circle().resize(300, Jimp.AUTO);

            const centerX = this.avatarX || Math.floor((735 - avatarImage.getWidth() - 20) / 2);
            const centerY = this.avatarY || Math.floor((490 - avatarImage.getHeight()) / 2);
            bgImage.composite(avatarImage, centerX, centerY);
            const verifyFont = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            const verifyText = 'VERIFY ' + WL;
            const verifyTextX = Math.floor((735 - Jimp.measureText(verifyFont, verifyText)) / 2);
            bgImage.print(verifyFont, verifyTextX, 20, verifyText);

            const textDataVerify = [{
                    l: 'Verification Time:',
                    v: Date.now()
                },
                {
                    l: 'Verified By:',
                    v: Name
                },
                {
                    l: 'Verification Steps:',
                    v: Text
                },
                {
                    l: 'Security Check:',
                    v: 'Ensuring user authenticity.'
                }
            ];

            const textFont = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            const textStartY = this.textY || Math.floor((490 - textDataVerify.length * 30) / 2);

            textDataVerify.forEach(({
                l,
                v
            }, i) => {
                const textY = textStartY + i * 30;
                const labelWidth = Jimp.measureText(textFont, l);
                bgImage.print(textFont, centerX + 320, textY + 2, l, labelWidth, 490 - textY - 10);

                const valueWidth = Jimp.measureText(textFont, v);
                bgImage.print(textFont, centerX + 340 + labelWidth, textY + 2, v, 735 - (centerX + 340 + labelWidth), 490 - textY - 10);
            });

            return await bgImage.getBufferAsync(Jimp.AUTO);
        } catch (error) {
            this.handleError('asyncVerify', error);
            throw error;
        }
    }

    async asyncOtp(Cods, Succ) {
        try {
            const [bgImage, avatarImage] = await Promise.all([
                axios.get(this.bgImageURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data)),
                axios.get(this.avatarURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data))
            ]);

            bgImage.resize(735, 490);
            avatarImage.circle().resize(300, Jimp.AUTO);

            const centerX = this.avatarX || Math.floor((735 - avatarImage.getWidth() - 20) / 2);
            const centerY = this.avatarY || Math.floor((490 - avatarImage.getHeight()) / 2);
            bgImage.composite(avatarImage, centerX, centerY);
            const otpFont = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            const otpText = 'otp TO: NIGGA';
            const otpTextX = Math.floor((735 - Jimp.measureText(otpFont, otpText)) / 2);
            bgImage.print(otpFont, otpTextX, 20, otpText);

            const textDataOtp = [{
                    l: 'OTP:',
                    v: Cods
                },
                {
                    l: 'Verified By:',
                    v: Succ
                },
                {
                    l: 'Authentication:',
                    v: 'Confirming user identity.'
                },
                {
                    l: 'Secure Access:',
                    v: 'Enhancing account security.'
                }
            ];

            const textFont = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            const textStartY = this.textY || Math.floor((490 - textDataOtp.length * 30) / 2);

            textDataOtp.forEach(({
                l,
                v
            }, i) => {
                const textY = textStartY + i * 30;
                const labelWidth = Jimp.measureText(textFont, l);
                bgImage.print(textFont, centerX + 320, textY + 2, l, labelWidth, 490 - textY - 10);

                const valueWidth = Jimp.measureText(textFont, v);
                bgImage.print(textFont, centerX + 340 + labelWidth, textY + 2, v, 735 - (centerX + 340 + labelWidth), 490 - textY - 10);
            });

            return await bgImage.getBufferAsync(Jimp.AUTO);
        } catch (error) {
            this.handleError('asyncOtp', error);
            throw error;
        }
    }

    async asyncSuccess() {
        try {
            const [bgImage, avatarImage] = await Promise.all([
                axios.get(this.bgImageURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data)),
                axios.get(this.avatarURL, {
                    responseType: 'arraybuffer'
                }).then(res => Jimp.read(res.data))
            ]);

            bgImage.resize(735, 490);
            avatarImage.circle().resize(300, Jimp.AUTO);

            const centerX = this.avatarX || Math.floor((735 - avatarImage.getWidth() - 20) / 2);
            const centerY = this.avatarY || Math.floor((490 - avatarImage.getHeight()) / 2);
            bgImage.composite(avatarImage, centerX, centerY);
            const successFont = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            const successText = 'success TO: NIGGA';
            const successTextX = Math.floor((735 - Jimp.measureText(successFont, successText)) / 2);
            bgImage.print(successFont, successTextX, 20, successText);

            const textDataSuccess = [{
                    l: 'Success Time:',
                    v: '2024-02-01 16:00:00'
                },
                {
                    l: 'Performed By:',
                    v: 'System'
                },
                {
                    l: 'Success Metrics:',
                    v: 'Highlight successful outcomes.'
                },
                {
                    l: 'Next Steps:',
                    v: 'Guidance on what comes next.'
                }
            ];

            const textFont = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            const textStartY = this.textY || Math.floor((490 - textDataSuccess.length * 30) / 2);

            textDataSuccess.forEach(({
                l,
                v
            }, i) => {
                const textY = textStartY + i * 30;
                const labelWidth = Jimp.measureText(textFont, l);
                bgImage.print(textFont, centerX + 320, textY + 2, l, labelWidth, 490 - textY - 10);

                const valueWidth = Jimp.measureText(textFont, v);
                bgImage.print(textFont, centerX + 340 + labelWidth, textY + 2, v, 735 - (centerX + 340 + labelWidth), 490 - textY - 10);
            });

            return await bgImage.getBufferAsync(Jimp.AUTO);
        } catch (error) {
            this.handleError('asyncSuccess', error);
            throw error;
        }
    }

    handleError(funcName, error) {
        console.error(chalk.red(`Error in ${funcName}: ${error.message}`));
    }
}

export {
    ImageEditor
};

function WelcomeLeave(Profile, Name, Text, WL) {
    let themeList = [{
            "bi": "https://source.unsplash.com/LeG68PrXA6Y/500x500",
            "h": "500",
            "w": "500",
            "a.tp": "rect",
            "a.x": "250",
            "a.y": "250",
            "a.w": "393",
            "a.h": "225",
            "a.c": "#ffffff",
            "a.rx": "20",
            "a.ry": "20",
            "b.tp": "rect",
            "b.x": "250",
            "b.y": "305",
            "b.w": "393",
            "b.h": "1",
            "b.c": "#cccccc",
            "b.rx": "20",
            "b.ry": "20",
            "c.tp": "textbox",
            "c.x": "244",
            "c.y": "239",
            "c.w": "301",
            "c.h": "28",
            "c.t": WL + " " + Name,
            "c.fs": "25",
            "c.lh": "1",
            "c.fw": "700",
            "c.ff": "Inter",
            "c.maxHeight": "25",
            "d.tp": "textbox",
            "d.x": "250",
            "d.y": "335",
            "d.w": "288",
            "d.h": "23",
            "d.c": "#555",
            "d.t": "Ok",
            "d.ta": "center",
            "d.fs": "20",
            "d.lh": "1",
            "d.fw": "400",
            "d.ff": "Inter",
            "d.maxHeight": "30",
            "e.tp": "image",
            "e.x": "115",
            "e.y": "190",
            "e.w": "128",
            "e.h": "128",
            "e.sx": "0.35",
            "e.sy": "0.35",
            "e.circleFrame": "true",
            "e.src": Profile,
            "f.tp": "textbox",
            "f.x": "244",
            "f.y": "271",
            "f.w": "301",
            "f.h": "23",
            "f.t": Text,
            "f.fs": "20",
            "f.lh": "1",
            "f.fw": "400",
            "f.ff": "Inter",
            "f.maxHeight": "20"
        },
        {
            "bg": "#ffffff",
            "h": "1200",
            "w": "1200",
            "a.tp": "textbox",
            "a.x": "599",
            "a.y": "645",
            "a.w": "1075",
            "a.h": "180",
            "a.c": "#000000",
            "a.t": Text,
            "a.fs": "48",
            "a.fw": "400",
            "a.ff": "Inter",
            "a.maxHeight": "656",
            "a.padding": "20",
            "b.tp": "textbox",
            "b.x": "191",
            "b.y": "443",
            "b.w": "454",
            "b.h": "40",
            "b.c": "#2f3338",
            "b.t": Name,
            "b.fs": "35",
            "b.cs": "80",
            "b.fw": "400",
            "b.ff": "Roboto",
            "b.ox": "left",
            "b.maxHeight": "40",
            "b.padding": "20",
            "c.tp": "textbox",
            "c.x": "191",
            "c.y": "483",
            "c.w": "238",
            "c.h": "34",
            "c.c": "#2f3338",
            "c.t": getCurrentTime(),
            "c.fs": "30",
            "c.fw": "400",
            "c.ff": "Open Sans",
            "c.ox": "left",
            "c.maxHeight": "26",
            "c.padding": "20",
            "d.tp": "image",
            "d.x": "57",
            "d.y": "461",
            "d.w": "400",
            "d.h": "400",
            "d.sx": "0.28",
            "d.sy": "0.28",
            "d.ox": "left",
            "d.rx": "200",
            "d.ry": "200",
            "d.src": Profile,
            "e.tp": "image",
            "e.x": "675",
            "e.y": "443",
            "e.w": "1200",
            "e.h": "1200",
            "e.sx": "0.03",
            "e.sy": "0.03",
            "e.src": "https://ucarecdn.com/c9a27f10-31ac-4660-9dc0-16ac8f374359//-/preview/-/quality/smart/"
        },
        {
            "bi": "https://source.unsplash.com/UF_wwDxI6uk/1200x630",
            "h": "630",
            "w": "1200",
            "a.tp": "rect",
            "a.x": "600",
            "a.y": "315",
            "a.w": "751",
            "a.h": "313",
            "a.c": "#ffffff",
            "a.rx": "20",
            "a.ry": "20",
            "b.tp": "textbox",
            "b.x": "594",
            "b.y": "306",
            "b.w": "603",
            "b.h": "45",
            "b.t": WL + " " + Name,
            "b.fs": "40",
            "b.lh": "1",
            "b.fw": "400",
            "b.ff": "Inter",
            "b.oy": "top",
            "b.maxHeight": "40",
            "c.tp": "textbox",
            "c.x": "765",
            "c.y": "243",
            "c.w": "288",
            "c.h": "40",
            "c.c": "#555",
            "c.t": getCurrentTime(),
            "c.ta": "right",
            "c.fs": "35",
            "c.lh": "1",
            "c.fw": "400",
            "c.ff": "Inter",
            "c.maxHeight": "30",
            "d.tp": "textbox",
            "d.x": "600",
            "d.y": "397",
            "d.w": "613",
            "d.h": "34",
            "d.t": "Thanks for " + WL,
            "d.fs": "30",
            "d.lh": "1",
            "d.fw": "400",
            "d.ff": "Inter",
            "d.maxHeight": "20",
            "e.tp": "image",
            "e.x": "324",
            "e.y": "245",
            "e.w": "128",
            "e.h": "128",
            "e.sx": "0.5",
            "e.sy": "0.5",
            "e.src": "https://logo.clearbit.com/twitter.com"
        },
        {
            "bi": "https://source.unsplash.com/eICUFSeirc0/1200x630",
            "bi.o": "NaN",
            "h": "630",
            "w": "1200",
            "a.tp": "rect",
            "a.ox": "center",
            "a.oy": "center",
            "a.x": "600",
            "a.y": "315",
            "a.w": "1024",
            "a.h": "380",
            "a.fill": "white",
            "a.sc": "gray",
            "a.o": "0.8",
            "a.rx": "20",
            "a.ry": "20",
            "b.tp": "textbox",
            "b.ox": "center",
            "b.oy": "center",
            "b.x": "600",
            "b.y": "388",
            "b.w": "905",
            "b.h": "149",
            "b.t": Text,
            "b.ta": "left",
            "b.fs": "44",
            "b.lh": "1",
            "b.fw": "400",
            "b.ff": "Inter",
            "b.fontStyle": "normal",
            "b.maxHeight": "150",
            "c.tp": "textbox",
            "c.ox": "center",
            "c.oy": "bottom",
            "c.x": "484",
            "c.y": "223",
            "c.w": "438",
            "c.h": "40",
            "c.fill": "#000000",
            "c.t": Name,
            "c.ta": "left",
            "c.fs": "35",
            "c.lh": "1",
            "c.fw": "400",
            "c.ff": "Poppins",
            "c.fontStyle": "normal",
            "c.maxHeight": "35",
            "d.tp": "image",
            "d.x": "147",
            "d.y": "181",
            "d.w": "400",
            "d.h": "400",
            "d.sx": "0.23",
            "d.sy": "0.23",
            "d.ox": "left",
            "d.oy": "top",
            "d.src": "https://unavatar.io/twitter/naval",
            "d.circleFrame": "true",
            "e.tp": "textbox",
            "e.ox": "center",
            "e.oy": "bottom",
            "e.x": "484",
            "e.y": "260",
            "e.w": "438",
            "e.h": "29",
            "e.fill": "#806b6b",
            "e.t": getCurrentTime(),
            "e.ta": "left",
            "e.fs": "26",
            "e.lh": "1",
            "e.fw": "400",
            "e.ff": "Open Sans",
            "e.fontStyle": "normal",
            "e.maxHeight": "26",
            "f.tp": "image",
            "f.x": "983",
            "f.y": "183",
            "f.w": "397",
            "f.h": "321",
            "f.sx": "0.2",
            "f.sy": "0.2",
            "f.ox": "left",
            "f.oy": "top",
            "f.src": "https://i.imgur.com/sT9QS7U.png"
        }
    ]

    let apiURL = 'https://img.bruzu.com/?' + new URLSearchParams(themeList[Math.floor(Math.random() * themeList.length)]).toString();
    return apiURL;
}

function OTP(Profile, Cods, Succ) {
    let themeList = [{
        "a.tp": "rect",
        "a.x": "250",
        "a.y": "250",
        "a.w": "393",
        "a.h": "225",
        "a.c": "#ffffff",
        "a.rx": "20",
        "a.ry": "20",
        "b.tp": "rect",
        "b.x": "250",
        "b.y": "305",
        "b.w": "393",
        "b.h": "1",
        "b.c": "#cccccc",
        "b.rx": "20",
        "b.ry": "20",
        "c.tp": "textbox",
        "c.x": "244",
        "c.y": "239",
        "c.w": "301",
        "c.h": "28",
        "c.t": Cods,
        "c.ta": "center",
        "c.fs": "80",
        "c.lh": "1",
        "c.fw": "700",
        "c.ff": "Inter",
        "c.maxHeight": "25",
        "d.tp": "textbox",
        "d.x": "250",
        "d.y": "335",
        "d.w": "288",
        "d.h": "23",
        "d.c": "#555",
        "d.t": "Ok",
        "d.ta": "center",
        "d.fs": "20",
        "d.lh": "1",
        "d.fw": "400",
        "d.ff": "Inter",
        "d.maxHeight": "30",
        "e.tp": "image",
        "e.x": "115",
        "e.y": "190",
        "e.w": "128",
        "e.h": "128",
        "e.sx": "0.35",
        "e.sy": "0.35",
        "e.circleFrame": "true",
        "e.src": Profile,
        "f.tp": "textbox",
        "f.x": "244",
        "f.y": "271",
        "f.w": "301",
        "f.h": "23",
        "f.t": Succ,
        "f.ta": "center",
        "f.fs": "40",
        "f.lh": "1",
        "f.fw": "400",
        "f.ff": "Inter",
        "f.maxHeight": "20"
    }]

    let apiURL = 'https://img.bruzu.com/?' + new URLSearchParams(themeList[Math.floor(Math.random() * themeList.length)]).toString();
    return apiURL;
}

function ImageCanvas(Profile, Name, Text) {
    let themeList = [{
        "bi": "https://source.unsplash.com/eICUFSeirc0/1200x630",
        "bi.o": "NaN",
        "h": "630",
        "w": "1200",
        "a.tp": "rect",
        "a.ox": "center",
        "a.oy": "center",
        "a.x": "600",
        "a.y": "315",
        "a.w": "1024",
        "a.h": "380",
        "a.fill": "white",
        "a.sc": "gray",
        "a.o": "0.8",
        "a.rx": "20",
        "a.ry": "20",
        "b.tp": "textbox",
        "b.ox": "center",
        "b.oy": "center",
        "b.x": "600",
        "b.y": "388",
        "b.w": "905",
        "b.h": "149",
        "b.t": Text,
        "b.ta": "center",
        "b.fs": "60",
        "b.lh": "1",
        "b.fw": "400",
        "b.ff": "Inter",
        "b.fontStyle": "normal",
        "b.maxHeight": "150",
        "c.tp": "textbox",
        "c.ox": "center",
        "c.oy": "bottom",
        "c.x": "484",
        "c.y": "223",
        "c.w": "438",
        "c.h": "40",
        "c.fill": "#000000",
        "c.t": Name,
        "c.ta": "left",
        "c.fs": "40",
        "c.lh": "1",
        "c.fw": "400",
        "c.ff": "Poppins",
        "c.fontStyle": "normal",
        "c.maxHeight": "35",
        "d.tp": "image",
        "d.x": "147",
        "d.y": "181",
        "d.w": "400",
        "d.h": "400",
        "d.sx": "0.23",
        "d.sy": "0.23",
        "d.ox": "left",
        "d.oy": "top",
        "d.src": "https://unavatar.io/twitter/naval",
        "d.circleFrame": "true",
        "e.tp": "textbox",
        "e.ox": "center",
        "e.oy": "bottom",
        "e.x": "484",
        "e.y": "260",
        "e.w": "438",
        "e.h": "29",
        "e.fill": "#806b6b",
        "e.t": getCurrentTime(),
        "e.ta": "left",
        "e.fs": "30",
        "e.lh": "1",
        "e.fw": "400",
        "e.ff": "Open Sans",
        "e.fontStyle": "normal",
        "e.maxHeight": "26",
        "f.tp": "image",
        "f.x": "983",
        "f.y": "183",
        "f.w": "397",
        "f.h": "321",
        "f.sx": "0.2",
        "f.sy": "0.2",
        "f.ox": "left",
        "f.oy": "top",
        "f.src": "https://i.imgur.com/sT9QS7U.png"
    }]

    let apiURL = 'https://img.bruzu.com/?' + new URLSearchParams(themeList[0]).toString();
    return apiURL;
}

function getCurrentTime() {
    const options = {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    const now = new Date().toLocaleString('id-ID', options);
    return now;
}

export {
    WelcomeLeave,
    OTP,
    ImageCanvas
}