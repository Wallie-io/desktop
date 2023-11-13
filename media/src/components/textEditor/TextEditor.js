// import React, { useState } from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { CKEditorChangeEventData } from "@ckeditor/ckeditor5-react";
// import { Box, Button, Container, Input, Textarea, VStack } from '@chakra-ui/react';

// interface CKEditorComponentProps {
//   onImageInsert: (url: string) => void;
// }

// const TextEditor: React.FC<CKEditorComponentProps> = () => {
//   const [editorData, setEditorData] = useState<string>('');
//   const [imageUrl, setImageUrl] = useState<string>('');

//   const handleEditorDataChange = (
//     event: CKEditorChangeEventData,
//      editor: ClassicEditor ) => {
//     event.preventDefault();
//     const data = editor.getData();
//     setEditorData(data);
//   };

//   function onImageInsert(updatedData: string) {
//     const newData = updatedData + `\n![Image Description](${imageUrl})`;
//     setEditorData(newData);
//   }

//   const insertImage = () => {
//     const imageUrl = prompt('Enter image URL:');
//     if (imageUrl) {
//       const imageElement = `<img src="${imageUrl}" alt="Image" />`;
//       const updatedData = editorData + imageElement;
//       setEditorData(updatedData);
//       onImageInsert(updatedData); // You can pass the updated data back to the parent component.
//     }
//   };

//   return (
//     <Container maxW="container.md">
//     <Box>
//       <h1>CKEditor Example</h1>
//       <form>
//         <Input type="text" placeholder="title" />
//         <Input
//           type="text"
//           placeholder="Image URL"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//         />
//         <Button onClick={insertImage}>Insert Image</Button>
//         <CKEditor
//           editor={ClassicEditor}
//           data={editorData}
//           onChange={handleEditorDataChange}
//           onReady={(editor) => {
//             console.log("Editor is ready to use", editor);
//             return editor;
//           }}
//           onBlur={(editor) => {
//             console.log(editor, "Blur");
//           }}
//           onFocus={(editor) => {
//             console.log(editor, "Focus");
//           }}
//         />
//         <VStack mt={4}>
//           <Textarea value={editorData} readOnly />
//         </VStack>
//       </form>
//     </Box>
//   </Container>
//   );
// };

// export default TextEditor;

// import React, { useState, useRef, useEffect } from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { CKEditorChangeEventData } from '@ckeditor/ckeditor5-react';
// import { Box, Button, Container, Input, VStack, Image } from '@chakra-ui/react';

// interface CKEditorComponentProps {
//   onImageInsert: (url: string) => void;
// }

// const TextEditor: React.FC<CKEditorComponentProps> = ({ onImageInsert }) => {
//   const [editorData, setEditorData] = useState<string>('');
//   const [imageUrl, setImageUrl] = useState<string>('');
//   const editor = useRef<CKEditor | null>(null);

//   const handleEditorDataChange = (
//     event: CKEditorChangeEventData,
//     editor: ClassicEditor
//   ) => {
//     const data = editor.getData();
//     setEditorData(data);
//   };

//   const insertImage = () => {
//     const imageUrl = prompt('Enter image URL:');
//     if (imageUrl && editor.current) {
//       // Insert the image at the current cursor position
//       editor.current.execute('imageInsert', { source: imageUrl });
//     }
//   };

//   useEffect(() => {
//     if (editor.current) {
//       // Add a listener for the image insertion
//       editor.current.editor.ui.view.on('imageInsert', (event: { source: { attributes: { src: unknown; }; }; }) => {
//         // Get the image source URL
//         const imageUrl = event.source.attributes.src;
//         // Call the parent component's function to handle image insertion
//         onImageInsert(imageUrl);
//       });
//     }
//   }, [onImageInsert]);

//   return (
//     <Container maxW="container.md">
//       <Box>
//         <h1>CKEditor Example</h1>
//         <form>
//           <Input
//             type="text"
//             placeholder="title"
//           />
//           <Button onClick={insertImage}>Insert Image</Button>
//           <CKEditor
//             editor={ClassicEditor}
//             data={editorData}
//             onReady={(editor) => {
//               editor.editing.view.change((writer) => {
//                 return writer.setStyle(
//                   'height',
//                   '200px',
//                   editor.editing.view.document.getRoot()
//                 );
//               });
//               // Set the editor instance to the ref
//               editor.current = editor;
//             }}
//             onChange={handleEditorDataChange}
//           />
//           {imageUrl && <Image src={imageUrl} alt="Uploaded Image" />}
//           <VStack mt={4}>
//             <div dangerouslySetInnerHTML={{ __html: editorData }} />
//           </VStack>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default TextEditor;
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { Box, Container } from "@chakra-ui/react";

export default function TextEditor() {
  const editorConfiguration = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "imageUpload",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
        "alignment",
        "code",
        "codeBlock",
        "findAndReplace",
        "fontColor",
        "fontFamily",
        "fontSize",
        "fontBackgroundColor",
        "highlight",
        "horizontalAlignment",
        "horizontalLine",
        "htmlEmbed",
        "imageInsert",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
  };

  const [editorData, setEditorData] = useState(
    "<p>Hello from CKEditor 5!</p>"
  );

  useEffect(() => {
    // Initialize the CKEditor data
    setEditorData("<p>Hello from CKEditor 5!</p>");
  }, []);

  // const handleEditorChange = (event: ChangeEvent, editor: any) => {
  //   const data = editor.getData();
  //   setEditorData(data);
  // };

  // const handleTextChange = (e: CKEDITOR.eventInfo) => {
  //   console.log(e.editor.getData());
  // };

  return (
    <>
      <Container maxW="container.md">
        <Box>
          <h1>CKEditor Example</h1>
          <form>
            {/* <textarea
              name="editor"
              onInput={handleTextChange}
              data-ck-editor="1"
            ></textarea> */}
          </form>
          <CKEditor
            editor={ClassicEditor}
            config={editorConfiguration}
            data={editorData}
            color={"black"}
            onReady={(editor) => {
              console.log("Editor is ready:", editor);
            }}
            onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
            // onChange={handleEditorChange}
          />
          <div dangerouslySetInnerHTML={{ __html: editorData }} />
        </Box>
      </Container>
    </>
  );
}
