import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface UploadFormProps {
  children: React.ReactNode;
  setUploadSource: Dispatch<SetStateAction<string>>;
  setUploadFile: Dispatch<SetStateAction<File | null>>;
  uploadSource: string;
}

const UploadForm = (props: UploadFormProps) => {
  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      file.readAsDataURL(e.target.files[0]);
      props.setUploadFile(e.target.files[0]);
      file.onload = (e) => {
        if (typeof e.target?.result === "string" && props.setUploadSource) {
          props.setUploadSource(e.target?.result);
        }
      };
    }
  };

  return (
    <form>
      <label htmlFor="upload-image">{props.children}</label>
      <input
        style={{ display: "none" }}
        id="upload-image"
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        onClick={(e) => {
          if (props.uploadSource) {
            e.preventDefault();
            props.setUploadSource("");
          }
        }}
      />
    </form>
  );
};

export default UploadForm;
