
import fetch from "node-fetch";
import crypto from "crypto";
import {
    FormData,
    Blob
} from "formdata-node";
import {
    fileTypeFromBuffer
} from "file-type";
import axios from "axios";
import fakeUserAgent from "fake-useragent";
import cheerio from "cheerio";
import ora from "ora";
import chalk from "chalk";

const referer = "https://krakenfiles.com";
const uloadUrlRegexStr = /url: "([^"]+)"/;
const randomBytes = crypto.randomBytes(5).toString("hex");

const createFormData = async (content, fieldName, ext) => {
    const {
        mime
    } = await fileTypeFromBuffer(content) || {};
    const blob = new Blob([content], {
        type: mime
    });
    const formData = new FormData();
    formData.append(fieldName, blob, `${randomBytes}.${ext}`);
    return formData;
};


const handleErrorResponse = (error, spinner) => {
    spinner.fail(chalk.red("Failed"));
    console.error(chalk.red("Error:"), error.message);
    throw error;
};

const createSpinner = (text) => ora({
    text,
    spinner: "moon"
});

class Uploader {
    async telegraPh(buffer) {
        const spinner = createSpinner("Uploading to Telegra.ph").start();

        try {
            const {
                ext
            } = await fileTypeFromBuffer(buffer);
            const form = await createFormData(buffer, "file", ext);
            const res = await fetch("https://telegra.ph/upload", {
                method: "POST",
                body: form
            });
            const img = await res.json();
            if (img.error) throw img.error;

            spinner.succeed(chalk.green("Uploaded to Telegra.ph"));
            return `https://telegra.ph${img[0].src}`;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async uploadPomf2(buffer) {
        const spinner = createSpinner("Uploading to Pomf2").start();

        try {
            const {
                ext
            } = await fileTypeFromBuffer(buffer) || {};
            const form = await createFormData(buffer, "files[]", ext);
            const res = await fetch("https://pomf2.lain.la/upload.php", {
                method: "POST",
                body: form
            });
            const json = await res.json();
            if (!json.success) throw json;

            spinner.succeed(chalk.green("Uploaded to Pomf2"));
            return json.files[0].url;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async ucarecdn(content) {
        const spinner = createSpinner("Uploading to Ucarecdn").start();

        try {
            const {
                ext
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            formData.append("UPLOADCARE_PUB_KEY", "demopublickey");
            formData.append("UPLOADCARE_STORE", "1");
            const response = await fetch("https://upload.uploadcare.com/base/", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            const {
                file
            } = await response.json();

            spinner.succeed(chalk.green("Uploaded to Ucarecdn"));
            return `https://ucarecdn.com/${file}/${randomBytes}.${ext}`;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async transfersh(content) {
        const {
            ext,
            mime
        } = await fileTypeFromBuffer(content) || {};
        const formData = await createFormData(content, "file", ext);
        const response = await fetch("https://transfer.sh/", {
            method: "POST",
            body: formData,
            headers: {
                "User-Agent": fakeUserAgent()
            },
        });
        return await response.text();
    }

    async top4top(buffer) {
        const spinner = createSpinner("Uploading to Top4Top").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(buffer) || {};
            const kyResponse = await fetch("https://top4top.io/index.php");
            const sid = await kyResponse.text();
            const idd = cheerio.load(sid)('form#uploader input').attr('value');

            const form = await createFormData(buffer, "file_0_", ext);
            form.append("submitr", "[ رفع الملفات ]");
            form.append("sid", idd);

            const uploadUrl = "https://top4top.io/index.php";
            const uploadOptions = {
                method: "POST",
                body: form
            };
            const uploadResponse = await fetch(uploadUrl, uploadOptions);
            const output = await uploadResponse.text();

            const informationSection = cheerio.load(output)('div.alert-warning ul.index_info li span');

            spinner.succeed(chalk.green("Uploaded to Top4Top"));

            const result = {
                imageThumbnailLink: informationSection.find('.thumb_div_tag a').attr('href'),
                directImageUrl: informationSection.find('.inputbody p.btitle:contains("رابط الصورة المباشر") + input').val(),
                deleteLink: informationSection.find('.inputbody p.btitle:contains("رابط الحذف") + input').val(),
            };
            return result.directImageUrl;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async tmpfiles(content) {
        const spinner = createSpinner("Uploading to Tmpfiles.org").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const response = await fetch("https://tmpfiles.org/api/v1/upload", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Tmpfiles.org"));
            const result = await response.json();
            return result.data.url;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async pixeldrain(content) {
        const spinner = createSpinner("Uploading to Pixeldrain").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            formData.append("anonymous", "False");
            const response = await fetch("https://pixeldrain.com/api/file", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            const {
                id
            } = await response.json();
            spinner.succeed(chalk.green("Uploaded to Pixeldrain"));
            return `https://pixeldrain.com/api/file/${id}`;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async nullbyte(content) {
        const spinner = createSpinner("Uploading to 0x0.st").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const response = await fetch("http://0x0.st", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to 0x0.st"));
            return await response.text();
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async uploadToKraken(content) {
        const spinner = createSpinner("Uploading to Krakenfiles.com").start();

        try {


            const {
                data
            } = await axios.get(referer);
            const uploadUrl = data.match(uloadUrlRegexStr)?.[1];
            if (!uploadUrl) throw new Error("No regex match.");
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "files[]", ext);
            const response = await axios.post(uploadUrl, formData, {
                headers: {
                    Referer: referer,
                    "Content-Type": "multipart/form-data"
                },
            });
            const {
                files
            } = response.data;
            const file = files[0];
            spinner.succeed(chalk.green("Uploaded to Krakenfiles.com"));
            const html = await (await fetch(referer + file.url)).text();
            const linkValue = cheerio.load(html)('#link1').val();
            return linkValue;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async hostfile(content) {
        const spinner = createSpinner("Uploading to Hostfile.my.id").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const response = await fetch("https://hostfile.my.id/api/upload", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Hostfile.my.id"));
            const base64Data = await response.text();
            const result = JSON.parse(base64Data);
            return result.url;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async gofile(content) {
        const spinner = createSpinner("Uploading to Gofile.io").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const getServer = await (await fetch("https://api.gofile.io/getServer", {
                method: "GET",
            })).json();
            const response = await fetch(`https://${getServer.data.server}.gofile.io/uploadFile`, {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Gofile.io"));
            const result = await response.json();
            return `https://${getServer.data.server}.gofile.io/download/${result.data.fileId}/${result.data.fileName}`
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async fileio(content) {
        const spinner = createSpinner("Uploading to File.io").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const response = await fetch("https://file.io", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to File.io"));
            const result = await response.json();
            return result.link;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async filebin(content) {
        const spinner = createSpinner("Uploading to Filebin.net").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const binId = crypto.randomBytes(8).toString("hex");
            const uploadURL = `https://filebin.net/${binId}/${randomBytes}.${ext}`;
            const response = await fetch(uploadURL, {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Filebin.net"));
            const output = await response.json();
            return `https://filebin.net/${output.bin.id}/${output.file.filename}`;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async fexnet(content) {
        const spinner = createSpinner("Uploading to Fex.net").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            formData.append("filename", `${randomBytes}.${ext}`);
            const response = await fetch("https://fexnet.zendesk.com/api/v2/uploads.json", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent(),
                    Authorization: `Basic ${btoa("as@fexnet.com/token:1RQO68P13pmqFXorJUKp4P")}`,
                },
            });
            spinner.succeed(chalk.green("Uploaded to Fex.net"));
            const result = await response.json();
            return result.upload.attachment.content_url
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async uploadToDiscdn(content) {
        const spinner = createSpinner("Uploading to Discord CDN").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "files[0]", ext);
            const res = await fetch("https://discord.com/api/v9/channels/1180731738176094228/messages", {
                method: "POST",
                headers: {
                    Authorization: "Bot MTE4MDcyODk4MjAzNjA0MTczOA.GtqzcS.grSeXjgylvsY_e7YxYi4acHKIrYTabaOnubOx8"
                },
                body: formData,
            });
            spinner.succeed(chalk.green("Uploaded to Discord CDN"));
            return await res.json();
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async catbox(content) {
        const spinner = createSpinner("Uploading to Catbox.moe").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "fileToUpload", ext);
            formData.append("reqtype", "fileupload");
            const response = await fetch("https://catbox.moe/user/api.php", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Catbox.moe"));
            return await response.text();
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async mediaUpload(content) {
        const spinner = createSpinner("Uploading to Media-upload.net").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "files[]", ext);
            const response = await fetch("https://media-upload.net/php/ajax_upload_file.php", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Media-upload.net"));
            const files = await response.json();
            return files.files[0].fileUrl;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async sazumi(content) {
        const spinner = createSpinner("Uploading to sazumi").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            const response = await fetch("https://cdn.sazumi.moe/upload", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to sazumi"));
            const basetextData = await response.text();
            return basetextData;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async Imgbb(content, exp, key) {
        const spinner = createSpinner("Uploading to Imgbb").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "image", ext);
            formData.append('key', key || 'c93b7d1d3f7a145263d4651c46ba55e4');
            formData.append('expiration', exp || 600);
            const response = await fetch("https://api.imgbb.com/1/upload", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Imgbb"));
            const files = await response.json();
            return files.data.url;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async fileDitch(content) {
        const spinner = createSpinner("Uploading to FileDitch").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "files[]", ext);
            const response = await fetch("https://up1.fileditch.com/upload.php", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to FileDitch"));
            const files = await response.json();
            return files.files[0].url;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async Uguu(content) {
        const spinner = createSpinner("Uploading to Uguu").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "files[]", ext);
            const response = await fetch("https://uguu.se/upload?output=json", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Uguu"));
            const files = await response.json();
            return files.files[0].url;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

    async Doodstream(content, key) {
        const spinner = createSpinner("Uploading to Doodstream").start();

        try {
            const {
                ext,
                mime
            } = await fileTypeFromBuffer(content) || {};
            const formData = await createFormData(content, "file", ext);
            formData.append('type', 'submit');
            formData.append('api_key', key || '13527p8pcv54of4yjeryk');
            const response = await fetch((await (await fetch('https://doodapi.com/api/upload/server?key=' + (key || '13527p8pcv54of4yjeryk'))).json()).result, {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": fakeUserAgent()
                },
            });
            spinner.succeed(chalk.green("Uploaded to Doodstream"));
            const files = await response.json();
            return files;
        } catch (error) {
            handleErrorResponse(error, spinner);
        }
    }

}

export {
    Uploader
};
