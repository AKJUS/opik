/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const Attachment: core.serialization.ObjectSchema<serializers.Attachment.Raw, OpikApi.Attachment> =
    core.serialization.object({
        link: core.serialization.string().optional(),
        fileName: core.serialization.property("file_name", core.serialization.string()),
        fileSize: core.serialization.property("file_size", core.serialization.number()),
        mimeType: core.serialization.property("mime_type", core.serialization.string()),
    });

export declare namespace Attachment {
    export interface Raw {
        link?: string | null;
        file_name: string;
        file_size: number;
        mime_type: string;
    }
}
