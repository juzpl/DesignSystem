import { DropzoneOptions, FileRejection } from 'react-dropzone';
import * as React from "react";
interface UploadProps extends Omit<DropzoneOptions, "onDrop"> {
    value?: File[];
    onValueChange?: (files: File[]) => void;
    onDropAccepted?: (files: File[]) => void;
    onDropRejected?: (rejections: FileRejection[]) => void;
    className?: string;
    hint?: React.ReactNode;
    label?: React.ReactNode;
    showFileList?: boolean;
}
declare const Upload: React.ForwardRefExoticComponent<UploadProps & React.RefAttributes<HTMLDivElement>>;
export { Upload };
export type { UploadProps };
