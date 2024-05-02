
import {
    Uploader
} from "./tools/uploader.js";

const upload = new Uploader();

const providers = [
    upload.uploadPomf2,
    upload.catbox,
    upload.tmpfiles,
    upload.fexnet,
    upload.fileDitch,
    upload.hostfile,
    upload.sazumi,
    upload.gofile,
    upload.filebin,
    upload.mediaUpload,
    upload.telegraPh,
    upload.nullbyte,
    upload.pixeldrain,
    upload.fileio,
    upload.Doodstream,
    upload.Uguu,
    upload.top4top,
    upload.transfersh,
    upload.ucarecdn,
    upload.Imgbb,
    upload.uploadToDiscdn,
    upload.uploadToKraken
];

/**
 * @param {Buffer} inp
 * @returns {Promise<string>}
 */
export default async function(inp) {
    for (let provider of providers) {
        try {
            return await provider(inp);
        } catch (e) {
            // Ignore errors and try the next provider
        }
    }
    throw new Error("All providers failed to upload.");
}
